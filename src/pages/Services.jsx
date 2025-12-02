import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OrderModal from '../components/OrderModal'
import CustomOrderModal from '../components/CustomOrderModal'
import './Services.css'

const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)
  const [customModalType, setCustomModalType] = useState('pizza-box')
  const pizzaBoxSizes = [
    {
      type: 'pizza-box',
      size: 'Small',
      dimensions: '8" x 8" x 1.75"',
      description: 'Perfect for personal pizzas and small slices',
      price: 0.45
    },
    {
      type: 'pizza-box',
      size: 'Medium',
      dimensions: '10" x 10" x 1.75"',
      description: 'Ideal for medium pizzas (12-14 inches)',
      price: 0.55
    },
    {
      type: 'pizza-box',
      size: 'Large',
      dimensions: '12" x 12" x 1.75"',
      description: 'Best for large pizzas (16-18 inches)',
      price: 0.65
    },
    {
      type: 'pizza-box',
      size: 'Extra Large',
      dimensions: '14" x 14" x 2"',
      description: 'For extra large pizzas and family orders',
      price: 0.75
    },
    // {
    //   type: 'pizza-box',
    //   size: 'Sheet Pan',
    //   dimensions: '12" x 16" x 2"',
    //   description: 'For sheet pan pizzas and large orders',
    //   price: 0.85
    // }
  ]

  const paperCupSizes = [
    {
      type: 'paper-cup',
      size: '4 oz',
      description: 'Perfect for espresso shots and small beverages',
      price: 0.15
    },
    {
      type: 'paper-cup',
      size: '8 oz',
      description: 'Ideal for hot coffee and tea servings',
      price: 0.18
    },
    {
      type: 'paper-cup',
      size: '12 oz',
      description: 'Standard size for regular coffee drinks',
      price: 0.22
    },
    {
      type: 'paper-cup',
      size: '16 oz',
      description: 'Large size for generous servings',
      price: 0.25
    },
    {
      type: 'paper-cup',
      size: '20 oz',
      description: 'Extra large for big thirst quenchers',
      price: 0.28
    },
    {
      type: 'paper-cup',
      size: '24 oz',
      description: 'Maximum size for super-sized drinks',
      price: 0.32
    }
  ]

  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>High-quality pizza boxes and paper cups in all sizes for your business needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="product-section">
            <div className="product-header">
              <div className="product-icon">🍕</div>
              <h2>Pizza Boxes</h2>
              <p>Durable, grease-resistant pizza boxes available in all standard sizes. Made from high-quality corrugated cardboard to keep your pizzas fresh and secure during delivery.</p>
              <div className="custom-order-button-container">
                <button 
                  className="btn btn-primary custom-order-btn"
                  onClick={() => {
                    setCustomModalType('pizza-box')
                    setIsCustomModalOpen(true)
                  }}
                >
                  Custom Order (Multiple Sizes)
                </button>
              </div>
            </div>
            <div className="services-grid">
              {pizzaBoxSizes.map((box, index) => (
                <div 
                  key={index} 
                  className="service-card clickable"
                  onClick={() => {
                    setSelectedProduct(box)
                    setIsModalOpen(true)
                  }}
                >
                  <div className="service-icon">📦</div>
                  <h3>{box.size}</h3>
                  <p className="dimensions">{box.dimensions}</p>
                  <p className="price">${box.price.toFixed(2)} per box</p>
                  <p>{box.description}</p>
                  <div className="order-cta">Click to Order</div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-section">
            <div className="product-header">
              <div className="product-icon">☕</div>
              <h2>Paper Cups</h2>
              <p>Eco-friendly paper cups perfect for hot and cold beverages. Available in multiple sizes to suit any drink service need. Food-grade quality for safe use.</p>
              <div className="custom-order-button-container">
                <button 
                  className="btn btn-primary custom-order-btn"
                  onClick={() => {
                    setCustomModalType('paper-cup')
                    setIsCustomModalOpen(true)
                  }}
                >
                  Custom Order (Multiple Sizes)
                </button>
              </div>
            </div>
            <div className="services-grid">
              {paperCupSizes.map((cup, index) => (
                <div 
                  key={index} 
                  className="service-card clickable"
                  onClick={() => {
                    setSelectedProduct(cup)
                    setIsModalOpen(true)
                  }}
                >
                  <div className="service-icon">🥤</div>
                  <h3>{cup.size}</h3>
                  <p className="price">${cup.price.toFixed(2)} per cup</p>
                  <p>{cup.description}</p>
                  <div className="order-cta">Click to Order</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Need Bulk Orders or Custom Sizes?</h2>
          <p>Contact us for competitive pricing on bulk orders and to discuss custom sizing options for your specific business needs.</p>
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </section>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
        product={selectedProduct}
      />

      <CustomOrderModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        products={customModalType === 'paper-cup' ? paperCupSizes : pizzaBoxSizes}
        productType={customModalType}
      />
    </div>
  )
}

export default Services

