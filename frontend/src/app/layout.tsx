'use client';

import './globals.css';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
