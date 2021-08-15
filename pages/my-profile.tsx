import { Box, Button, Typography } from '@material-ui/core'
import { useThemeState, ThemeContextValues } from '@/contexts/theme.context'

const MyProfile = () => {
  const { isDarkMode, actions }: ThemeContextValues = useThemeState()

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h1">My Profile Page</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => actions.setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </Button>
    </Box>
  )
}

export default MyProfile
