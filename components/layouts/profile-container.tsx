import React from 'react'
import { Container } from '@material-ui/core'

export type ProfileContainerTypes = {
  children: React.ReactChild | React.ReactChild[]
}

export const ProfileContainer = ({ children }: ProfileContainerTypes) => {
  return <Container id="profile-container">{children}</Container>
}
