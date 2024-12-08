import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <main className="main_container">
      {/* navbar */}
        <Navbar />   
      </main>
      </Router>

    </>
  )
}

export default App
