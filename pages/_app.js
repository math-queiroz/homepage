import { useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '../lib/theme'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'

const Website = ({ Component, pageProps, router }) => {
  const scrollToTop = useCallback(() => window.scrollTo(0,0), []) 
  
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router="router">
        <AnimatePresence exitBeforeEnter onExitComplete={scrollToTop} initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
