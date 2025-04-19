import axios from "axios"
import { getToken } from "../utils/auth";

const baseUrl = 'http://localhost:3010/auth/login'

interface LoginResponse {
    access_token: string;
}

const login = async (email: string, password: string): Promise<LoginResponse> => {
    try{
        const response = await axios.post(`${baseUrl}`, {email, password});
        if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
        }
        return response.data;
    } catch(error){
        console.error('login failed', error)
        throw error;
    }
}

export default {
    login,
    getToken,
}