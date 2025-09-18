import React, { useState } from 'react'
import QrCode from './QrCode'
import Session from '../Session/Session'
import { useLocation } from 'react-router-dom'
import GetLocation from './GetLocation'

const Main = () => {
  const [roomlocation, setroomlocation] = useState({})
  
  return (
    <div className='md:m-auto md:w-[80%]'>
      <QrCode />
      <GetLocation setroomlocation={setroomlocation} roomlocation={roomlocation}/>
      <Session roomLocation={roomlocation}/>
    </div>
  )
}

export default Main
