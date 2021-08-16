import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useThemeState, ThemeContextValues } from '@/contexts/theme.context'

const useStyles = makeStyles(() => ({
  root: {
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

export const AppBar = () => {
  const classes = useStyles()
  const { isDarkMode, actions }: ThemeContextValues = useThemeState()

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        <strong> MY PROFILE</strong>
      </Typography>
      <DarkModeToggle
        onChange={() => actions.setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
        size={60}
      />
    </div>
  )
}
