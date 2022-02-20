import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { Text, Image, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

// export const GridItem = ({ children, href, title, thumbnail }) => (
//   <Box w="100%" align="center">
//     <LinkBox cursor="pointer">
//       <Image
//         src={thumbnail}
//         alt={title}
//         className="grid-item-thumbnail"
//         placeholder="blur"
//         loading="lazy"
//       />
//       <LinkOverlay href={href} target="_blank">
//         <Text mt={2}>{Title}</Text>
//       </LinkOverlay>
//       <Text fontSize={14}>{children}</Text>
//     </LinkBox>
//   </Box>
// )

export const ProjetoGridItem = ({ children, id, title, thumbnail }) => (
  <motion.div w="100%" align="center" whileHover={{scale: 1.025}}>
    <NextLink href={`/projects/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/projects/${id}`} target="_blank">
          <Text mt={2} fontSize={20} fontWeight={550}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </motion.div>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
        border: #88888844 4px solid !important;
        border-radius: 4px;
    }
    `}
  />
)
