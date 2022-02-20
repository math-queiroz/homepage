import NextLink from 'next/link'
import {
  Text,
  Container,
  Box,
  Heading,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => (
  <Layout>
    <Container mt={6}>
      <Heading mb={1}>Não Encontrado</Heading>
      <Text>Hmm... está vazio por aqui</Text>
      <Divider
        borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
        my={6}
      />

      <Box mt={6} align="center">
        <NextLink href="/">
          <Button bg="indianred" color="white">
            Voltar ao Início
          </Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default NotFound
