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
        <Box align="center" my={10}>
          <Image
            maxWidth="110px"
            display="inline-block"
            borderRadius="full"
            src={prefix + '/images/profile.jpg'}
            alt="profile"
          />

          <Heading
            fontFamily="Secular One"
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

        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          Tenho {calcYearsFromDate(new Date('2001-10-02'))} anos e sou um analista de sistemas
          atuando profissionalmente como analista de suporte computacional.
          Busco sempre aprender sobre novas técnicas e ferramentas de desenvolvimento de software com foco voltado
          à programação nas mais diversas linguagens.
        </Paragraph>
      </Section>

      <Section delay={1.8}>
        <Heading as="h3" variant="section-title" mb="1em">
          Formação Acadêmica
        </Heading>
        <Box mx={4}>
          <Heading as="h5" fontSize={18}>
            FATEC Ipiranga - Pastor Enéas Tognini
          </Heading>
          <Box display="flex">
            <Text style={{flexGrow: 1}}>Análise e Desenvolvimento de Sistemas</Text>
            <Text align="right"><small>2019 - 2021</small></Text>
          </Box>
          <Heading as="h5" fontSize={18} mt="1em">
            ETEC Professor Camargo Aranha
          </Heading>
          <Box display="flex">
            <Text style={{flexGrow: 1}}>Ensino técnico em Informática</Text>
            <Text align="right"><small>2016 - 2018</small></Text>
          </Box>
        </Box>
      </Section>
    </Container>
  )
}

export default InfoCard
