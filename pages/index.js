import { Text, Box, Container, Heading, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import Layout from '../components/layouts/article'
import BackgroundScene from '../components/background-scene'
import InfoCard from '../components/info-card'
import Section from '../components/section'
import { IoIosArrowDown } from 'react-icons/io'

const Page = () => {
  return (
    <Layout title="Início">
      <BackgroundScene />
      <Box>
        <Container
          id="landpage-header-container"
          style={{
            display: 'flex',
            height: 'calc(100vh - 190px)',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box align="center">
            <Heading
              as="h1"
              style={{
                fontFamily: 'Secular One',
                letterSpacing: '.15rem',
                wordSpacing: '.3rem'
              }}
            >
              <span style={{ color: 'indianred' }}>Matheus</span> Queiroz
            </Heading>
            <Section delay={0.3} verticalFadeIn>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .changeDeleteSpeed(32)
                    .typeString('Técnico em Informática')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Analista e Desenvolvedor de Sistemas')
                    .start()
                }}
              />
            </Section>
          </Box>
        </Container>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <Section
            delay={0.9}
            style={{ align: 'center', margin: 0 }}
            verticalFadeIn
          >
            <Link
              activeClass="active"
              to="landpage-info-container"
              smooth={true}
              offset={-140}
              duration={1000}
              style={{ cursor: 'pointer' }}
            >
              <motion.div whileHover={{translateY: 10}}>
                <Text>Ver mais</Text>
                <Icon as={IoIosArrowDown} size="25px" />
              </motion.div>
            </Link>
          </Section>
        </Container>
      </Box>
      <InfoCard id="landpage-info-container" />
    </Layout>
  )
}

export default Page
