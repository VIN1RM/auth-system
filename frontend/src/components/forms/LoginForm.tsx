'use client';

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch {
      setError('Email ou senha inválidos');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 rounded bg-slate-800 outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full px-4 py-3 rounded bg-slate-800 outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700">
        Entrar
      </button>
    </form>
  );
}
