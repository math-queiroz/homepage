import NextLink from 'next/link'
import {
  Text,
  Image,
  Box,
  Heading,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import CentralizedContainer from '../components/centralized-container'
import Layout from '../components/layouts/article'
import prefix from '../lib/image-prefix.js'

const NotFound = () => (
  <Layout>
    <CentralizedContainer>
      <Heading mb={1} style={{ fontFamily: 'Secular One' }}>Oops!</Heading>
      <Text>A página que você procura não está disponível.</Text>
      <Divider
        borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
        width={150}
        my={6}
      />

      <Box align="center">
        <small><i>
          <Text>Nem tudo que reluz é ouro, nem todos que vagueiam estão perdidos.
            Mas dessa vez, não há nada a explorar por aqui...</Text>
        </i></small>
        <NextLink href="/">
          <Button my={4} bg="indianred" color="white">
            Voltar ao Início
          </Button>
        </NextLink>
      </Box>
    </CentralizedContainer>
  </Layout>
)

export default NotFound
