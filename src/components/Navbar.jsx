import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import logo from '../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme, colorTheme, changeColorTheme, colorThemes } = useTheme()
  const colorMenuRef = useRef(null)
  const colorMenuMobileRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDesktop = colorMenuRef.current && !colorMenuRef.current.contains(event.target)
      const isOutsideMobile = colorMenuMobileRef.current && !colorMenuMobileRef.current.contains(event.target)
      
      if (isOutsideDesktop && isOutsideMobile) {
        setIsColorMenuOpen(false)
      }
    }

    if (isColorMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isColorMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleColorThemeChange = (themeId) => {
    changeColorTheme(themeId)
    setIsColorMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Quick Pack Canada" className="logo-image" />
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="theme-controls">
            <div className="color-theme-selector" ref={colorMenuRef}>
              <button 
                className="color-theme-btn" 
                onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                aria-label="Change color theme"
                title="Change Color Theme"
              >
                🎨
              </button>
              {isColorMenuOpen && (
                <div className="color-theme-menu">
                  {colorThemes.map(theme => (
                    <button
                      key={theme.id}
                      className={`color-theme-option ${colorTheme === theme.id ? 'active' : ''}`}
                      onClick={() => handleColorThemeChange(theme.id)}
                      title={theme.name}
                    >
                      <span className="theme-icon">{theme.icon}</span>
                      <span className="theme-name">{theme.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
        <div className="nav-right">
          <div className="theme-controls-mobile">
            <div className="color-theme-selector" ref={colorMenuMobileRef}>
              <button 
                className="color-theme-btn" 
                onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                aria-label="Change color theme"
                title="Change Color Theme"
              >
                🎨
              </button>
              {isColorMenuOpen && (
                <div className="color-theme-menu mobile-menu">
                  {colorThemes.map(theme => (
                    <button
                      key={theme.id}
                      className={`color-theme-option ${colorTheme === theme.id ? 'active' : ''}`}
                      onClick={() => handleColorThemeChange(theme.id)}
                      title={theme.name}
                    >
                      <span className="theme-icon">{theme.icon}</span>
                      <span className="theme-name">{theme.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="theme-toggle-mobile" onClick={toggleTheme} aria-label="Toggle dark mode">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

