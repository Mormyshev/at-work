import { useUserStore } from '../stores';
import { useGetUsersQuery } from '../queries/useGetUsersQuery';
import { useEffect } from 'react';

export const useUsers = () => {
  const { 
    users, 
    currentUser, 
    loading, 
    error,
    setCurrentUser,
    updateUser,
    clearError,
    isDataLoaded,
    setUsers,
    setLoading,
    setError
  } = useUserStore();

  const { 
    data: queryData, 
    isLoading: queryLoading, 
    error: queryError,
    refetch: refetchQuery
  } = useGetUsersQuery();

  useEffect(() => {
    if (queryData) {
      setUsers(queryData);
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