import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">Empower360</Link>
        <nav className="links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/policies">Policies</NavLink>
          <NavLink to="/community" onClick={(e)=>e.preventDefault()}>Community</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
        </nav>
        <div className="auth-actions">
          <button className="btn btn-ghost">Log In / Sign Up</button>
          <button className="btn btn-icon" title="More">☰</button>
        </div>
      </div>
    </header>
  )
}
