import { Text, Box, Container, Heading, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import Layout from '../components/layouts/article'
import BackgroundScene from '../components/background-scene'
import CentralizedBox from '../components/centralized-box'
import InfoCard from '../components/info-card'
import Section from '../components/section'
import { IoIosArrowDown } from 'react-icons/io'

const Page = () => {
  return (
    <Layout title="Início">
      <BackgroundScene />
      <Box>
        <CentralizedBox id="landpage-header-contaianer" style={{ textAlign: 'center' }}>
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
              options={{
                strings: ['Analista de Sistemas', 'Desenvolvedor de Software', 'Técnico em Informática'],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                cursor: ''
              }}
            />
          </Section>
        </CentralizedBox>
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
              <motion.div whileHover={{ translateY: 10 }}>
                <Text>Ver mais</Text>
                <Icon as={IoIosArrowDown} size="25px" />
              </motion.div>
            </Link>
          </Section>
        </Container>
      </Box>
      <CentralizedBox>
        <InfoCard id="landpage-info-container" />
      </CentralizedBox>
    </Layout>
  )
}

export default Page
