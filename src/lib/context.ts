// lib/auth-context.tsx (Custom Auth Context)
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface AuthContextType {
  session: Session | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const AuthContext = createContext<AuthContextType | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authStatus, setAuthStatus] = useState(status); // Local auth status

  useEffect(() => {
      setAuthStatus(status); // Update local auth status
      if (status === 'authenticated') {
          // Redirect to dashboard after successful authentication
          router.push('/dashboard');
      }
  }, [status, router]);

  const value: AuthContextType = {
    session,
    status: authStatus, // Use local auth status
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
