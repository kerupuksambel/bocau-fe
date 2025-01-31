import { getNonce, signNonce } from "@/api/auth";
import { Button } from "@/components/ui/shadcn/button";
import { useToast } from "@/hooks/use-toast";
import useAuthStore from "@/stores/authStore";
import { Icon } from '@iconify-icon/react';
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";



const LoginButton = () => {
    const auth = useAuthStore();
    const navigate = useNavigate();
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
    
        if(!submitChallenge.token) {
            toast({
                title: 'Error',
                description: 'Authentication failed.',
                variant: 'destructive'
            })
            return;
        }
    
        auth.setAuth({
            isAuthenticated: true,
            address: signerAddress,
            token: submitChallenge.token
        })
    
        // setAddress(signerAddress);
        // setIsAuthenticated(true);
        toast({
            title: 'Success',
            description: 'Authentication successful.',
        })
    
        setTimeout(() => {
            navigate('/user/dashboard');
        })
    }

    return (
        <Button onClick={handleMetamaskAuth} variant={'secondary'}>
            Login <Icon icon="token-branded:metamask" className='text-2xl'/>
        </Button>
    )
}

export default LoginButton