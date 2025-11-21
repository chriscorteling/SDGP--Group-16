import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

function ResetPassword() {
const navigate = useNavigate()

const [email, setEmail] = useState('')
const [newPassword, setNewPassword] = useState('')
const [isEmailSent, setIsEmailSent] = useState('')
const [otp, setOtp] = useState(0)
const [isOtpSubmitted, setIsOtpSubmitted] = useState(false)

const inputRefs = React.useRef([])

  const handleInput = (e, index) => { //move cursor to the next text area after one digit is entered
    if(e.target.value.length > 0 && index < inputRefs.current.length -  1){
      inputRefs.current[index + 1].focus();
    }
  } 

  const handleKeyDown = (e, index) => {
    if(e.key === 'Backspace' && e.target.value === '' && index > 0){
      inputRefs.current[index - 1].focus();
    }
  }

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if(inputRefs.current[index]){
        inputRefs.current[index].value = char;
      }
    });
  }

  return (
    <div className='flex felx-col items-center justify-center min-h-screen bg-[#050505]'>
      <div onClick={() => navigate('/')} className="w-full absolute top-0 cursor-pointer">
            <Navbar/>
      </div>

{/* Verifying Registered Email */}

{!isEmailSent && 
      <form className='bg-[#121212] p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
        <p className='text-center mb-6 text-[#018801]'>Enter your registered email address.</p>
        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-500'>
          <img className='w-3 h-3 ' src={assets.mail_icon} alt="" />
          <input className='bg-transparent outline-none text-white' type="email" placeholder='Email id' value={email} 
          onChange={e => setEmail(e.target.value)} required/>
        </div>
        <button className='w-full py-2.5 bg-[#018801] hover:bg-[#018801a3] rounded-full text-white font-medium'>Submit</button>
      </form>
}      

{/* //otp input form */}

{!isOtpSubmitted && isEmailSent &&
      <form className='bg-[#121212] p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
        <p className='text-center mb-6 text-[#018801]'>Enter this 6-digit code sent to your email id.</p>

        <div className='flex justify-between mb-8 gap-1.5' onPaste={handlePaste}>
          {Array(6).fill(0).map((_, index) => (
            <input type="text" maxLength='1' key={index} required
            className='w-12 h-12 bg-gray-500 text-white text-center text-xl rounded-md'
            ref={e => inputRefs.current[index] = e}
            onInput={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button className='w-full py-2.5 bg-[#018801] hover:bg-[#018801a3] rounded-full text-white font-medium'>Verify Email</button>
      </form>
}      

{/* Enter new Password */}

{isOtpSubmitted && isEmailSent &&
      <form className='bg-[#121212] p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>New Password</h1>
        <p className='text-center mb-6 text-[#018801]'>Enter the new password below.</p>
        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-500'>
          <img className='w-3 h-3 ' src={assets.lock_icon} alt="" />
          <input className='bg-transparent outline-none text-white' type="password" placeholder='Password' value={newPassword} 
          onChange={e => setNewPassword(e.target.value)} required/>
        </div>
        <button className='w-full py-2.5 bg-[#018801] hover:bg-[#018801a3] rounded-full text-white font-medium'>Submit</button>
      </form>
}      

    </div>
  )
}

export default ResetPassword
