import NextLink from 'next/link'
import { motion } from 'framer-motion'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, children, externalLink }) => {
  const active = path === href
  return (
    <NextLink href={href} scroll={false}>
      <Link
        href={href}
        target={externalLink && '_blank'}
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : undefined}
        _highlighted={{}}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#F1E8DBC0', '#000E24C0')}
      style={{ backdropFilter: 'blur(15px)', fontFamily: 'Sen' }}
      zIndex={1}
      transition="background-color 0.2s ease"
      {...props}
    >
      <Container
        display="flex"
        p={8}
        maxW="95%"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box flex={1} align="left">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" path={path} scroll={false} passHref>
                  <MenuItem as={Link}>Início</MenuItem>
                </NextLink>
                <NextLink href="/projects" path={path} scroll={false} passHref>
                  <MenuItem as={Link}>Projetos</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/math-queiroz/homepage">
                  GitHub
                </MenuItem>
                <NextLink href="/about" path={path} scroll={false} passHref>
                  <MenuItem as={Link}>Sobre</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="flex-end"
          flexGrow={1}
          mr="5%"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="https://github.com/math-queiroz/homepage"
            path={path}
            externalLink
          >
            <Icon as={IoLogoGithub} size="15px" mr={2} />
            GitHub
          </LinkItem>
          <LinkItem href="/projects">Projetos</LinkItem>
          <LinkItem href="/about">Sobre</LinkItem>
        </Stack>

        <motion.div align="center" mr={5} whileHover={{scale: 1.2}}>
          <Heading as="h2" size="lg" letterSpacing={'tight'} fontFamily={'Sen'}>
            <NextLink href="/" path={path} scroll={false}>
              Ma
            </NextLink>
          </Heading>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Navbar
