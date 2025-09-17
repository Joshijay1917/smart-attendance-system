import React from 'react'
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { GiTargetShot } from 'react-icons/gi'
import { MdCheckCircle, MdGpsNotFixed } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const GetLocation = () => {
    const [location, setlocation] = useState({
        accuracy: 0,
        logitude: '',
        latitude: ''
    })
    const [status, setstatus] = useState("bad")
    const [track, settrack] = useState(false)
    const navigate = useNavigate()

    const startTrack = () => {
        settrack(true)
        navigator.geolocation.watchPosition(updatePostion,
            (err) => console.error(err),
            { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
        );
    }

    const updatePostion = (position) => {
        const accu = position.coords.accuracy
        const leti = position.coords.latitude
        const long = position.coords.longitude
        setlocation({
            accuracy: accu,
            logitude: long,
            latitude: leti
        })
        if (accu <= 20) {
            setstatus("good")
        } else if (accu <= 50) {
            setstatus("ok")
        } else {
            setstatus("bad")
        }
    }

    const renderIcon = () => {
        if (status === "good")
            return (
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                    <GiTargetShot className="text-green-600" size={48} />
                </div>)
        if (status === "ok")
            return (
                <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center shadow-lg">
                <GiTargetShot className="text-yellow-500" size={48} />
            </div>)
        return (<div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center shadow-lg">
            <MdGpsNotFixed className="text-red-600" size={48} />
        </div>)
    };

    return (
        <div className='box mt-29 p-3'>
            <h1 className='heading'>Get your current classroom Location</h1>
            <button onClick={startTrack} className='w-full bg-green-500 text-white p-2 mx-auto text-xl my-3'>Start Tracking</button>

            <div>
                <p className='font-medium text-lg'>Important Note:</p>
                <div>
                    <p>Range Should be less than 20.</p>
                </div>
            </div>

            {track && <div className='text-center text-2xl my-5 font-bold'>Getting Location...</div>}

            <div className="flex flex-col items-center my-10">
                {renderIcon()}

                {/* Accuracy text */}
                <p className="mt-2 text-lg font-semibold text-gray-700">
                    {Math.round(location.accuracy)}m Range
                </p>
            </div>

            <button onClick={()=>navigate('/qrcode-generate', { state: location })} className='flex items-center bg-blue-400 text-white p-3 gap-3 my-6 mx-auto'><FaLocationDot /> Set Location</button>
        </div>
    )
}

export default GetLocation
