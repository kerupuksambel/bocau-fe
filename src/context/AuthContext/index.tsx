import useAuthStore from "@/stores/authStore"
import { useNavigate } from "react-router-dom"
import { importSPKI, jwtVerify } from 'jose'
import React, { createContext, useEffect, useState } from "react"
import { AuthProps } from "@/types/auth"
import { getPubkey } from "@/api/auth"
import { JWTExpired } from "jose/errors"
import { toast } from "@/hooks/use-toast"


interface AuthContextProps {
    auth: AuthProps
    destroyAuth: () => void
    isLoading: boolean
}

const PK = (await getPubkey()).msg
const JWT_PUBLIC_KEY = await importSPKI(PK, 'RS256')

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const auth = useAuthStore()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const destroyAuth = () => {
        auth.setAuth({isAuthenticated: false, address: '', token: '', account: null})
    }
    
    useEffect(() => {
        if(!auth.auth.isAuthenticated) {
            destroyAuth();
            navigate('/')
            return;
        }
        const verifyJWT = async () => {
            try{
                // Check if auth is still valid
                await jwtVerify(auth.auth.token, JWT_PUBLIC_KEY, {algorithms: ['RS256']})
            }catch(e: any){
                if(e instanceof JWTExpired) {
                    toast({
                        title: 'Error',
                        description: 'Your session has expired. Please re-login.',
                        variant: 'destructive'
                    })
                }else{
                    toast({
                        title: 'Error',
                        description: `Something went wrong. Please re-login. Detail : ${e.constructor.name}`,
                        variant: 'destructive'
                    })
                }
                navigate('/');
                destroyAuth();
                return;
            }finally{
                setIsLoading(false)
            }
        }

        verifyJWT()
    }, [])

    return (
        <AuthContext.Provider value={{auth: auth.auth, destroyAuth: destroyAuth, isLoading: true}}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}