import { AuthProps } from "@/types/auth";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';


interface AuthStoreProps {
    auth: AuthProps,
    setAuth: (auth: AuthProps) => void
}

// const useAuthStore = create<AuthStoreProps>((set) => ({
//     auth: {
//         isAuthenticated: false,
//         address: '',
//         token: '',
//     },
//     setAuth: (newAuth) => {
//         set(() => ({
//             auth: newAuth,
//         }));
//     },
// }));

const useAuthStore = create<AuthStoreProps>()(
    persist(
        (set, _get) => ({
            auth: {
                isAuthenticated: false,
                address: '',
                token: '',
            },
            setAuth: (newAuth) => {
                set(() => ({
                    auth: newAuth,
                }));
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useAuthStore