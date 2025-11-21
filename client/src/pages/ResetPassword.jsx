import React from 'react'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
const navigate = useNavigate()

  return (
    <div className='flex felx-col items-center justify-center min-h-screen bg-[#050505]'>
      <div onClick={() => navigate('/')} className="w-full absolute top-0 cursor-pointer">
            <Navbar/>
        </div>
    </div>
  )
}

export default ResetPassword
