import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Quick Pack Canada</h1>
          <p>Your trusted supplier for pizza boxes and paper cups in all sizes</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Our Products
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍕</div>
              <h3>Pizza Boxes All Sizes</h3>
              <p>From small personal pizzas to extra-large sheet pans, we have the perfect box size for your needs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Paper Cups All Sizes</h3>
              <p>Available from 4 oz to 24 oz, perfect for any beverage service requirement</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Quality Guaranteed</h3>
              <p>Food-grade materials and durable construction ensure your products stay fresh and secure</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Best prices on bulk orders with fast delivery across Canada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a quote or to learn more about our services</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

