import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/header/Navbar/Navbar.jsx'
import Main from './Components/GenerateQR/QrCode/Main.jsx'
import StoreProivder from './Context/Store.jsx'
import GetLocation from './Components/GenerateQR/QrCode/GetLocation.jsx'
import ViewClasses from './Components/View Classes/ViewClasses.jsx'
import URL from './Components/url/URL.jsx'
import Report from './Components/Report/Report.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProivder>
      <Navbar />
      <URL />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/qrcode-generate' element={<Main />} />
        <Route path='/view-classes' element={<ViewClasses />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </StoreProivder>
  </BrowserRouter>
)
