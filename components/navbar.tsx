import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Box, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useThemeState, ThemeContextValues } from '@/contexts/theme.context'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 120,

    [theme.breakpoints.down('xs')]: {
      width: 80
    },

    '& img': {
      maxWidth: '100%'
    }
  }
}))

export const AppBar = () => {
  const classes = useStyles()
  const { isDarkMode, actions }: ThemeContextValues = useThemeState()

  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <img src="/images/logo.png" alt="Profiles labs logo" />
      </Box>

      <DarkModeToggle
        onChange={() => actions.setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
        size={60}
      />
    </div>
  )
}
