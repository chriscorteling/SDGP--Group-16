import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function Home() {
  return (
    <div className='flex felx-col items-center justify-center min-h-screen bg-[#242424]'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home

