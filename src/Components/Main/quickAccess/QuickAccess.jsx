import React from 'react'
import { BsQrCode } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import { MdPeople } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const QuickAccess = () => {
  const navigate = useNavigate()

  return (
    <div className='box my-5 p-3'>
      <h1 className='heading'>Quick Access</h1>
      <div>
        <div onClick={()=>navigate('/qrcode-generate')} className='flex items-center gap-2 bg-blue-400 text-white p-3 rounded-2xl my-2'>
            <BsQrCode className='text-3xl'/>
            <div className='flex flex-col'>
                <h2 className='heading-2'>Generate QR Code</h2>
                <p>Create Attendance QR Code</p>
            </div>
        </div>
        <div className='flex items-center gap-2 bg-gray-200 p-3 rounded-2xl my-2'>
            <MdPeople className='text-3xl'/>
            <div className='flex flex-col'>
                <h2 className='heading-2'>View Classes</h2>
                <p>Manage your classes</p>
            </div>
        </div>
        <div className='flex items-center gap-2 bg-gray-200 p-3 rounded-2xl my-2'>
            <GoGraph className='text-3xl'/>
            <div className='flex flex-col'>
                <h2 className='heading-2'>Reports</h2>
                <p>View analytics of attandance</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QuickAccess
