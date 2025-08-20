import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PolicyCard from '../components/PolicyCard.jsx'
import CategoryChips from '../components/CategoryChips.jsx'
import SearchBar from '../components/SearchBar.jsx'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Policies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') || ''
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchCategories = async () => {
    const res = await fetch(`${API}/api/categories`)
    const data = await res.json()
    setCategories(data)
  }

  const fetchPolicies = async (q='') => {
    setLoading(true)
    const url = new URL(`${API}/api/policies`)
    if (q) url.searchParams.set('q', q)
    if (currentCategory) url.searchParams.set('category', currentCategory)
    url.searchParams.set('limit', 12)
    url.searchParams.set('page', page)
    const res = await fetch(url)
    const data = await res.json()
    setItems(data.items || [])
    setTotal(data.pagination?.total || 0)
    setLoading(false)
  }

  useEffect(()=>{ fetchCategories() }, [])
  useEffect(()=>{ fetchPolicies(searchParams.get('q')||'') }, [currentCategory, page])

  return (
    <section className="policies-page container">
      <div className="page-head">
        <h2>Policies</h2>
        <SearchBar onSearch={(val)=>{ setSearchParams({ q: val, category: currentCategory }); setPage(1); fetchPolicies(val) }} defaultValue={searchParams.get('q')||''} />
      </div>

      <CategoryChips categories={categories} active={currentCategory} onPick={(slug)=>{ setSearchParams({ category: slug }); setPage(1); }} />

      <div className="grid">
        {loading ? <p>Loading...</p> : items.map(p => <PolicyCard key={p.id} policy={p} />)}
      </div>

      <div className="pagination">
        <button className="btn" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Prev</button>
        <span>Page {page} of {Math.max(1, Math.ceil(total/12))}</span>
        <button className="btn" disabled={page>=Math.ceil(total/12)} onClick={()=>setPage(p=>p+1)}>Next</button>
      </div>

      {currentCategory && (
        <h3 className="section-title">{categories.find(c=>c.slug===currentCategory)?.name?.toUpperCase()}</h3>
      )}
    </section>
  )
}
