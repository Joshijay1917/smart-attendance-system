import React, { useContext } from 'react'
import { BsQrCode } from 'react-icons/bs'
import { Store } from '../../../Context/Store'
import Code from './Code'

const QrCode = () => {
  const storeData = useContext(Store)

  return (
    <div className='box p-3 mt-20'>
      <h1 className='heading'>Generate QR Code</h1>
      <h2 className='heading-2'>Create and manage attendance session QR codes with real-time monitoring</h2>
      {!storeData.session ? <div className='box h-[40vh] flex flex-col items-center justify-center mt-3'>
        <BsQrCode className='text-6xl m-3'/>
        <h1 className='heading'>No QR Code is generated</h1>
        <p>Please create session</p>
      </div>
      : <Code />}
    </div>
  )
}

export default QrCode
