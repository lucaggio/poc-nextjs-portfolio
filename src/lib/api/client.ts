import { API_BASE_URL, API_VERSION } from "./constants";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

/**
 * Defines the allowed options for the `apiFetch` helper.
 * Compatible with Next.js caching and ISR (Incremental Static Regeneration).
 * Also supports AbortController, authentication tokens, and custom headers.
 */
export type RequestOptions = {
  method?: HttpMethod; // HTTP method (default: "GET")
  body?: unknown; // Request body
  headers?: Record<string, string>; // Custom request headers
  token?: string; // Optional Bearer token for auth
  revalidate?: number; // ISR revalidation time (seconds) — only for GET requests
  tags?: string[]; // ISR cache tags for revalidateTag()
  cache?: RequestCache; // Cache mode ("default", "no-store", etc.)
  signal?: AbortSignal; // AbortController signal for cancellation
};

/**
 * Safely parses the error body from a failed fetch.
 * Avoids JSON parse crashes and truncates long responses for cleaner logs.
 */
async function safeParseError(res: Response): Promise<string> {
  try {
    const text = await res.text();
    return text.length > 150 ? `${text.slice(0, 150)}…` : text;
  } catch {
    return "Unknown error body";
  }
}

/**
 * Extends fetch options with Next.js ISR fields (revalidate, tags)
 */
type NextFetchOptions = RequestInit & {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};
/**
 * Builds the complete fetch configuration object
 */
export function buildFetchOptions(
  method: HttpMethod,
  options: RequestOptions
): NextFetchOptions {
  const {
    body,
    headers = {},
    token,
    revalidate,
    tags,
    cache,
    signal,
  } = options;

  const isGET = method === "GET";
  const isCacheForISR =
    !cache || cache === "default" || cache === "force-cache";

  return {
    method,
    signal,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    // Apply caching only to GET requests; all other methods always fetch fresh data
    cache: isGET ? cache ?? "default" : "no-store",
    // Enable Next.js ISR only when cache is "default" or "force-cache"
    next:
      isGET && isCacheForISR
        ? { revalidate: revalidate ?? 60, tags }
        : undefined,
  };
}

/**
 * Generic API fetch wrapper with simple error handling.
 * - Uses TypeScript generics for full type safety.
 * - Logs detailed error messages to help with debugging.
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const method = options.method ?? "GET";
  const url = `${API_BASE_URL}${API_VERSION}${endpoint}`;
  const fetchOptions = buildFetchOptions(method, options);

  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      const errText = await safeParseError(res);
      throw new Error(
        `${method} ${endpoint} failed (${res.status}): ${errText}`
      );
    }

    return (await res.json()) as T;
  } catch (err) {
    if (err instanceof Error) {
      const isAbort = err.name === "AbortError";
      const message = `${method} ${endpoint}: ${err.message}`;
      if (isAbort) console.debug(`[apiFetch] Aborted ${message}`);
      else console.error(`[apiFetch] Failed ${message}`);
    }

    const message =
      err instanceof Error
        ? `Fetch failed on ${method} ${endpoint}: ${err.message}`
        : `Unknown fetch error on ${method} ${endpoint}`;

    console.error(`[apiFetch] ${message}`);
    throw err;
  }
}
