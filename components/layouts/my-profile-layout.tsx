import React from 'react'
import { Container } from '@material-ui/core'
import { AppBar } from '@/components/navbar'
import { useStyles } from '@/utils/styled'

export type MyProfileLayoutTypes = {
  children: React.ReactNode
}

export const MyProfileLayout = ({ children }: MyProfileLayoutTypes) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xl">
      <AppBar />
      <div className={classes.spacer2} />
      {children}
    </Container>
  )
}
