import React from 'react'
import { SlRefresh } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='box mt-3 p-3 flex'>
      <h1 className='heading'>Good Morning, Professer!</h1>
      <p>Manage your classes and monitor attendance in real-time</p>
      <div className='flex gap-3'>
      <button onClick={()=>window.location.href = '/'} className='btn my-3 flex items-center gap-2'><SlRefresh className='text-[24px]'/> Refresh</button>
       <input type='date' value={new Date().toISOString().split("T")[0]}/> 
      </div>
    </div>
  )
}

export default Header
