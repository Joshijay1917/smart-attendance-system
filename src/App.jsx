import './App.css'
import Header from './Components/Faculty/header/Header'
import QuickAccess from './Components/Faculty/Main/quickAccess/QuickAccess'
import Overview from './Components/Faculty/Main/Overview/Overview'
import Classes from './Components/Faculty/Main/Classes/Classes'
import { useAuth } from './Context/AuthContext'
import Navbar from './Components/Faculty/header/Navbar/Navbar'
import URL from './Components/Faculty/Main/url/URL'

function App() {
  const { currentUser } = useAuth()
  const { user } = useAuth();

  console.log("currentUser ", currentUser);

  return (
    <>
    {user && <Navbar />}
    {user && <URL />}
    <div className='md:m-auto md:w-[80%]'>
    <Header />
    <QuickAccess />
    <Overview />
    <Classes />
    </div>
    </>
  )
}

export default App
