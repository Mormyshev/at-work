import type { User } from "../types/user";

export async function getUsers(): Promise<{ data: User[] }> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        return { data };
    } catch (error) {
        console.error('Ошибка запроса:', error);
        throw error;
    }
}
