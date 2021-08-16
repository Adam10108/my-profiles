import React, { useState, useContext } from 'react'
import {
  ThemeOptions as MuiThemeOptions,
  ThemeProvider as MuiThemeProvider,
  createTheme
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import {
  typography,
  paletteColorsDark,
  paletteColorsLight
} from '@/styles/theme'

export type ThemeContextValues = {
  isDarkMode: boolean
  actions: {
    setIsDarkMode: (action: boolean) => void
  }
}

export const themeDefault: ThemeContextValues = {
  isDarkMode: false,
  actions: {
    setIsDarkMode: () => null
  }
}

export type ThemeProviderTypes = {
  children: React.ReactNode
}

export const ThemeContext =
  React.createContext<ThemeContextValues>(themeDefault)

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const actions = {
    setIsDarkMode: (action: boolean) => setIsDarkMode(action)
  }

  const options = (dark: boolean): MuiThemeOptions => {
    const paletteColors = dark ? paletteColorsDark : paletteColorsLight

    return {
      palette: {
        type: isDarkMode ? 'dark' : 'light',
        primary: {
          main: paletteColors.primary
        }
      }
    }
  }

  const themeValues = createTheme({
    typography,
    ...options(isDarkMode)
  })

  return (
    <ThemeContext.Provider value={{ isDarkMode, actions }}>
      <MuiThemeProvider theme={themeValues}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeState = (): ThemeContextValues => {
  const context = useContext(ThemeContext)

  return context
}
