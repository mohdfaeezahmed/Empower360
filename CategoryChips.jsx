import React from 'react'

export default function CategoryChips({ categories=[], active, onPick }) {
  return (
    <div className="chips">
      {categories.map(c => (
        <button key={c.slug}
          className={"chip " + (active===c.slug ? 'active' : '')}
          onClick={()=>onPick(c.slug)}>
          {c.name}
        </button>
      ))}
    </div>
  )
}
