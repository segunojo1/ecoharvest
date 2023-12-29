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

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard'  element={
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
