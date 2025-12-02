import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Pack Canada</h3>
          <p>Your trusted packaging and shipping partner</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href="mailto:quickpackca@gmail.com?subject=Inquiry from Quick Pack Canada Website">quickpackca@gmail.com</a>
          </p>
          <p>VIRAL: <a href="tel:+12049012049">204 901 2049</a></p>
          <p>JAIMIN: <a href="tel:+12049014430">204 901 4430</a></p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Quick Pack Canada. All rights reserved.</p>
        <p className="footer-credit">Website created by <a href="mailto:pprem4324@gmail.com" className="credit-link">Prem Ashok Patel</a></p>
      </div>
    </footer>
  )
}

export default Footer

