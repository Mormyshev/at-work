import { create } from 'zustand';
import type { User, UserFormData } from '../types/user';

interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  
  setCurrentUser: (user: User | null) => void;
  updateUser: (id: number, data: Partial<UserFormData>) => void;
  changeUserStatus: (id: number, status: 'active' | 'archive' | 'hidden') => void;
  clearError: () => void;
  isDataLoaded: () => boolean;
  
  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,

  setCurrentUser: (user) => set({ currentUser: user }),

  updateUser: (id, data) => {
    set(state => ({
      users: state.users.map(user => 
        user.id === id 
          ? { 
              ...user, 
              name: data.name || user.name,
              email: data.email || user.email,
              phone: data.phone || user.phone,
              username: data.nickname || user.username,
              company: data.company ? { name: data.company } : user.company,
              address: data.city ? { city: data.city } : user.address
            } 
          : user
      )
    }));
  },

  changeUserStatus: (id, status) => {
    set(state => ({
      users: state.users.map(user => 
        user.id === id 
          ? { 
              ...user, 
              status: status
            } 
          : user
      )
    }));
  },

  clearError: () => set({ error: null }),

  isDataLoaded: () => {
    return get().users.length > 0;
  },

  setUsers: (users) => {set({ users})},
  
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
}));