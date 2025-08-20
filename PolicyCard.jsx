import React from 'react'
import { Link } from 'react-router-dom'

export default function PolicyCard({ policy }) {
  return (
    <Link className="policy-card" to={`/policies/${policy.id}`}>
      <div className="thumb" style={{backgroundImage:`url(${policy.image_url || 'https://images.unsplash.com/photo-1553729459-efe14ef6055d'})`}} />
      <div className="body">
        <h3>{policy.title}</h3>
        <p className="meta">{policy.category} • {policy.state}</p>
        <p className="summary">{policy.summary}</p>
      </div>
    </Link>
  )
}
