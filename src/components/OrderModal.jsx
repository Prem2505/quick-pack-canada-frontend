import React, { useState, useEffect } from 'react'
import './OrderModal.css'

const OrderModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    quantity: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    additionalNotes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL || 'https://quick-pack-canada-backend-1.onrender.com'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const orderData = {
        orderType: 'single',
        productDetails: {
          size: product.size,
          type: product.type,
          dimensions: product.dimensions || null
        },
        quantity: formData.quantity,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        province: formData.province,
        postalCode: formData.postalCode,
        additionalNotes: formData.additionalNotes || ''
      }

      const response = await fetch(`${API_URL}/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message || 'Order submitted successfully! We will contact you soon.' })
        
        // Reset form
        setFormData({
          quantity: '',
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          province: '',
          postalCode: '',
          additionalNotes: ''
        })
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to submit order. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting order:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to submit order. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen || !product) return null

  const productType = product.type === 'paper-cup' ? 'Paper Cups' : 'Pizza Boxes'
  const productName = product.type === 'paper-cup' ? 'Paper Cups' : 'Pizza Boxes'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Order {product.size} {productName}</h2>
          {product.dimensions && (
            <p className="product-dimensions">{product.dimensions}</p>
          )}
          {product.price && (
            <p className="product-price">${product.price.toFixed(2)} per {product.type === 'pizza-box' ? 'box' : 'cup'}</p>
          )}
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Product Details</h3>
            <div className="form-group">
              <label htmlFor="quantity">Quantity *</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="Enter quantity"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(204) 555-0123"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Delivery Address</h3>
            <div className="form-group">
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="123 Main Street"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Winnipeg"
                />
              </div>

              <div className="form-group">
                <label htmlFor="province">Province *</label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  placeholder="MB"
                />
              </div>

              <div className="form-group">
                <label htmlFor="postalCode">Postal Code *</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  placeholder="R3B 1A1"
                  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows="4"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Any special requirements or delivery instructions..."
              ></textarea>
            </div>
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderModal

