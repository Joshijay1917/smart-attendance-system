import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/header/Navbar/Navbar'
import Header from './Components/header/Header'
import QuickAccess from './Components/Main/quickAccess/QuickAccess'
import Overview from './Components/Main/Overview/Overview'
import Classes from './Components/Classes/Classes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='md:mx-[170px]'>
    <Header />
    <QuickAccess />
    <Overview />
    <Classes />
    </div>
  )
}

export default App
