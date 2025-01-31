import { Button } from "@/components/ui/shadcn/button";
import { toast } from "@/hooks/use-toast";
import useAuthStore from "@/stores/authStore";
import { Icon } from "@iconify-icon/react"
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    const auth = useAuthStore();
    const destroyAuth = () => {
        auth.setAuth({isAuthenticated: false, address: '', token: ''})
    }
    const handleLogout = () => {
        destroyAuth()
        navigate('/')
        toast({
            title: 'Success',
            description: 'You have logged out successfully.',
        })
        return;
    }

    return (
        <nav className="flex fixed top-0 w-full h-[80px] bg-primary justify-between items-center px-6 py-4 text-white">
            {/* Left: Logo */}
            <div className="flex flex-nowrap items-center space-x-8">
                <div className="text-xl font-bold">bocau</div>

                {/* Middle: Main Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#pricing" className="hover:underline">Auctions</a></li>
                    <li><a href="#features" className="hover:underline">Items</a></li>
                    <li><a href="#about" className="hover:underline">History</a></li>
                </ul>
            </div>

            {/* Right: Logout Button */}
            <div className="flex flex-nowrap items-center space-x-8">
                <p>Welcome, <b>{auth.auth.address}</b></p>
                <Button variant="destructive" onClick={handleLogout}>
                    <Icon icon="ic:baseline-logout" /> Logout
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;