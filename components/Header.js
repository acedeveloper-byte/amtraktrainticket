'use client'
import React, { useState } from 'react'
import "../app/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <header className=" text-white" style={{backgroundColor: '#160850'}}>
      <div className="container d-flex justify-content-between align-items-center py-3">
<a href="/"><img src="/logo.png" className='logo-layout'/></a>
        {/* Desktop Menu */}
        <nav className="d-none d-md-block">
          <ul className="list-unstyled d-flex gap-4 m-0">
            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li><a href="/about-us" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="/" className="text-white text-decoration-none">Train Deals</a></li>
            <li><a href="/contact-us" className="text-white text-decoration-none">Contact Us</a></li>

          </ul>
        </nav>

        {/* Hamburger Icon (Mobile Only) */}
        <button className="btn btn-outline-light d-md-none" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="d-md-none bg-light">
          <ul className="list-unstyled p-3 m-0">
            <li className="mb-2"><a href="#" className="text-dark text-decoration-none">Home</a></li>
            <li className="mb-2"><a href="#" className="text-dark text-decoration-none">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-dark text-decoration-none">Train Deals</a></li>

            <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>

            
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
