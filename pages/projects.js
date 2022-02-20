import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjetoGridItem } from '../components/grid-item'

import prefix from '../lib/image-prefix'

const Projetos = () => {
  return (
    <Layout title="Projetos">
      <Container maxWidth="container.md">
        <Heading as="h3" fontSize={20} mb={6} variant="section-title">
          Projetos Acadêmicos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <Section>
            <ProjetoGridItem
              id="panem"
              title="Panem"
              thumbnail={prefix + '/images/works/panem/panem_landpage.png'}
            >
              Uma aplicação web de receitas onde a busca é feita através dos
              ingredientes que se tem à disposição.
            </ProjetoGridItem>
          </Section>
          <Section>
            <ProjetoGridItem
              id="helpmycar"
              title="HelpMyCar"
              thumbnail={prefix + '/images/works/helpmycar/hmc_landpage.png'}
            >
              Uma plataforma B2B onde os clientes podem solicitar serviços e
              peças de reparo para suas frotas.
            </ProjetoGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projetos
