import './App.css'
import Header from './Components/Faculty/header/Header'
import QuickAccess from './Components/Faculty/Main/quickAccess/QuickAccess'
import Overview from './Components/Faculty/Main/Overview/Overview'
import Classes from './Components/Faculty/Main/Classes/Classes'

function App() {

  return (
    <div className='md:m-auto md:w-[80%]'>
    <Header />
    <QuickAccess />
    <Overview />
    <Classes />
    </div>
  )
}

export default App
