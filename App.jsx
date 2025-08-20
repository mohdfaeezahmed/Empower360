import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Policies from './pages/Policies.jsx'
import PolicyDetail from './pages/PolicyDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Reviews from './pages/Reviews.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policies/:id" element={<PolicyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
