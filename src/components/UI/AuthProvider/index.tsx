import useAuthStore from "@/stores/authStore"
import { useNavigate } from "react-router-dom"
import fs from 'fs'
import jwt from 'jsonwebtoken'

const JWT_PUBLIC_KEY = fs.readFileSync('./.keys/public.pem', 'utf-8')

const AuthProvider = () => {
    const auth = useAuthStore()
    const navigate = useNavigate()
    const destroyAuth = () => {
        auth.setAuth({isAuthenticated: false, address: '', token: ''})
    }
    
    if(!auth.auth.isAuthenticated) {
        destroyAuth();
        navigate('/')
    }

    // Check if auth is still valid
    const verifiedJWT = jwt.verify(auth.auth.token, JWT_PUBLIC_KEY, {algorithms: ['RS256']})
    if(!verifiedJWT) {
        destroyAuth();
        navigate('/')
    }
}