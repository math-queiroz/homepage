import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Old dark mode bg #001029
const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#001023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUndelineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed, #ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'Roboto'
}

const colors = {
  glassTeal: '#88ccca',
  accent: '#A03C00'
}

const config = {
  intialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
