import React from 'react'
import { Container } from '@material-ui/core'

export type MyProfileLayoutTypes = {
  children: React.ReactChild | React.ReactChild[]
}

export const MyProfileLayout = ({ children }: MyProfileLayoutTypes) => {
  return <Container maxWidth="xl">{children}</Container>
}
