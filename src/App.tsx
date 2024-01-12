import { useContext, useEffect } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import SignUp from './pages/SignUp'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'
import Weather from './pages/Weather'
import Page404 from './pages/Page404'
import NavContext, { NavProvider } from './context/NavContext'
import MarketPrices from './pages/MarketPrices'
import SoilData from './pages/SoilData'
import { PolygonProvider } from './context/PolygonContext'
import CropRecommendation from './pages/CropRecommendation'

function App() {
  const {setActiveNav}:any= useContext(NavContext);
  const showSidebar = (e:any) => {
    e.target.classList.toggle("activenav")
    setActiveNav((prev:any) => !prev);
  }
  const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);
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
                <BottomNav />
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
                <BottomNav />
              </div>
            </PrivateRoute>
          } />
          <Route path='/market'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <MarketPrices />
                <BottomNav />
              </div>
            </PrivateRoute>
          } />

<Route path='/'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <Dashboard />
                <BottomNav />
              </div>
            </PrivateRoute>
          } />
          <Route path='/soil'  element={
            <PrivateRoute>
              <PolygonProvider>
              <div className="dashboard">
                <Sidebar />
                <SoilData />
                <BottomNav />
              </div>
              </PolygonProvider>
            </PrivateRoute>
          } />
          <Route path='/croprecommendation'  element={
            <PrivateRoute>
              <div className="dashboard">
                <Sidebar />
                <CropRecommendation />
                <BottomNav />
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
