import { Writable, writable, derived } from 'svelte/store';


export interface User {
    id: number,
    name: string,
    email: string
}

export type authProps = {
    isAuthenticated: boolean,
    user: User
}

function createAuthStore() {
    const initialValue = {
        isAuthenticated: false,
        user: null
    }
    const auth: Writable<authProps> = writable(initialValue);

    return {
        subscribe: auth.subscribe,
        setAuthenticated: (value: authProps) => auth.update(u => value),
        setUser: (value) => auth.update({ ...value, user: true }),
        reset: () => auth.set(initialValue)
    };
}

class AuthStore {
    constructor(
        // public isAuthenticated: Writable<boolean> = writable(false),
        public user: Writable<User> = writable(null),
    ) { }

    get isAuthenticated() {
        return derived(
            this.user,
            $user => $user != null
        )
    }
}

export const authStore = new AuthStore()
