import { Writable, writable, derived } from 'svelte/store';


export interface User {
    id: number,
    name: string,
    email: string
}

type AuthImpl = {
    subscribe: Writable<User>["subscribe"],
    isLogged: () => void
    setUser: (value: User) => void,
    reset: () => void
}

function createAuthStore(): AuthImpl {
    const user: Writable<User> = writable({} as User);
    return {
        subscribe: user.subscribe,
        isLogged: () => derived(
            user,
            $user => $user.email !== null
        ),
        setUser: (value: User) => user.set(value),
        reset: () => user.set({} as User)
    };
}

export const authStore = createAuthStore()