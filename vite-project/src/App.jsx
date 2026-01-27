import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Fundamentals from './pages/fundamentals'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fundamentals" element={<Fundamentals />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
