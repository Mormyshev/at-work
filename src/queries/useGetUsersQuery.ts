import { getUsers } from "../http/usersApi";
import { getUsersQueryKey } from "../utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/user";

export const useGetUsersQuery = () => {
    return useQuery({
        queryKey: getUsersQueryKey(),
        queryFn: () => getUsers(),
        select: (response) => {
            const usersWithStatus = response.data.slice(0, 6).map((user: User) => ({
                ...user,
                status: 'active' as const
            }));
            console.log('Пользователи с статусом:', usersWithStatus);
            return usersWithStatus;
        },
        staleTime: 5 * 60 * 1000, 
        gcTime: 10 * 60 * 1000,
    });
};