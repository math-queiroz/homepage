import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

import prefix from '../lib/image-prefix'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br" style={{scrollBehavior: 'smooth'}}>
        <Head >
          <link rel="shortcut icon" href={prefix + '/favicon.ico'}></link>
          </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
