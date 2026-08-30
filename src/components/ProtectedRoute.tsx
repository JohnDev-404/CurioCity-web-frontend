import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const ctx = useContext(AuthContext);
  if (!ctx) return <div>Loading...</div>;
  const { user, loading } = ctx;
  if (loading) return <div className="text-center mt-10">Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};