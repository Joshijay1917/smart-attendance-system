import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Faculty/header/Navbar/Navbar.jsx'
import Main from './Components/Faculty/Main/GenerateQR/QrCode/Main.jsx'
import StoreProivder from './Context/Store.jsx'
import ViewClasses from './Components/Faculty/Main/View Classes/ViewClasses.jsx'
import URL from './Components/Faculty/Main/url/URL.jsx'
import Report from './Components/Faculty/Main/Report/Report.jsx'
import Login from './Components/Auth/Login/login.jsx'
import Register from './Components/Auth/Register/Register.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { useAuth } from './Context/AuthContext.jsx'


function Layout() {
  const { isLoggedin } = useAuth();
  return (
    <>
      <Navbar />
      <URL />
      <Outlet />
    </>
  )
}

function ProtectedRoute({ children }) {
  const { isLoggedin } = useAuth();
  return isLoggedin ? children : <Navigate to="/" />;
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProivder>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path='/dashboard' element={<ProtectedRoute><App /></ProtectedRoute> } />
            <Route path='/qrcode-generate' element={<ProtectedRoute><Main /></ProtectedRoute> } />
            <Route path='/view-classes' element={<ProtectedRoute><ViewClasses /></ProtectedRoute> } />
            <Route path='/report' element={<ProtectedRoute><Report /></ProtectedRoute> } />
          </Route>
        </Routes>
      </AuthProvider>
    </StoreProivder>
  </BrowserRouter>
)
