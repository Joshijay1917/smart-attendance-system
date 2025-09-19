import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../../../../Context/Store'

const Code = () => {
    const [token, settoken] = useState(null)
    const [status, setstatus] = useState("QR Code generating")
    const storeData = useContext(Store)

    const generateToken = async () => {
        try {
            const strRes = await fetch('https://check-ip-test-backend.onrender.com/api/v1/qr/qr-code')
            const res = await strRes.json();

            console.log("Res", res.token);
            if (res.token) {
                settoken(res.token);
            }
            setstatus(null);
        } catch (err) {
            console.log("err", err);
            setstatus("Something went wrong")
        }
    }

    useEffect(() => {
        if (storeData.session) {
            generateToken()
        } else {
            setstatus("Session not found")
        }
        const interval = setInterval(async () => {
            if (storeData.session) {
                await generateToken()
            } else {
                setstatus("Session not found")
            }
        }, 20000);

        return () => clearInterval(interval)
    }, [])


    return (
        <div>
            <p className='text-center text-xl font-semibold'>{status}</p>
            {token && <img className='m-auto my-10 w-1/2' src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${token}`} />}
        </div>
    )
}

export default Code
