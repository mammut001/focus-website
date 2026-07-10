export const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/focus-website' : '';

export function asset(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
