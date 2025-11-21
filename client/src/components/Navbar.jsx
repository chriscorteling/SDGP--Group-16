import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
      <img src={assets.crackcode_dark_logo} alt="" className='w-28 sm:w-32'/>
    </div>
  )
}

export default Navbar
