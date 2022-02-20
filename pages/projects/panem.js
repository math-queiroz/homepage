import React from 'react'
import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/projects-details'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Panem">
      <Container maxW="container.md">
        <Title>
          Panem <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Panem é uma aplicação web de comparitlhamento de receitas de usuários
          para usuários, onde a busca é feita através da filtragem dos
          ingredientes que usuário tem à disposição no momento.
        </Paragraph>
        <Paragraph>
          Desenvolvida como trabalho de graduação em Análise e Desenvolvimento
          de Sistemas, o objetivo do grupo com a plataforma foi o de facilitar e
          consequentemente fomentar nos usuários o hábito de preparar as
          próprias refeições, reduzindo assim o consumo de alimentos
          ultraprocessados que causam mal à saúde.
        </Paragraph>
        <Paragraph>
          A página web foi desenvolvida em Angular com componentes da biblioteca
          PrimeNG, enquanto o servidor que hospeda a API de comunicação ao banco
          de dados foi programado em Java através do framework Spring Boot.
        </Paragraph>
        <List ml={4} my={6}>
          <ListItem>
            <Meta>Plataformas</Meta>
            <span>Windows, macOS, Linux, iOS e Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Angular, Springboot, PostgreSQL</span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/panem/panem_landpage.png"></ProjectImage>
        <ProjectImage src="/images/works/panem/panem_login.png"></ProjectImage>
        <ProjectImage src="/images/works/panem/panem_receitas.png"></ProjectImage>
        <ProjectImage src="/images/works/panem/panem_receita.png"></ProjectImage>
      </Container>
    </Layout>
  )
}

export default Project
