export const getNonce = async () => {
    const response = await fetch('/api/auth/nonce');
    return response.json();
};

export const signNonce = async (signedNonce: string) => {
    
}