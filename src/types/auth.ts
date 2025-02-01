import { AccountProps } from "./account";

export interface AuthProps {
    isAuthenticated: boolean,
    address: string,
    token: string,
    account?: AccountProps|null
}