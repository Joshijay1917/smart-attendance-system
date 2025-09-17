import React from 'react'
import QrCode from './QrCode'
import Session from '../Session/Session'
import { useLocation } from 'react-router-dom'

const Main = () => {
  const { state } = useLocation()
  return (
    <div>
      <QrCode />
      <Session roomLocation={state}/>
    </div>
  )
}

export default Main
