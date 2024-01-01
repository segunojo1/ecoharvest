import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard'  element={
              <div className="dashboard">
                <Sidebar />
                <Dashboard />
              </div>
          } />
          <Route path='/weather'  element={
              <div className="dashboard">
                <Sidebar />
                <Weather />
              </div>
          } />
          <Route path='/market'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <Dashboard />
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
          <Route path='*' element={<Page404 />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
