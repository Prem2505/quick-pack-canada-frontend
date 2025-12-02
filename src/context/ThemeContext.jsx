import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const colorThemes = [
  { id: 'brown-red', name: 'Brown & Red', icon: '🟤' },
  { id: 'blue-teal', name: 'Blue & Teal', icon: '🔵' },
  { id: 'green-emerald', name: 'Green & Emerald', icon: '🟢' },
  { id: 'purple-pink', name: 'Purple & Pink', icon: '🟣' },
  { id: 'orange-amber', name: 'Orange & Amber', icon: '🟠' },
  { id: 'indigo-violet', name: 'Indigo & Violet', icon: '🔷' }
]

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme === 'true'
  })

  const [colorTheme, setColorTheme] = useState(() => {
    const savedColorTheme = localStorage.getItem('colorTheme')
    return savedColorTheme || 'brown-red'
  })

  useEffect(() => {
    // Update dark mode class
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('darkMode', 'false')
    }
  }, [isDarkMode])

  useEffect(() => {
    // Update color theme data attribute
    document.documentElement.setAttribute('data-theme', colorTheme)
    localStorage.setItem('colorTheme', colorTheme)
  }, [colorTheme])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const changeColorTheme = (themeId) => {
    setColorTheme(themeId)
  }

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      colorTheme, 
      changeColorTheme,
      colorThemes 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

