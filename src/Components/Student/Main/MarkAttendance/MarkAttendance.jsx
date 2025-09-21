import React, { useCallback, useRef, useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

const MarkAttendance = () => {
    const videoRef = useRef();
    const [errMsg, seterrMsg] = useState('')
    const [ZoomLevel, setZoomLevel] = useState(1)

    const onUpdate = useCallback(({ x, y, scale }) => {
        const { current: video } = videoRef;
    
        if (video) {
          const value = make3dTransformValue({ x, y, scale });
    
          video.style.setProperty("transform", value);
        }
      }, []);

    const handleScan = (data) => {
        console.log("Data ", data);
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

            <QuickPinchZoom onUpdate={onUpdate}>
            <Scanner
                onError={handleError}
                onScan={handleScan}
                ref={videoRef}
            />
            </QuickPinchZoom>

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
        </div>
    )
}

export default MarkAttendance
