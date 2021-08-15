import React, { useState } from 'react'
import {
  ThemeOptions as MuiThemeOptions,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { ThemeValues } from '@/utils/types'
import {
  typography,
  paletteColorsDark,
  paletteColorsLight
} from '@/styles/theme'

export type ThemeContextValues = {
  theme: ThemeValues
  actions: {
    setTheme: (theme: ThemeValues) => void
  }
}

export type ThemeProviderTypes = {
  children: React.ReactNode
}

export const ThemeContext = React.createContext<ThemeContextValues | undefined>(
  undefined
)

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [theme, setTheme] = useState<ThemeValues>('light')

  const actions = {
    setTheme: (theme: ThemeValues) => setTheme(theme)
  }

  const options = (dark: boolean): MuiThemeOptions => {
    const paletteColors = dark ? paletteColorsDark : paletteColorsLight

    return {
      palette: {
        type: theme,
        primary: {
          main: paletteColors.primary
        }
      }
    }
  }

  const themeValues = createMuiTheme({
    typography,
    ...options(theme === 'dark')
  })

  return (
    <ThemeContext.Provider value={{ theme, actions }}>
      <MuiThemeProvider theme={themeValues}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
