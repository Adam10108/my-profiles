import React, { useState } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from '@/styles/theme'

export type ThemeContextValues = {
  currentTheme: 'dark' | 'light' | string
}

export type ThemeProviderTypes = {
  children: React.ReactNode
}

export const themeDefault: ThemeContextValues = {
  currentTheme: 'light'
}

export const ThemeContext = React.createContext(themeDefault)

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [currentTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
