/*
 * Fetch GitHub stargazers count at build time.
 *
 * Runs once per build in Astro's frontmatter. GitHub's public API allows
 * 60 unauthenticated requests per hour per IP — plenty for a build.
 *
 * Failure modes (404, network error, rate limit) fall back to `null` so
 * the UI can gracefully omit the count instead of breaking the build.
 */

const CACHE = new Map<string, number | null>();

export async function getGithubStars(
  owner: string,
  repo: string,
): Promise<number | null> {
  const key = `${owner}/${repo}`;
  if (CACHE.has(key)) return CACHE.get(key)!;

  try {
    const res = await fetch(`https://api.github.com/repos/${key}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'dentalpin-landing',
      },
      // 5s upper bound — the build shouldn't stall on a flaky GitHub.
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) {
      CACHE.set(key, null);
      return null;
    }
    const data = (await res.json()) as { stargazers_count?: number };
    const count = typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
    CACHE.set(key, count);
    return count;
  } catch {
    CACHE.set(key, null);
    return null;
  }
}

export function formatStars(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10_000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return `${Math.round(n / 1000)}k`;
}
