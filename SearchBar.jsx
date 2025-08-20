import React, { useState } from 'react'

export default function SearchBar({ onSearch, defaultValue='' }) {
  const [q, setQ] = useState(defaultValue)
  return (
    <form className="searchbar" onSubmit={(e)=>{e.preventDefault(); onSearch(q)}}>
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search by title, benefit or tag..." />
      <button className="btn">Search</button>
    </form>
  )
}
