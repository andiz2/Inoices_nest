import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import loginService from '../services/login'
import  { AppDispatch } from '../store'

interface AuthState {
    isLogged: boolean,
    user: {email: string} | null,
    token: string | null,
}

const initialState: AuthState = {
    isLogged: false,
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{email: string}>){
            state.isLogged= true;
            state.user = action.payload;
            state.token = localStorage.getItem('access_token');
        },
        clearUser(state){
            state.isLogged= false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('access_token')
        },
    },
})

export const loginAsync = (email: string, password: string) => async (dispatch: AppDispatch) =>{
    try {
        const loginResponse = await loginService.login(email, password)
       
        if (loginResponse.access_token) {
            localStorage.setItem('access_token', loginResponse.access_token);
            const userData ={email}
            dispatch(setUser(userData))
        } else {
            console.log('failed, no user found')
        }
    } catch (e) {
        console.error('error reducer auth', e)
    }
}

export const {setUser, clearUser} = authSlice.actions;

export default authSlice.reducer;