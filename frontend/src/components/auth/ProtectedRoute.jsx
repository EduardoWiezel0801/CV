import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../shared/LoadingSpinner';

export default function ProtectedRoute({ children }) {
  const { authenticated, loading, checkAuth } = useAuth();
  const [checking, setChecking] = React.useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      // Verificar localStorage primeiro
      const isAuth = localStorage.getItem('isAuthenticated') === 'true';
      
      if (isAuth && !authenticated) {
        // Se tem no localStorage mas não no estado, reverificar
        await checkAuth();
      }
      setChecking(false);
    };
    
    verifyAuth();
  }, []);

  if (loading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // Verificar localStorage como fallback
  const isAuthInStorage = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!authenticated && !isAuthInStorage) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
