import { composeRequestKey } from "./composeRequestKey"

export const getUsersQueryKey = () => composeRequestKey({name: 'users'})