import { useContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import SignUp from './pages/SignUp'
import Sidebar from './components/Sidebar'
import { ToastContainer } from 'react-toastify'
import Weather from './pages/Weather'
import Page404 from './pages/Page404'
import NavContext, { NavProvider } from './context/NavContext'
import { nav } from './@types'
import MarketPrices from './pages/MarketPrices'
import SoilData from './pages/SoilData'
import { PolygonProvider } from './context/PolygonContext'

function App() {
  const {activeNav, setActiveNav}:any= useContext(NavContext);
  const showSidebar = (e:any) => {
    e.target.classList.toggle("activenav")
    setActiveNav((prev:any) => !prev);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard'  element={
            <PrivateRoute>
            <NavProvider>
              <PolygonProvider>

              <div className="dashboard">
                <Sidebar />
                <div className='ham' onClick={(e) => showSidebar(e)}></div>
                <Dashboard />
              </div>
              </PolygonProvider>
            </NavProvider>
            </PrivateRoute>
          } />
          <Route path='/weather'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <Weather />
              </div>
            </PrivateRoute>
          } />
          <Route path='/market'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <MarketPrices />
              </div>
            </PrivateRoute>
          } />

<Route path='/'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <Dashboard />
              </div>
            </PrivateRoute>
          } />
          <Route path='/soil'  element={
            <PrivateRoute>
              <PolygonProvider>
              <div className="dashboard">
                <Sidebar />
                <SoilData />
              </div>
              </PolygonProvider>
            </PrivateRoute>
          } />
          <Route path='*' element={<Page404 />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
