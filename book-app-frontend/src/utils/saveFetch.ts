export async function saveFetch<T>(
  url: string
): Promise<[T | null, Error | null]> {
  try {
    const response = await fetch(url)
    if (response.ok) {
      return [await response.json(), null]
    }

    throw new Error(`Something went wrong: ${response.statusText}`)
  } catch (error) {
    return [null, error as Error]
  }
}
