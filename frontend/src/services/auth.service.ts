import { apiFetch } from '../lib/api';

export async function login(email: string, password: string) {
  const response = await apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  return response.json();
}

export async function register(email: string, password: string) {
  const response = await apiFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
}
