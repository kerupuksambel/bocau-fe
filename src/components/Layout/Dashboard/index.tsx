import { AuthProvider } from "@/context/AuthContext"
import Navbar from "./Navbar"

const DashboardLayout = ({children}: LayoutProps) => {
    return (
        <AuthProvider>
            <Navbar/>
            <div className="mt-[80px]">
                {children}
            </div>
        </AuthProvider>
    )
}

export default DashboardLayout