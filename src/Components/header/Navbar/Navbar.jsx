import React, { useState } from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { PiStudentFill } from 'react-icons/pi'
import SideBar from '../../SideBar/SideBar'

const Navbar = () => {
  const [siedeBar, setsiedeBar] = useState(false)
  return (
    <>
      <div className='top-0 fixed justify-between flex items-center w-full p-3 navbar'>
        <div className='flex items-center'>
          <PiStudentFill className='icon' />
          <h1 className='heading'>StudentPresance</h1>
        </div>
        <HiOutlineBars3 onClick={() => setsiedeBar(true)} className='icon' />
      </div>
      {siedeBar && <SideBar setsiedeBar={setsiedeBar} />}
    </>
  )
}

export default Navbar
