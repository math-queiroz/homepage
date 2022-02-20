import React from 'react'
import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/projects-details'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="HelpMyCar">
      <Container maxW="container.md">
        <Title>
          HelpMyCar <Badge>2018</Badge>
        </Title>
        <Paragraph>
          HelpMyCar é uma plataforma que busca atuar estabelecendo uma ponte
          entre clientes e prestadores de serviços automotivos, sendo também um
          marketplace para peças.
        </Paragraph>
        <Paragraph>
          Originário do programa Startup in School, o projeto teve por objetivo
          atuar como uma plataforma de anúncios e procura de serviços
          automotivos que, por exatamente atuar neste ramo específico,
          entregaria maior eficácia de comunicação em relação à comunicação que
          se vale do uso de mídias sociais que atuem em escopos mais
          abrangentes.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>Plataformas</Meta>
            <span>Windows, macOS, Linux, iOS e Android</span>
          </ListItem>
          <ListItem>
            <Meta>Feito com</Meta>
            <span>WordPress, BuddyPress</span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/helpmycar/hmc_landpage.png"></ProjectImage>
        <ProjectImage src="/images/works/helpmycar/hmc_login.png"></ProjectImage>
        <ProjectImage src="/images/works/helpmycar/hmc_mapa.png"></ProjectImage>
      </Container>
    </Layout>
  )
}

export default Project
