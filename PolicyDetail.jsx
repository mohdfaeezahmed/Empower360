import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function PolicyDetail() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch(`${API}/api/policies/${id}`).then(r=>r.json()).then(setData)
  }, [id])
  if (!data) return <div className="container"><p>Loading...</p></div>
  return (
    <div className="container policy-detail">
      <Link to="/policies" className="btn btn-ghost">← Back</Link>
      <div className="hero-card">
        <img src={data.image_url} alt="" />
        <div>
          <h1>{data.title}</h1>
          <p className="meta">{data.category} • {data.state}</p>
          <p className="summary">{data.summary}</p>
          <div className="detail-block"><h4>Eligibility</h4><p>{data.eligibility}</p></div>
          <div className="detail-block"><h4>Benefits</h4><p>{data.benefits}</p></div>
          {data.doc_url && <a className="btn" href={data.doc_url} target="_blank" rel="noreferrer">Official Link ↗</a>}
        </div>
      </div>
    </div>
  )
}
