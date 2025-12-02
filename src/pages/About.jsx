import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Quick Pack Canada</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Quick Pack Canada is your trusted supplier for pizza boxes and paper cups
                throughout Canada. We specialize in providing high-quality, food-grade packaging
                solutions for restaurants, pizzerias, cafes, and food service businesses.
              </p>
              <p>
                With a wide selection of sizes available, we ensure that every customer finds
                exactly what they need. Our pizza boxes are designed to keep food fresh and hot,
                while our paper cups are perfect for both hot and cold beverages.
              </p>
              <h2>Our Mission</h2>
              <p>
                To provide fast, reliable, and affordable pizza boxes and paper cups in all sizes
                that exceed our customers' expectations. We strive to build lasting relationships
                with our clients through exceptional service, quality products, and competitive pricing.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>📦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-icon">👤</div>
              <h3>VIRAL</h3>
              <p>Phone: <a href="tel:2049012049">204 901 2049</a></p>
            </div>
            <div className="team-member">
              <div className="member-icon">👤</div>
              <h3>JAIMIN</h3>
              <p>Phone: <a href="tel:2049014430">204 901 4430</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

