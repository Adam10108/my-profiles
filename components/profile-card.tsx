import React from 'react'
import { Avatar as MuiImage, Box, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  avatarBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: 265,
    height: 265,

    [theme.breakpoints.down('xs')]: {
      height: 206
    }
  }
}))

export const ProfileCard = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={classes.avatarBox} mb={3}>
        <MuiImage
          className={classes.avatar}
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="Profile name"
        />
      </Box>

      <Box width="100%" textAlign="center">
        <Typography variant="h1">Adam Ajsaen</Typography>
        <Typography variant="h4">
          <strong>Web Developer</strong>
        </Typography>
      </Box>
    </div>
  )
}
