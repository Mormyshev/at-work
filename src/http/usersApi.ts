import { $host } from ".";

export async function getUsers() {
    try {
        const response = await $host.get('/users');
        return response;
    } catch (error) {
        console.error('Ошибка запроса:', error);
        throw error;
    }
}