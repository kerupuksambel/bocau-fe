import useAuthStore from "@/stores/authStore"
import { useNavigate } from "react-router-dom"
import { importSPKI, jwtVerify } from 'jose'
import React, { createContext, useEffect, useState } from "react"
import { AuthProps } from "@/types/auth"
import { getPubkey } from "@/api/auth"
import { JOSEError, JWTClaimValidationFailed, JWTExpired, JWTInvalid } from "jose/errors"
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
        auth.setAuth({isAuthenticated: false, address: '', token: ''})
    }
    
    
    useEffect(() => {
        if(!auth.auth.isAuthenticated) {
            // destroyAuth();
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
                }else if(e instanceof JWTInvalid) {
                    toast({
                        title: 'Error',
                        description: 'Invalid JWT. Please re-login.',
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
            {children}
        </AuthContext.Provider>
    )
}