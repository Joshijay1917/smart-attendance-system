import React from 'react'
import { SlRefresh } from 'react-icons/sl'

const StuHeader = ({username}) => {
    return (
        <div className='box mt-3 p-3 md:flex md:justify-between'>
            <div>
                <h1 className='heading flex flex-col'>Welcom Back!, <p>{username.name}</p></h1>
                <p>Mark your attendance and see analytics in real-time</p>
            </div>
            <div className='flex gap-3 items-center'>
                <button onClick={() => window.location.href = '/'} className='btn my-3 flex items-center gap-2'><SlRefresh className='text-[24px]' /> Refresh</button>
                <div className='hidden md:inline'>
                    <span>Date:</span>
                    <input type='date' value={new Date().toISOString().split("T")[0]} readOnly />
                </div>
            </div>
        </div>
    )
}

export default StuHeader
