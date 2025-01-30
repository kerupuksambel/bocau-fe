import useAuthStore from "@/stores/authStore"
import { useNavigate } from "react-router-dom"
import fs from 'fs'
import jwt from 'jsonwebtoken'

const JWT_PUBLIC_KEY = fs.readFileSync('./public.pem')
const AuthProvider = () => {
    const auth = useAuthStore()
    const navigate = useNavigate()
    
    if(!auth.auth.isAuthenticated) {
        navigate('/')
    }

    // Check if auth is still valid
    // const decodedJWT = jwt.decode() 
}