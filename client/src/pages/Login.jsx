import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios'

function Login() {

    const navigate = useNavigate()
    const {backendUrl, setIsLoggedIn} = useContext(AppContent)
    
    const [state, setState] = useState('Sign Up')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try{
            e.preventDefault();

            axios.defaults.withCredentials = true

            if(state == 'Sign Up') {
                const {data} = await axios.post(backendUrl + '/api/auth/register', {name, email, password})
                if(data.success){
                    setIsLoggedIn(true)
                    navigate('/')
                }else{
                    alert(data.message)
                }
            }else {

            }
        } catch (error) {
            alert(data.message)
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen sm:px-6 bg-[#050505]'>
        <div className="w-full flex items-center p-4 sm:p-6 sm:px-24 absolute top-0"></div>
      <img onClick={() => navigate('/')} src={assets.crackcode_dark_logo} alt="" className='absolute top-5 sm:left-20 
      top-5 w-28 sm:w-32 cursor-pointer'/>
      <div className='bg-[#121212] p-10 rounded-lg shadow-lg w-f sm:w-96 text-[#018801] text-sm'>

        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state == 'Sign Up' ? 'Create Account' : 'Login'}</h2>

        <p className='text-center text-sm mb-6'>{state == 'Sign Up' ? 'Create your account' : 'Login to your account!'}</p>

        <form onSubmit={onSubmitHandler}>
            {state === 'Sign Up' && (
                <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-500'>
                    <img src={assets.person_icon} alt="" />
                    <input onChange={e => setName(e.target.value)} 
                    value={name}
                    className='bg-transaprent outline-none text-white' type="text" placeholder='Full Name' required/>
                </div>
            )}
            
            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-500'>
                <img src={assets.mail_icon} alt="" />
                <input 
                onChange={e => setEmail(e.target.value)} 
                value={email}className='bg-transaprent outline-none text-white' type="email" placeholder='Email id' required/>
            </div>

            <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-500'>
                <img src={assets.lock_icon} alt="" />
                <input
                onChange={e => setPassword(e.target.value)} 
                value={password} 
                className='bg-transaprent outline-none text-white' type="password" placeholder='Password' required/>
            </div>

            <p onClick={() => navigate('/reset-password')} className='mb-4 text-[#018801] cursor-pointer'>Forgot Password</p>

            <button className='w-full py-2.5 rounded-full bg-[#018801] hover:bg-[#018801a3]
            text-white font-medium'>{state}</button>
        </form>

        {state === 'Sign Up' ? (
            <p className='text-gray-400 text-center text-xs mt-4'>Already have an account?{' '}
            <span onClick={() => setState('Login')} className='text-[#57de57] cursor-pointer underline'>Login here</span>
        </p>
        ) 
        : (
            <p className='text-gray-400 text-center text-xs mt-4'>Don't have an account?{' '}
            <span onClick={() => setState('Sign Up')} className='text-[#57de57] cursor-pointer underline'>Sign Up</span>
        </p>
        )}
        
      </div>
    </div>
  )
}

export default Login
