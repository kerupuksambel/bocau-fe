import api from "@/utils/api";

interface AuthResponse {
    msg: string;
    success?: boolean;
}

export const getNonce = async (address: string): Promise<AuthResponse> => {
    const response = await api.post('/api/auth/nonce', {
        address: address
    });
    return response.data;
};

export const signNonce = async (signedNonce: string, address: string): Promise<AuthResponse> => {
    const response = await api.post('/api/auth/verify', {
        signature: signedNonce,
        address: address
    })

    return response.data
}