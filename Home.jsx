import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Rating from '../components/Rating.jsx'
import CategoryChips from '../components/CategoryChips.jsx'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Home() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`${API}/api/categories`).then(r=>r.json()).then(setCategories).catch(()=>{})
  }, [])

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>Welcome to <span className="brand">Empower360</span></h1>
          <p>Discover policies with us, we are focussed on providing intel on various policies so that you can live a happy life!</p>
          <p><strong>Policies According To Your Needs!</strong></p>
          <div className="hero-actions">
            <Link to="/about" className="btn">Tap To Know More →</Link>
            <Link to="/policies" className="btn btn-ghost">View Policies →</Link>
          </div>

          <div className="rating-block">
            <p>Rated 5 stars by Times</p>
            <Rating value={5} />
            <p>On 5th April, 2024</p>
          </div>
        </div>
        <div className="hero-right">
          <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" alt="coins" />
        </div>
      </div>

      <div className="container chips-wrap">
        <p className="muted">A startup from Delhi Technological University. We aim at providing various policies segregated according to your needs.</p>
        <CategoryChips categories={categories} onPick={(slug)=>navigate('/policies?category='+slug)} />
      </div>
    </section>
  )
}
