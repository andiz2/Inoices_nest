import {useField} from '../hooks'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { loginAsync } from '../reducers/authReducer'
import { AppDispatch } from '../store'

const LoginForm = () => {
    const userInput = useField('text')
    const {reset: resetUser, ...user} = userInput
    const passInput = useField('password')
    const {reset: resetPass, ...pass} = passInput
   
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const login = async (e: React.FormEvent) =>{
        e.preventDefault()
        try {
            await dispatch(loginAsync(user.value, pass.value))
            navigate('/invoices')
        }catch(e) {
            console.error('Login failed', e)
        }
    }

    return (
        <form onSubmit={login} className="space-y-4">
            <div>
                <label className="block">Email</label>
                <input {...user} placeholder="Enter your email" className="border p-2 w-full rounded" />
            </div>
            <div>
                <label className="block">Password</label>
                <input {...pass} placeholder="Enter your password" className="border p-2 w-full rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
        </form>
    );
}

export default LoginForm