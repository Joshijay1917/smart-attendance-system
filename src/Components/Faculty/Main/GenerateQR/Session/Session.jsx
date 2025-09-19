import React, { useContext, useEffect, useState } from 'react'
import { BsQrCode } from 'react-icons/bs'
import { v4 as uuid } from 'uuid'
import { Store } from '../../../../../Context/Store'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Session = ({roomLocation}) => {
    const storeData = useContext(Store)
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        subject : '',
        duration: '',
        location: '', 
        roomLocation: {},
        students: ''
    })
    const [error, seterror] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target

        setformData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log("UseEff", roomLocation);
        
        if(Object.keys(roomLocation).length === 0) {
            seterror("Room current Location not found! Please first set room location")
        } else {
            setformData(prev => ({
                ...prev,
                roomLocation: roomLocation
            }))
            seterror("")
        }
    }, [roomLocation])
    

    const generateQR = (e) => {
        e.preventDefault();
        if(storeData.session) {
            seterror("Session already running")
        }
        if(!formData.subject) {
            seterror("Select Subject")
            return;
        }
        if(!formData.duration) {
            seterror("Select Duration")
            return;
        }
        if(!formData.location) {
            seterror("Enter location")
            return;
        }
        if(!formData.students) {
            seterror("Enter no. of students")
            return;
        }
        console.log("location:",formData.roomLocation);
        if(Object.keys(formData.roomLocation).length === 0) {
            seterror("Room Location not found")
            return;
        }

        const id = uuid();
        storeData.setsession({id: id, ...formData})
        return;
    }

    return (
        <form className='box p-3 mt-5' onSubmit={generateQR}>
            <h1 className='heading-3'>Create Session</h1>
            <div className='flex flex-col gap-3 justify-center mt-5'>
                <div className='flex justify-around items-center'>
                    <label>Subject:</label>
                    <select onChange={handleChange} className='border border-gray-200 p-3 w-3/4' name="subject">
                        <option value=''>Select Subject</option>
                        <option value='Data base management system'>DBMS</option>
                        <option value='Maths'>Maths</option>
                        <option value='Digital Fundamentals'>Digital Fundamentals</option>
                    </select>
                </div>
                <div className='flex justify-around items-center'>
                    <label>Duration:</label>
                    <select onChange={handleChange} className='border border-gray-200 p-3 w-3/4' name="duration">
                        <option value={0}>Select Duration</option>
                        <option value={15}>15 Minutes</option>
                        <option value={30}>30 Minutes</option>
                        <option value={45}>45 Minutes</option>
                        <option value={60}>1 hour</option>
                        <option value={120}>2 hour</option>
                    </select>
                </div>
                <div className='flex justify-around items-center'>
                    <label>Location:</label>
                    <input onChange={handleChange} type="text" name='location' className='border border-gray-200 p-3 w-3/4' placeholder='Room no.'/>
                    {/* <button onClick={()=>navigate('/get-location')} className='bg-blue-500 text-white p-3 rounded-full ml-3'><FaLocationDot className='text-2xl'/></button> */}
                </div>
                <div className='flex justify-around items-center'>
                    <label>Students:</label>
                    <input onChange={handleChange} type="text" name='students' className='border border-gray-200 p-3 w-3/4' placeholder='Total no. of students'/>
                </div>
            </div>
            {error && <p className='text-red-500 text-center my-3'>{error}</p>}
            <button type='submit' className='bg-green-500 text-white flex items-center gap-3 p-3 m-auto my-5'><BsQrCode /> Generate QR Code</button>
        </form>
    )
}

export default Session
