import { create } from "zustand";

interface AuthProps {
    isAuthenticated: boolean,
    address: string,
}

interface AuthStoreProps {
    auth: AuthProps,
    setAuth: (auth: AuthProps) => void
}

const useAuthStore = create<AuthStoreProps>((set) => ({
    auth: {
        isAuthenticated: false,
        address: '',
    },
    setAuth: (newAuth) => {
        set(() => ({
            auth: newAuth,
        }));
    },
}));

export default useAuthStore