import React from 'react'
import { Box, Grid, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export type ProfileCoverTypes = {
  imgSrc?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  textBox: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  socialTerms: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row'
    }
  },
  socialLink: {
    writingMode: 'vertical-rl',

    [theme.breakpoints.down('xs')]: {
      writingMode: 'inherit'
    }
  }
}))

export const ProfileCover = ({ imgSrc }: ProfileCoverTypes) => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box className={classes.content}>
          <Box className={classes.textBox}>
            <Typography variant="h2">Hello, Welcome to</Typography>
            <Typography variant="h1" color="primary">
              <strong>PROFILE LABS</strong>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={5}>
        <img src={imgSrc} />
      </Grid>

      <Grid item xs={12} sm={1}>
        <Box className={classes.socialTerms}>
          <Typography className={classes.socialLink} variant="h4">
            Facebook
          </Typography>
          <Typography className={classes.socialLink} variant="h4">
            Line
          </Typography>
          <Typography className={classes.socialLink} variant="h4">
            Youtube
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
