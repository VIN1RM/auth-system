'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../services/auth.service';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('accessToken'));
  }, []);

  async function login(email: string, password: string) {
    const { accessToken } = await authService.login(email, password);
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
  }

  function logout() {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
