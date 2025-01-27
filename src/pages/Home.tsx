import { getNonce, signNonce } from '@/api/auth';
import { Icon } from '@iconify-icon/react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { ethers } from 'ethers';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast"

declare global {
    interface Window {
      ethereum?: MetaMaskInpageProvider;
    }
  }

const Home = () => {
    const [address, setAddress] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { toast } = useToast();
    const handleMetamaskAuth = async () => {
        if(! Object.getOwnPropertyNames(window).includes('ethereum')) {
            toast({
                title: 'Error',
                description: 'Metamask is not installed.',
                variant: 'destructive'
            })
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum!);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();

        const challenge = await getNonce(signerAddress);
        console.log(`Challenge : ${challenge.msg}`);
        const signedNonce = await signer.signMessage(challenge.msg);
        const submitChallenge = await signNonce(signedNonce, signerAddress);
        if(!submitChallenge.success) {
            toast({
                title: 'Error',
                description: 'Authentication failed.',
                variant: 'destructive'
            })
            return;
        }

        setAddress(signerAddress);
        setIsAuthenticated(true);
        toast({
            title: 'Success',
            description: 'Authentication successful.',
        })
    }
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Hi!</h1>
            {
                isAuthenticated 
                ?   <p>Welcome, <b>{address}</b></p> 
                :   <button onClick={handleMetamaskAuth} className='bg-primary text-white p-3 rounded-md flex items-center gap-2'>
                        <Icon icon="token-branded:metamask" className='text-2xl'/> Login with Metamask
                    </button>
            }
        </div>
    )
}

export default Home