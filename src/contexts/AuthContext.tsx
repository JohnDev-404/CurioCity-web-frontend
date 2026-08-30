import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

// ---------- Types ----------
interface User {
  id: string;
  email: string;
  fullName: string;
  bio?: string;
  location?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: { email: string; password: string; fullName: string }) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

// ---------- Create the context ----------
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---------- AuthProvider component ----------
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // On mount: check for token and fetch user
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('/users/me')
        .then(res => setUser(res.data))
        .catch(() => {
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // ---------- Auth functions ----------
  const login = async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const register = async (data: { email: string; password: string; fullName: string }) => {
    const res = await api.post('/auth/register', data);
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
  };

  const forgotPassword = async (email: string) => {
    await api.post('/auth/forgot-password', { email });
  };

  const resetPassword = async (token: string, newPassword: string) => {
    await api.post('/auth/reset-password', { token, newPassword });
  };

  // ---------- Provider value ----------
  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};