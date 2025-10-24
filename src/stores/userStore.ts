import { create } from 'zustand';
import type { User, UserFormData } from '../types/user';

interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  hasLocalChanges: boolean; // Флаг для отслеживания локальных изменений
  
  setCurrentUser: (user: User | null) => void;
  updateUser: (id: number, data: Partial<UserFormData>) => void;
  changeUserStatus: (id: number, status: 'active' | 'archive' | 'hidden') => void;
  clearError: () => void;
  isDataLoaded: () => boolean;
  
  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setHasLocalChanges: (hasChanges: boolean) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,
  hasLocalChanges: false,

  setCurrentUser: (user) => set({ currentUser: user }),

  updateUser: (id, data) => {
    
    set(state => {
      const updatedUsers = state.users.map(user => 
        user.id === id 
          ? { 
              ...user, 
              name: data.name !== undefined ? data.name : user.name,
              email: data.email !== undefined ? data.email : user.email,
              phone: data.phone !== undefined ? data.phone : user.phone,
              username: data.nickname !== undefined ? data.nickname : user.username,
              company: data.company !== undefined ? { ...user.company, name: data.company } : user.company,
              address: data.city !== undefined ? { ...user.address, city: data.city } : user.address
            } 
          : user
      );
      
      // Также обновляем currentUser если он совпадает с обновляемым
      const updatedCurrentUser = state.currentUser?.id === id 
        ? updatedUsers.find(user => user.id === id) || state.currentUser
        : state.currentUser;
      
      return {
        users: updatedUsers,
        currentUser: updatedCurrentUser,
        hasLocalChanges: true // Устанавливаем флаг локальных изменений
      };
    });
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
  setError: (error) => set({ error }),
  setHasLocalChanges: (hasChanges) => set({ hasLocalChanges: hasChanges })
}));