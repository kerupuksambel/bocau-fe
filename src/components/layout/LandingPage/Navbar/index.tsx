import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

interface NavbarProps {
    isLogged: boolean
}

const Navbar = ({isLogged}: NavbarProps) => {
    const navigate = useNavigate();
    return (
        <nav className="flex fixed top-0 w-full h-[80px] bg-primary justify-between items-center px-6 py-4 text-white">
            {/* Left: Logo */}
            <div className="text-xl font-bold">bocau</div>

            {/* Middle: Main Menu */}
            <ul className="hidden md:flex space-x-6">
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
            </ul>

            {/* Right: Login Button */}
            {isLogged
                ? <button onClick={() => navigate('/user/dashboard')} className="bg-white text-primary font-bold py-2 px-4 rounded">Dashboard</button>
                : <LoginButton/>
            }
        </nav>
    )
}

export default Navbar;