import React from 'react'
import { Routes, Route, useLocation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Fundamentals from './pages/fundamentals'
import Step1 from './pages/Step1'
import Step2Intel from './pages/Step2Intel'
import Step2AMD from './pages/Step2AMD'
import Step3Nvidia from './pages/Step3Nvidia'
import Step3AMD from './pages/Step3AMD'
import Step4 from './pages/Step4'
import Step5 from './pages/Step5'
import Step6 from './pages/Step6'
import Step7 from './pages/Step7'
import Step8 from './pages/Step8'

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
          <Route path="/step2-intel" element={<Step2Intel />} />
          <Route path="/step2-amd" element={<Step2AMD />} />
          <Route path="/step3-nvidia" element={<Step3Nvidia />} />
          <Route path="/step3-amd" element={<Step3AMD />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/step6" element={<Step6 />} />
          <Route path="/step7" element={<Step7 />} />
          <Route path="/step8" element={<Step8 />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
