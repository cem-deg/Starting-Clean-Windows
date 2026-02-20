import { Routes, Route, useLocation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Fundamentals from './pages/fundamentals'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'

function App() {
  const location = useLocation()
  
  return (
    <>
      <Navbar />
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
