import React, { useCallback, useRef, useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { useAuth } from '../../../../Context/AuthContext';

const MarkAttendance = () => {
    const { currentUser } = useAuth()
    const videoRef = useRef();
    const [errMsg, seterrMsg] = useState('')
    const [ZoomLevel, setZoomLevel] = useState(1)
    const [loading, setloading] = useState(false)
    const [disableScanner, setdisableScanner] = useState(false)

    const onUpdate = useCallback(({ x, y, scale }) => {
        const { current: video } = videoRef;

        if (video) {
            const value = make3dTransformValue({ x, y, scale });

            video.style.setProperty("transform", value);
        }
    }, []);

    const isTokenValid = async (token) => {
        if (!token) return false;

        try {
            const strRes = await fetch('https://check-ip-test-backend.onrender.com/api/v1/qr/scan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token, userId: currentUser.name })
            });
            const res = await strRes.json()

            console.log("Res:", res);
            if (res.success) {
                return true;
            }

            return false;
        } catch (error) {
            console.error("backend call err ", error)
            return false;
        }
    };

    const handleScan = async (data) => {
        setloading(true)
        console.log("Data ", data);
        if (data[0].rawValue) {
            try {
                if (!(await isTokenValid(data[0].rawValue))) {
                    console.log("Attendance Not marked")
                    setloading("Failed to mark Attendance");
                    setTimeout(() => {
                        setloading('')
                    }, 5000);
                    return;
                }
                setloading("Attendance Marked")
                setTimeout(() => {
                    setloading('')
                }, 5000);
            } catch (error) {
                setloading("Err")
                console.log("Err ", error);
            }
        } else {
            setloading('No Data Found')
        }
    }

    const handleError = (err) => {
        console.error(err)
        seterrMsg(err.toString());
    }

    const handleZoomChange = (e) => {
        setZoomLevel(parseFloat(e.target.value));
        // Apply zoom to the video element if possible (e.g., via CSS transform)
        if (videoRef.current) {
            videoRef.current.style.transform = `scale(${ZoomLevel})`;
        }
    };

    return (
        <div className='box p-3 mt-3'>
            <h1 className='heading-3'>Mark Attendance</h1>

            {!disableScanner ? <QuickPinchZoom onUpdate={onUpdate}>
                <Scanner
                    onError={handleError}
                    onScan={handleScan}
                    ref={videoRef}
                />
            </QuickPinchZoom>
            :
            <div className='text-center'>
                <p>Only One Time Scan is Allowed!</p>
            </div>}

            <div>
                <label htmlFor="zoom">Zoom:</label>
                <input
                    type="range"
                    id="zoom"
                    min="1"
                    max="5"
                    step="0.1"
                    onChange={handleZoomChange}
                />
            </div>
            {errMsg && <p className='text-red-500'>{errMsg}</p>}
            {loading && <div className='bg-black/50 fixed left-0 top-0 w-full min-h-screen flex justify-center items-center text-white font-bold text-3xl'>
                <p>{loading}</p>
            </div>}
        </div>
    )
}

export default MarkAttendance
