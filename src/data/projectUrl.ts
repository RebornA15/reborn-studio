// Reject unsafe schemes, credentials, and public unencrypted destinations.
export function getProjectUrl(value: string): string | undefined {
  try {
    const url = new URL(value.trim());
    if (url.username || url.password) return undefined;
    const local = url.hostname === 'localhost' || url.hostname === '[::1]' || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(url.hostname);
    if (url.protocol === 'https:' || (import.meta.env.DEV && local && url.protocol === 'http:')) return url.href;
  } catch { /* Missing or invalid URLs intentionally have no destination. */ }
  return undefined;
}
