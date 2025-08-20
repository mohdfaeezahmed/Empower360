import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Empower360</h3>
            <p>We Empower. You Grow.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/policies">Policies</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="socials">
              <a href="#" aria-label="facebook">Ⓕ</a>
              <a href="#" aria-label="instagram">ⓘ</a>
              <a href="#" aria-label="twitter">ⓣ</a>
              <a href="#" aria-label="youtube">ⓨ</a>
            </div>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Empower360</p>
      </div>
    </footer>
  )
}
