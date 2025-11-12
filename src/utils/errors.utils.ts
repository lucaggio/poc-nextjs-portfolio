export function handleFetchError(
  err: unknown,
  context: string,
  abortDetails?: string
) {
  const error = err as Error;

  if (error.name === "AbortError") {
    console.log(
      `Fetch aborted ${abortDetails ? ` (${abortDetails})` : ""} - (${context})`
    );
  } else {
    console.error(`Fetch error (${context})`, error);
  }
}
