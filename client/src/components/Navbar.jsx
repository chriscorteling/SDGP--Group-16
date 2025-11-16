import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
      <img src={assets.crackcode_dark_logo} alt="" className='w-28 sm:w-32'/>

      <button onClick={() => navigate('/login')}    //navigate to login page onclick LOGIN btn
      className='flex items-center gap-2 border border-none rounded-full px-6 py-2 text-white bg-[#018801] hover:bg-[#018801a3] 
      transition-all'>Login <img src={assets.arrow_icon} alt='' /></button>
    </div>
  )
}

export default Navbar
