import React, { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'

export const Home = (): JSX.Element => {
  const router: NextRouter = useRouter()

  useEffect(() => {
    router.push('my-profile')
  })

  return <div>Loading...</div>
}

export default Home
