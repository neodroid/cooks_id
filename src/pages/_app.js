import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import '../styles.css'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
      
        <CSSReset />
        <Component {...pageProps} />
      
    </ThemeProvider>
  )
}

export default MyApp
