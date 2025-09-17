import React from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { PiStudentFill } from 'react-icons/pi'

const Navbar = () => {
  return (
    <>
    <div className='top-0 fixed justify-between flex items-center w-full p-3 box'>
        <div className='flex items-center'>
      <PiStudentFill className='icon'/>
      <h1 className='heading'>StudentPresance</h1>
        </div>
        <HiOutlineBars3 className='icon'/>
    </div>
        <hr />
    </>
  )
}

export default Navbar
