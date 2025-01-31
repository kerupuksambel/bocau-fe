import { getNonce, signNonce } from '@/api/auth';
import { Icon } from '@iconify-icon/react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { ethers } from 'ethers';
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/stores/authStore';

declare global {
    interface Window {
      ethereum?: MetaMaskInpageProvider;
    }
  }

const Home = () => {
    // const [address, setAddress] = useState<string | null>(null);
    // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    
    const auth = useAuthStore();
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Hi!</h1>
            {
                auth.auth.isAuthenticated 
                ?  <p>Welcome, <b>{auth.auth.address}</b></p> 
                :  <p>Login first</p>
            }
        </div>
    )
}

export default Home