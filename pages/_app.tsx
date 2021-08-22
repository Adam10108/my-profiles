import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@/contexts/theme.context'
import '@/styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Profile Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/profiles-labs-logo.png" />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
