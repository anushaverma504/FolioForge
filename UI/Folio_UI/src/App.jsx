import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import UserDashboard from './Pages/UserDashboard'
import NotFoundPage from './Pages/NotFoundPage'
import ResumeTemplate from './Pages/ResumeTemplate'
import PortfolioTemplate from './Pages/PortfolioTemplate'
import LandingPage from './Pages/LandingPage'
import PrivateRoute from './Components/PrivateRoute'

function App() {

  return (
    <>
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} >
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume-templates" element={<PrivateRoute><ResumeTemplate /></PrivateRoute>} />
          <Route path="/portfolio-templates" element={<PrivateRoute><PortfolioTemplate /></PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute> <UserDashboard /> </PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        
      </div>
    </>
  )
}

export default App
