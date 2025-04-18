'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 position-relative">
      <div className="container">
        <div className="row gy-4">

          {/* Left - Logo and Contact */}
          <div className="col-md-4">
            <h3 className="fw-bold mb-3">
            <a href="/"><img src="/logo.png" className='logo-layout'/></a>

            </h3>
            <p className="mb-2"><FaPhoneAlt className="me-2" /><a href="tel: +1 (877) 912-5016 " className='text-decoration-none text-white'>+1 (877) 912-5016</a> </p>
            <p className="mb-2"><FaEnvelope className="me-2" /> info@amtraktrainticket.com</p>
            <p className="mb-2"><FaMapMarkerAlt className="me-2" /> California office</p>
            <p className="fw-bold mb-1">California</p>
            <p>3891 Ranchview Dr. Richardson, <br />California 62639</p>
          </div>

          {/* Center - Company */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 border-bottom pb-1 d-inline-block">Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/terms-and-conditions" className="text-white text-decoration-none">Terms and Conditions</a></li>
              <li><a href="disclaimer" className="text-white text-decoration-none">Disclaimer</a></li>
            </ul>
          </div>

          {/* Right - Support */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 border-bottom pb-1 d-inline-block">Support</h5>
            <ul className="list-unstyled">
              <li><a href="/contact-us" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/cancellation-refund" className="text-white text-decoration-none">Cancellation Refund</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to Top Icon (optional) */}
      <div
        className="position-absolute bottom-0 end-0 p-3"
        style={{ cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp size={20} />
      </div>
    </footer>
  )
}

export default Footer
