import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Faculty/header/Navbar/Navbar.jsx'
import Main from './Components/Faculty/Main/GenerateQR/QrCode/Main.jsx'
import StoreProivder from './Context/Store.jsx'
import ViewClasses from './Components/Faculty/Main/View Classes/ViewClasses.jsx'
import URL from './Components/Faculty/Main/url/URL.jsx'
import Report from './Components/Faculty/Main/Report/Report.jsx'
import Login from './Components/Auth/Login/login.jsx'
import Register from './Components/Auth/Register/Register.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <StoreProivder>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<App />} />
          <Route path='/qrcode-generate' element={<Main />} />
          <Route path='/view-classes' element={<ViewClasses />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </StoreProivder>
    </AuthProvider>
  </BrowserRouter>
)
