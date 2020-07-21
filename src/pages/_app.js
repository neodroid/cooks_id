import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import '../styles.css'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
