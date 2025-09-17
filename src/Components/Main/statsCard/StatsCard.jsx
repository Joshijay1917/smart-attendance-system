import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsGraphUp } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { MdPeople } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'

const StatsCard = ({ type, number, title }) => {
    const [icon, seticon] = useState("")
    useEffect(() => {

    }, [])

    const statIcon = () => {
        if (type == "students") {
            return <MdPeople className='text-4xl text-blue-400' />
        } else if(type == "rate") {
            return <BsGraphUp className='text-4xl text-green-400' />
        } else if(type == "sessions") {
            return <FaPlay className='text-3xl text-yellow-400' />
        } else {
            return <SlCalender className='text-3xl text-purple-400' />
        }
    }

    return (
        <div className='flex flex-col items-center rounded-2xl box p-5 gap-2'>
            {statIcon()}
            <h1 className='heading'>{number}</h1>
            <p className='heading-2'>{title}</p>
        </div>
    )
}

export default StatsCard
