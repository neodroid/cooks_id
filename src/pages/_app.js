import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import Head from "next/head";

import '../styles.css'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
      <link rel="manifest" href="/static/site.webmanifest"/>
    {/* <link rel="icon"  type="image/x-icon" href="/static/logok1.png" /> */}
        <title color="#9AE6B4">Lets Cook!🍔🍕🧆</title>
      </Head>
        <CSSReset />
        <Component {...pageProps} />
      
    </ThemeProvider>
  )
}

export default MyApp
