import { useUserStore } from '../stores';
import { useGetUsersQuery } from '../queries/useGetUsersQuery';
import { useEffect, useRef } from 'react';

export const useUsers = () => {
  const { 
    users, 
    currentUser, 
    loading, 
    error,
    hasLocalChanges,
    setCurrentUser,
    updateUser,
    clearError,
    isDataLoaded,
    setUsers,
    setLoading,
    setError,
  } = useUserStore();
  
  // Используем ref для получения текущего состояния без создания зависимостей
  const usersRef = useRef(users);
  const hasLocalChangesRef = useRef(hasLocalChanges);
  
  // Обновляем refs при изменении состояния
  usersRef.current = users;
  hasLocalChangesRef.current = hasLocalChanges;

  const { 
    data: queryData, 
    isLoading: queryLoading, 
    error: queryError,
    refetch: refetchQuery
  } = useGetUsersQuery();

  useEffect(() => {
    if (queryData) {
      
      // Если есть локальные изменения, не перезаписываем данные
      if (hasLocalChangesRef.current) {
        setLoading(false);
        setError(null);
        return;
      }
      
      if (usersRef.current.length === 0) {
        setUsers(queryData);
      } else {
        // Если данные уже есть, синхронизируем только новые пользователи
        const mergedUsers = queryData.map((queryUser: any) => {
          const existingUser = usersRef.current.find(user => user.id === queryUser.id);
          if (existingUser) {
            // Если пользователь уже есть в Zustand, сохраняем его изменения
            return existingUser;
          } else {
            // Если пользователя нет в Zustand, добавляем из TanStack Query
            return queryUser;
          }
        });
        setUsers(mergedUsers);
      }
      
      setLoading(false);
      setError(null);
    }
  }, [queryData, setUsers, setLoading, setError]);

  useEffect(() => {
    if (queryLoading) {
      setLoading(true);
      setError(null);
    }
  }, [queryLoading, setLoading, setError]);

  useEffect(() => {
    if (queryError) {
      setError(queryError.message || 'Ошибка загрузки данных');
      setLoading(false);
    }
  }, [queryError, setError, setLoading]);

  const fetchUsers = async () => {
    try {
      await refetchQuery();
    } catch (error) {
      console.error('Ошибка при загрузке пользователей:', error);
    }
  };

  return {
    usersData: users,
    users,
    currentUser,
    loading,
    error,
    fetchUsers,
    setCurrentUser,
    updateUser,
    clearError,
    isDataLoaded
  };
};