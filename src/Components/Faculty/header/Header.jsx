import React from 'react'
import { SlRefresh } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if(currentHour >= 5 && currentHour < 12) {
      return "Morning"
    } else if(currentHour >= 12 && currentHour < 17) {
      return "Afternoon"
    } else if(currentHour >= 17 && currentHour < 21) {
      return "Evening"
    } else {
      return "Night"
    }
  }

  return (
    <div className='box mt-3 p-3 md:flex md:justify-between'>
      <div>
      <h1 className='heading'>Good {getTimeOfDay()}, Professer!</h1>
      <p>Manage your classes and monitor attendance in real-time</p>
      </div>
      <div className='flex gap-3'>
      <button onClick={()=>window.location.href = '/'} className='btn my-3 flex items-center gap-2'><SlRefresh className='text-[24px]'/> Refresh</button>
       <input type='date' value={new Date().toISOString().split("T")[0]} readOnly/> 
      </div>
    </div>
  )
}

export default Header
