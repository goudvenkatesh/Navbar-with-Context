import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {
    console.log('Click')
  },
})

export default ThemeContext
