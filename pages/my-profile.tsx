import { Grid, Typography } from '@material-ui/core'
import { AppBar } from '@/components/navbar'
import { MyProfileLayout } from '@/components/layouts'
import { useStyles } from '@/utils/styled'

const MyProfile = () => {
  const classes = useStyles()

  return (
    <MyProfileLayout>
      <AppBar />

      <div className={classes.spacer2} />

      <Grid className={classes.px2} container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4">Profile Card</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4">Sub details</Typography>
        </Grid>
      </Grid>
    </MyProfileLayout>
  )
}

export default MyProfile
