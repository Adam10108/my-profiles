import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  mt0: {
    marginTop: 0
  },
  mt1: {
    marginTop: theme.spacing(1)
  },
  mt2: {
    marginTop: theme.spacing(2)
  },
  mt3: {
    marginTop: theme.spacing(3)
  },
  mt4: {
    marginTop: theme.spacing(4)
  },
  mb0: {
    marginBottom: 0
  },
  mb1: {
    marginBottom: theme.spacing(1)
  },
  mb2: {
    marginBottom: theme.spacing(2)
  },
  mb3: {
    marginBottom: theme.spacing(3)
  },
  mb4: {
    marginBottom: theme.spacing(4)
  },
  mr1: {
    marginRight: theme.spacing(1)
  },
  mr2: {
    marginRight: theme.spacing(2)
  },
  mr3: {
    marginRight: theme.spacing(3)
  },
  mr4: {
    marginRight: theme.spacing(4)
  },
  mx1: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  mx2: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  mx3: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  },
  mx4: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  my1: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  my2: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  my3: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  my4: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  py0: {
    paddingTop: 0,
    paddingBottom: 0
  },
  py1: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  py2: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  py3: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  py4: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  px1: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  px2: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  px3: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  px4: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  spacer1: {
    height: theme.spacing(1)
  },
  spacer2: {
    height: theme.spacing(2)
  },
  spacer3: {
    height: theme.spacing(3)
  },
  spacer4: {
    height: theme.spacing(4)
  },
  imgResponsive: {
    maxWidth: '100%'
  }
}))
