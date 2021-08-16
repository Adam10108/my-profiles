import { Grid } from '@material-ui/core'
import { ImageCover } from '@/components/image-cover'
import { AppBar } from '@/components/navbar'
import { MyProfileLayout } from '@/components/layouts'
import { ProfileCard } from '@/components/profile-card'
import { useStyles } from '@/utils/styled'

const MyProfile = () => {
  const classes = useStyles()

  return (
    <MyProfileLayout>
      <AppBar />

      <div className={classes.spacer2} />

      <Grid className={classes.px2} container spacing={2}>
        <Grid item xs={12} md={4}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <ImageCover imgSrc="https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/17.jpg" />
        </Grid>
      </Grid>
    </MyProfileLayout>
  )
}

export default MyProfile
