import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { createTheme } from '@material-ui/core/styles'

const breakpoints = createBreakpoints({})

export const colors = {
  grayLighter: '#F5F5F6',
  grayLight: '#E5E5E6',
  gray: '#B2B2B4',
  grayDark: '#7F8082',
  grayBase: '#000106'
}

export const paletteColorsLight = {
  primary: '#6886c5',
  secondary: '#ffe0ac',
  error: '#E44C65',
  background: '#f9f9f9',
  text: '#050505'
}

export const paletteColorsDark = {
  primary: '#0f4c75',
  secondary: '#3282b8',
  error: '#E44C65',
  background: '#1b262c',
  text: '#bbe1fa'
}

export const typography = {
  h1: {
    fontSize: '40px',
    [breakpoints.down('xs')]: {
      fontSize: '26px'
    }
  },
  h2: {
    fontSize: '28px',
    [breakpoints.down('xs')]: {
      fontSize: '26px'
    }
  },
  h3: {
    fontSize: '24px',
    [breakpoints.down('xs')]: {
      fontSize: '20px'
    }
  },
  h4: {
    fontSize: '20px',
    [breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  },
  h5: {
    fontSize: '16px',
    [breakpoints.down('xs')]: {
      fontSize: '14px'
    }
  },
  h6: {
    fontSize: '14px',
    [breakpoints.down('xs')]: {
      fontSize: '12px'
    }
  }
}

export default createTheme({ typography })
