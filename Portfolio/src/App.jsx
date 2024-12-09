import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'

function App() {

  return (
    <>
      <Router>
        <main className="main_container">
          {/* navbar */}
          <Navbar />

          {/* Routing */}

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

          </Routes>

          <Footer />


        </main>
      </Router>

    </>
  )
}

export default App
