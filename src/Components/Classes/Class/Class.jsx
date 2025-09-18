import React from 'react'
import { BsQrCode } from 'react-icons/bs'
import { FaClock, FaPlay } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdPeople } from 'react-icons/md'

const Class = () => {
    return (
        <div className='box p-3 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h1 className='heading-3'>DBMS</h1>
                <h2 className='heading-2 flex items-center text-green-500 gap-1'><FaPlay /> Active</h2>
            </div>
            <div className='flex justify-between my-3'>
                <h2 className='heading-2 flex items-center gap-1'><FaClock className='text-blue-600'/> 9:00-11:00</h2>
                <h2 className='heading-2 flex items-center gap-1'><FaLocationDot className='text-blue-600'/> Room 101</h2>
                <h2 className='heading-2 flex items-center gap-1'><MdPeople className='text-blue-600'/> 45 students</h2>
            </div>
            <div className='flex justify-between p-3'>
                <div className='flex flex-col items-center text-xl font-medium'>
                    <p>300</p>
                    <p>Present</p>
                </div>
                <div className='flex flex-col items-center text-xl font-medium'>
                    <p>84%</p>
                    <p>Attendance</p>
                </div>
                <div className='flex flex-col items-center text-xl font-medium'>
                    <p>2h</p>
                    <p>Duration</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
                <button className='bg-green-600 text-white p-3 flex items-center justify-center gap-3 text-[15px] font-semibold'><BsQrCode /> Update QR Code</button>
                <button className='border border-gray-300 p-3 text-[15px] flex items-center justify-center gap-3 font-semibold'><MdPeople /> View Live Attendance</button>
            </div>
        </div>
    )
}

export default Class
