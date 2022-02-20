import Head from 'next/head'
import { Container, Box } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Matheus Queiroz</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container padding={0} maxW="100%" pt={28}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
