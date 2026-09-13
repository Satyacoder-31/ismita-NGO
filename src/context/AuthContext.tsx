import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role?: User['role']) => void;
  quickLogin: (role: User['role']) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

const DEMO_USERS: Record<User['role'], User> = {
  donor: {
    id: 'usr-1',
    name: 'Vikramaditya Sengupta',
    email: 'vikram.sengupta@example.com',
    phone: '+91 98765 43210',
    role: 'donor',
    panNumber: 'ABCDE1234F',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    address: {
      street: '42, Ashoka Enclave, Vasant Vihar',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110057',
    },
  },
  sponsor: {
    id: 'usr-2',
    name: 'Dr. Radhika Nair',
    email: 'radhika.nair@example.com',
    phone: '+91 98200 98765',
    role: 'sponsor',
    panNumber: 'PRNKA8765L',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    address: {
      street: '8B, Palm Grove, Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
    },
  },
  volunteer: {
    id: 'usr-3',
    name: 'Karan Mehra',
    email: 'karan.mehra@example.com',
    phone: '+91 99110 55443',
    role: 'volunteer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    address: {
      street: '15, Heritage Towers, Powai',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400076',
    },
  },
  admin: {
    id: 'usr-admin',
    name: 'Dr. Alok Verma (Trustee & Admin)',
    email: 'trustee.alok@ismitafoundation.org',
    phone: '+91 98100 11223',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    address: {
      street: 'Ismita Charitable Foundation Headquarters, Mandir Marg',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110001',
    },
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('asf_auth_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    // Default to donor logged in for rich initial experience
    return DEMO_USERS.donor;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('asf_auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('asf_auth_user');
    }
  }, [user]);

  const login = (email: string, role: User['role'] = 'donor') => {
    const name = email.split('@')[0].replace('.', ' ');
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const newUser: User = {
      id: `usr-${Date.now()}`,
      name: formattedName,
      email,
      phone: '+91 98765 00000',
      role,
      panNumber: 'ABCDE9999Z',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop',
      address: {
        street: '123, Green Avenue',
        city: 'New Delhi',
        state: 'Delhi',
        pincode: '110001',
      },
    };
    setUser(newUser);
  };

  const quickLogin = (role: User['role']) => {
    setUser(DEMO_USERS[role]);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        quickLogin,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
