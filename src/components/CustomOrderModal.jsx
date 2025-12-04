import React, { useState, useEffect } from 'react'
import './CustomOrderModal.css'

const CustomOrderModal = ({ isOpen, onClose, products, pizzaBoxSizes, productType = 'pizza-box' }) => {
  // Support both prop names for backward compatibility
  const productList = products || pizzaBoxSizes || []
  
  const [selectedItems, setSelectedItems] = useState({})
  const [formData, setFormData] = useState({
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
      // Initialize selectedItems with all sizes set to empty
      const initialItems = {}
      productList.forEach(item => {
        initialItems[item.size] = ''
      })
      setSelectedItems(initialItems)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, productList])

  const handleItemQuantityChange = (size, value) => {
    setSelectedItems({
      ...selectedItems,
      [size]: value
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const getTotalQuantity = () => {
    return Object.values(selectedItems).reduce((total, qty) => {
      return total + (parseInt(qty) || 0)
    }, 0)
  }

  const hasSelectedItems = () => {
    return Object.values(selectedItems).some(qty => qty && parseInt(qty) > 0)
  }

  const getProductName = () => {
    return productType === 'paper-cup' ? 'Paper Cups' : 'Pizza Boxes'
  }

  const getUnitName = () => {
    return productType === 'paper-cup' ? 'cups' : 'boxes'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!hasSelectedItems()) {
      const productName = getProductName().toLowerCase()
      setSubmitStatus({ type: 'error', message: `Please select at least one ${productName} size with quantity.` })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Build product details array
      const productDetails = productList
        .filter(item => selectedItems[item.size] && parseInt(selectedItems[item.size]) > 0)
        .map(item => ({
          quantity: selectedItems[item.size],
          size: item.size,
          dimensions: item.dimensions || null,
          price: item.price || null
        }))

      const totalQuantity = getTotalQuantity()
      
      // Calculate total price
      const totalPrice = productDetails.reduce((sum, item) => {
        return sum + (item.price * parseInt(item.quantity))
      }, 0)

      const orderData = {
        orderType: 'custom',
        productDetails: productDetails,
        quantity: totalQuantity,
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
        setSelectedItems({})
        setFormData({
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

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content custom-order-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Custom {getProductName()} Order</h2>
          <p className="modal-subtitle">Select quantities for each {getProductName().toLowerCase()} size you need</p>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Select {getProductName()} Sizes & Quantities</h3>
            <div className="boxes-selection">
              {productList.map((item, index) => (
                <div key={index} className="box-selection-item">
                  <div className="box-info">
                    <div className="box-size-header">
                      <h4>{item.size}</h4>
                      {item.dimensions && (
                        <span className="box-dimensions">{item.dimensions}</span>
                      )}
                      {item.price && (
                        <span className="box-price">${item.price.toFixed(2)} per {productType === 'pizza-box' ? 'box' : 'cup'}</span>
                      )}
                    </div>
                    <p className="box-description">{item.description}</p>
                  </div>
                  <div className="quantity-input-group">
                    <label htmlFor={`quantity-${item.size}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.size}`}
                      min="0"
                      value={selectedItems[item.size] || ''}
                      onChange={(e) => handleItemQuantityChange(item.size, e.target.value)}
                      placeholder="0"
                      className="quantity-input"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="total-quantity">
              <div>
                <strong>Total Quantity: {getTotalQuantity()} {getUnitName()}</strong>
              </div>
              {productList.some(item => item.price) && getTotalQuantity() > 0 && (
                <div className="total-price">
                  <strong>Estimated Total: ${productList
                    .filter(item => selectedItems[item.size] && parseInt(selectedItems[item.size]) > 0)
                    .reduce((sum, item) => sum + ((item.price || 0) * parseInt(selectedItems[item.size])), 0)
                    .toFixed(2)}</strong>
                </div>
              )}
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
              {isSubmitting ? 'Submitting...' : 'Submit Custom Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomOrderModal

