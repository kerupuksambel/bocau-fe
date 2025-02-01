import { AuthProps } from "@/types/auth";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';


export interface AuthStoreProps {
    auth: AuthProps,
    setAuth: (auth: AuthProps) => void,
    destroyAuth: () => void
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
                account: null
            },
            setAuth: (newAuth) => {
                set(() => ({
                    auth: {
                        ...newAuth,
                        account: newAuth.account ? {
                            address: newAuth.account.address,
                            wei: newAuth.account.wei.toString()
                        } : null
                    },
                }));
            },
            destroyAuth: () => {
                set(() => ({
                    auth: {
                        isAuthenticated: false,
                        address: '',
                        token: '',
                        account: null
                    },
                }));
            }
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useAuthStore