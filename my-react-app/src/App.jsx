import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<div>Sign In Page (Create this component)</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App