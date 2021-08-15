import { createMuiTheme } from '@material-ui/core/styles'
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

export default createMuiTheme({
  typography
})
