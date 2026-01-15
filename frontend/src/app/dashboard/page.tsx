'use client';

import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push('/login');
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-900 p-10 rounded-xl space-y-6 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-300">Usuário autenticado</p>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
