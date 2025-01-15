import { Icon } from '@iconify-icon/react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { ethers } from 'ethers';
import { useState } from 'react';

declare global {
    interface Window {
      ethereum?: MetaMaskInpageProvider;
    }
  }

const Home = () => {
    const [address, setAddress] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const handleMetamaskAuth = async () => {
        if(! Object.getOwnPropertyNames(window).includes('ethereum')) {
            alert('Metamask is not installed.');
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum!);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        setAddress(signerAddress);
        setIsAuthenticated(true);
        console.log(`Connected address : ${address}`);
    }

    
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Hi!</h1>
            {
                isAuthenticated 
                ?   <p>Address : {address}</p> 
                :   <button onClick={handleMetamaskAuth} className='bg-primary text-white p-3 rounded-md flex items-center gap-2'>
                        <Icon icon="token-branded:metamask" className='text-2xl'/> Login with Metamask
                    </button>
            }
        </div>
    )
}

export default Home