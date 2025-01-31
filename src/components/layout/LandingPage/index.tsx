import useAuthStore from "@/stores/authStore"
import Navbar from "./Navbar"

const LandingPageLayout = ({children}: LayoutProps) => {
    const auth = useAuthStore();
    
    return (
        <>
        <Navbar isLogged={auth.auth.isAuthenticated} />
            <div className="mt-[80px] min-h-[100vh]">
                {children}
            </div>
            <div className="w-full h-[200px] bg-primary text-white">
                LP Footer
            </div>
        </>
    )
}

export default LandingPageLayout