import NextLink from 'next/link'
import {
  Box,
  Container,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import prefix from '../lib/image-prefix'

const Bio = () => {
  return (
    <Layout title="Sobre">
      <Container mt={6}>
        <Box
          display={{ md: 'flex' }}
          justifyContent="center"
          align="center"
          mb={6}
        >
          <Image
            mr={6}
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="80px"
            maxHeight="80px"
            display="inline-block"
            borderRadius="full"
            src={prefix + '/images/profile.jpg'}
            alt="profile"
          ></Image>
          <Box p={1}>
            <Heading as="h2" size='lg' variant="page-title">
              Matheus Alves Queiroz
            </Heading>
            <p>Analista e Desenvolvedor de Sistemas</p>
          </Box>
        </Box>

        <Divider
          borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
          mb={12}
        />

        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            Sobre
          </Heading>
          <Paragraph>
            Matheus é um desenvolvedor de softwares da cidade de São Paulo
            nascido em outubro de 2001. Interessado no mundo da tecnologia e em
            desenvolver soluções que entreguem eficiência e praticidade na
            realização de tarefas, tem estudado na área desde 2016 para
            construir um repertório ferramental de linguagens e{' '}
            <i>frameworks</i> que o permitam atingir tal objetivo.
          </Paragraph>
          <Paragraph>
            Ao longo de 2021 teve a oportunidade de aprofundar seus
            conhecimentos em Angular e SpringBoot durante o desenvolvimento de
            seu&nbsp;
            <NextLink href="/projects/panem">
              <Link color="indianred">trabalho de graduação</Link>
            </NextLink>
            &nbsp;. Além disso, está sempre se aventurando em novos projetos
            envolvendo Python, React e afins.
          </Paragraph>
          <Paragraph>
            Quando não está na internet, costuma passar o tempo com amigos,
            lendo livros e buscando sempre ensinar e aprender com as pessoas a
            seu redor.
          </Paragraph>
        </Section>

        <Section delay="0.6">
          <Heading as="h3" variant="section-title">
            Redes
          </Heading>
          <List>
            <ListItem mb={1}>
              <Link target="_blank" href="https://github.com/math-queiroz">
                <Icon as={IoLogoGithub} mr={2} />
                Github
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/matheus-alves-queiroz-044ba5223/"
              >
                <Icon as={IoLogoLinkedin} mr={2} />
                Linkedin
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section delay="0.9">
          <Heading as="h3" variant="section-title">
            Sobre Este Site
          </Heading>
          <Paragraph>
            Desenvolvido em Next.JS, parte da confecção deste site inspirou-se no&nbsp;
            <Link href="https://youtu.be/bSMZgXzC9AA" color={'indianred'}>
              vídeo
            </Link>
            &nbsp;disponibilizado por{' '}
            <Link href="https://www.craftz.dog">
              <b>@devaslife</b>
            </Link>
            .
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Bio
