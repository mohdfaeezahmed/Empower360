import React from 'react'

export default function Rating({ value=5 }) {
  return (
    <div className="rating">
      {Array.from({length:5}).map((_,i)=>(
        <span key={i} className={i<value ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}
