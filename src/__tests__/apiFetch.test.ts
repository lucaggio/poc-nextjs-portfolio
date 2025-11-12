import { apiFetch, buildFetchOptions } from "@/lib/api/client";

global.fetch = jest.fn();

describe("apiFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls fetch with correct URL and method", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const result = await apiFetch("/projects", { method: "GET" });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/projects"),
      expect.objectContaining({ method: "GET" })
    );
    expect(result).toEqual({ success: true });
  });

  it("throws an error on failed response", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      text: async () => "Internal Error",
    });

    await expect(apiFetch("/broken")).rejects.toThrow("500");
  });
});

describe("buildFetchOptions", () => {
  it("returns default cache and revalidate for GET", () => {
    const result = buildFetchOptions("GET", {});
    expect(result.method).toBe("GET");
    expect(result.cache).toBe("default");
    expect(result.next?.revalidate).toBe(60);
  });

  it("sets cache to no-store for POST", () => {
    const result = buildFetchOptions("POST", {});
    expect(result.cache).toBe("no-store");
  });
});
