import React from 'react'
import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from './paragraph'
import Section from './section'

import prefix from '../lib/image-prefix'

const calcYearsFromDate = (birthDate) => {
  const EPOCH_START = 1970
  let dateDiff = new Date(new Date() - birthDate.getTime())
  let age = Math.abs(dateDiff.getUTCFullYear() - EPOCH_START)
  return age.toString()
}

const InfoCard = () => {
  return (
    <Container id="landpage-info-container">
      <Section delay={1.2}>
        <Box align="center" mt={10}>
          <Image
            borderColor="indianred"
            borderWidth={3}
            borderStyle="solid"
            maxWidth="110px"
            display="inline-block"
            borderRadius="full"
            src={prefix + '/images/profile.jpg'}
            alt="profile"
          />

          <Heading
            color="indianred"
            align="center"
            as="h2"
            letterSpacing=".15rem"
            variant="page-title"
          >
            Matheus Alves Queiroz
          </Heading>

          <p>Analista e Desenvolvedor de Sistemas</p>
        </Box>

        <Box
          borderRadius="lg"
          bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
          my={10}
          p={3}
          align="center"
        >
          Simples mas em constante movimento.
        </Box>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Tenho {calcYearsFromDate(new Date('2001-10-02'))} anos e sou um estudante de Análise e Desenvolvimento de
          Sistemas em busca de uma oportunidade profissional para dar início à
          minha carreira em tecnologia.
        </Paragraph>
      </Section>

      <Section delay={1.5}>
        <Heading as="h3" variant="section-title">
          Competências
        </Heading>
        <List display="inline-grid" minWidth="225px">
          <Text fontWeight="bold">Hard Skills</Text>
          <ListItem>JavaScript</ListItem>
          <ListItem>HTML/CSS</ListItem>
          <ListItem>Java</ListItem>
          <ListItem>SQL</ListItem>
          <ListItem>Python</ListItem>
          <br />
          <Text fontWeight="bold">Idiomas</Text>
          <ListItem>Inglês - Intermediário</ListItem>
          <br />
        </List>
        <List display="inline-grid" minWidth="225px">
          <Text fontWeight="bold">Soft Skill</Text>
          <ListItem>Trabalho em Equipe</ListItem>
          <ListItem>Comunicação Clara</ListItem>
          <ListItem>Adaptabilidade</ListItem>
          <br />
          <Text fontWeight="bold">Outras Competências</Text>
          <ListItem>Git</ListItem>
          <ListItem>Microsoft Office</ListItem>
          <ListItem>Ambiente Linux</ListItem>
        </List>
      </Section>

      <Section delay={1.8}>
        <Heading as="h3" variant="section-title" mb="1em">
          Formação Acadêmica
        </Heading>
        <Box ml={4}>
          <Heading as="h5" fontSize={18}>
            FATEC Ipiranga - Pastor Enéas Tognini
          </Heading>
          <Text>
            Análise e Desenvolvimento de Sistemas - Cursando atualmente
          </Text>
          <Heading as="h5" fontSize={18} mt="1em">
            ETEC Professor Camargo Aranha - 2018
          </Heading>
          <Text>Técnico em Informática - Cursado de 2016 a 2018</Text>
        </Box>
      </Section>
    </Container>
  )
}

export default InfoCard
