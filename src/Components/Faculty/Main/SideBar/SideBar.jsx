import React, { useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { BsQrCode } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import { IoCloseCircle } from 'react-icons/io5'
import { MdPeople } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ setsiedeBar }) => {
    const [close, setclose] = useState(false)
    const navigate = useNavigate()

    const closebar = (e) => {
        setclose(true)
        if (e.currentTarget.id === 'dash') {
            navigate('/')
        }
        if (e.currentTarget.id === 'qr') {
            navigate('/qrcode-generate')
        }
        if (e.currentTarget.id === 'classes') {
            navigate('/view-classes')
        }
        if (e.currentTarget.id === 'report') {
            navigate('/report')
        }
        setTimeout(() => {
            setsiedeBar(false)
        }, 500);
    }

    return (
        <div>
            <div className='w-full fixed top-0 bg-black/50 min-h-screen'></div>
            <div className={`bg-gray-100 ${close ? "close" : "sidebar"} py-3 w-[70vw] md:w-[25vw] fixed min-h-screen top-0`}>
                <div className='flex justify-between items-center p-3'>
                    <h1 className='heading'>Options</h1>
                    <IoCloseCircle onClick={(e) => closebar(e)} className='text-3xl text-blue-400' />
                </div>
                <div className='my-5 flex flex-col gap-3'>
                    <div onClick={(e) => closebar(e)} id='dash' className='p-3 mx-2 box flex items-center gap-3 cursor-pointer'>
                        <BiSolidDashboard className='text-2xl' />
                        <p>Dashboard</p>
                    </div>
                    <div onClick={(e) => closebar(e)} id='qr' className='p-3 mx-2 box flex gap-3 items-center cursor-pointer'>
                        <BsQrCode className='text-2xl' />
                        <p>Generate QR</p>
                    </div>
                    <div onClick={(e) => closebar(e)} id='classes' className='p-3 mx-2 box flex gap-3 items-center cursor-pointer'>
                        <MdPeople className='text-2xl' />
                        <p>View Classes</p>
                    </div>
                    <div onClick={(e) => closebar(e)} id='report' className='p-3 mx-2 box flex gap-3 items-center cursor-pointer'>
                        <GoGraph className='text-2xl' />
                        <p>Report</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
