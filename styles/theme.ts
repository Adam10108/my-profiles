import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

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

export const paletteColorsDark = {
  primary: '#0f4c75',
  secondary: '#3282b8',
  error: '#E44C65',
  background: '#1b262c',
  text: '#bbe1fa'
}

export const paletteColorsLight = {
  primary: '#6886c5',
  secondary: '#ffe0ac',
  error: '#E44C65',
  background: '#f9f9f9',
  text: '#050505'
}
