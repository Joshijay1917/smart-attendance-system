import './App.css'
import Header from './Components/Faculty/header/Header'
import QuickAccess from './Components/Faculty/Main/quickAccess/QuickAccess'
import Overview from './Components/Faculty/Main/Overview/Overview'
import Classes from './Components/Faculty/Main/Classes/Classes'
import { useAuth } from './Context/AuthContext'
import Navbar from './Components/Faculty/header/Navbar/Navbar'
import URL from './Components/Faculty/Main/url/URL'
import { useEffect, useState } from 'react'
import StuHeader from './Components/Student/header/StuHeader'

function App() {
  // const [isAdmin, setIsAdmin] = useState(false)
  const { currentUser, isAdmin, setIsAdmin } = useAuth()

  console.log("CuurentUser ", currentUser);
  
  useEffect(() => {
    if (currentUser.email && currentUser.password) {
      if (currentUser.password === 'admin1917' && currentUser.email === 'admin123@gmail.com') {
        setIsAdmin(true)
      }
    }
  }, [])


  return (
    <>
      {isAdmin ? <div className='md:m-auto md:w-[80%]'>
        <Header />
        <QuickAccess />
        <Overview />
        <Classes />
      </div> :
        <div>
          <StuHeader username={currentUser}/>
        </div>}
    </>
  )
}

export default App
