import React from 'react'
import { BsQrCodeScan } from 'react-icons/bs'
import { MdHistory } from 'react-icons/md'

const QuickAccess = () => {
  return (
    <div className='box my-5 p-3'>
          <h1 className='heading-3'>Quick Access</h1>
          <div className='md:flex gap-5'>
            <div onClick={()=>navigate('/qrcode-generate')} className='flex items-center gap-2 bg-blue-400 text-white p-3 rounded-2xl my-2'>
                <BsQrCodeScan className='text-3xl'/>
                <div className='flex flex-col'>
                    <h2 className='heading-2'>Mark Attendance</h2>
                    <p className='text-[10px] md:hidden'>Scan QR Code to mark attendance</p>
                </div>
            </div>
            <div onClick={()=>navigate('/view-classes')} className='flex items-center gap-2 bg-gray-200 p-3 rounded-2xl my-2'>
                <MdHistory className='text-3xl'/>
                <div className='flex flex-col'>
                    <h2 className='heading-2'>View History</h2>
                    <p className='text-[10px] md:hidden'>Check your attendance records</p>
                </div>
            </div>
          </div>
        </div>
  )
}

export default QuickAccess
