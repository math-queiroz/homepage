import React from 'react'
import NextLink from 'next/link'
import { Box, Image, Link, Heading, Badge, Divider, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import prefix from '../lib/image-prefix'

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/projects">
        <Link color="indianred">Projetos</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
      <Divider
          borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
          mb={4}
        />
    </Box>
  )
}

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={prefix + src} alt={alt} mb={4}></Image>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="red" mr={2}>
    {children}
  </Badge>
)
