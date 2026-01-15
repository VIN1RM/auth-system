'use client';

import { useState } from 'react';
import { register } from '../../services/auth.service';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    try {
      await register(email, password);
      router.push('/login');
    } catch {
      setError('Erro ao cadastrar');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Cadastro</h2>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 rounded bg-slate-800"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full px-4 py-3 rounded bg-slate-800"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-green-600 py-3 rounded hover:bg-green-700">
        Criar conta
      </button>
    </form>
  );
}
