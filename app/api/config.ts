export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/track';
let authorization: string | undefined;
export function signIn(username: string, password: string) {
  if (!username || username.includes(':') || !password) throw new Error('Enter a username and password');
  const bytes = new TextEncoder().encode(`${username}:${password}`);
  authorization = 'Basic ' + btoa(Array.from(bytes, byte => String.fromCharCode(byte)).join(''));
}
export function signOut() { authorization = undefined; }
export function authHeaders(): { Authorization: string } {
  if (!authorization) throw new Error('Sign in before requesting tracks');
  return { Authorization: authorization };
}
