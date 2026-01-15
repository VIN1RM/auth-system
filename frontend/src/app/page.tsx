import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Auth System</h1>
        <p className="text-gray-300">Sistema de autenticação completo</p>

        <div className="flex gap-4 justify-center">
          <Link href="/login" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
            Login
          </Link>
          <Link href="/register" className="px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-700">
            Cadastro
          </Link>
        </div>
      </div>
    </main>
  );
}
