import NextLink from 'next/link'
import {
  Text,
  Box,
  Heading,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import CentralizedContainer from '../components/centralized-container'
import Layout from '../components/layouts/article'

const NotFound = () => (
  <Layout>
    <CentralizedContainer>
      <Heading as="h1" align="center">
        <Text fontFamily="Secular One" fontSize="5em" mb={-16} style={{
          /* Text Gradient */
          backgroundImage: useColorModeValue(
            'linear-gradient(to bottom, #000000 25%, #00000000 75%)', 
            'linear-gradient(to bottom, #ffffff 25%, #00000000 75%)'
          ),
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          /* Prevent Selection */
          WebkitUserSelect: 'none', MsUserSelect: 'none', userSelect: 'none'
        }}>
          404
        </Text>
      </Heading>
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
