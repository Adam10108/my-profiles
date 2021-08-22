import { ProfileCover } from '@/components/profile-cover'
import { AppBar } from '@/components/navbar'
import { ProfileContainer } from '@/components/layouts'

const MyProfile = () => {
  return (
    <ProfileContainer>
      <AppBar />

      <ProfileCover imgSrc="images/writer.svg" />
    </ProfileContainer>
  )
}

export default MyProfile
