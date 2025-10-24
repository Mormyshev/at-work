import { $host } from ".";
import type { User } from "../types/user";

export async function getUsers(): Promise<{ data: User[] }> {
    try {
        const response = await $host.get<User[]>('/users');
        return response;
    } catch (error) {
        console.error('Ошибка запроса:', error);
        throw error;
    }
}