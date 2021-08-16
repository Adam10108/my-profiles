import React from 'react'
import { Avatar as MuiImage, Typography, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export type ImageCoverTypes = {
  imgSrc?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  imgWrapper: {
    position: 'relative',
    width: '100%',
    height: 265,

    [theme.breakpoints.down('xs')]: {
      height: 206
    }
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 24
  },
  textBox: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  text: {
    color: '#FFF',
    fontSize: 64,

    [theme.breakpoints.down('xs')]: {
      fontSize: 32
    }
  }
}))

export const ImageCover = ({ imgSrc }: ImageCoverTypes) => {
  const classes = useStyles()

  return (
    <div className={classes.imgWrapper}>
      <MuiImage
        className={classes.img}
        variant="rounded"
        src={imgSrc}
        alt="Image cover"
      />
      <div className={classes.textBox}>
        <Typography className={classes.text}>
          <strong>ADAM AJS</strong>
        </Typography>
      </div>
    </div>
  )
}
