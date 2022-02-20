import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, style, delay = 0, verticalFadeIn = false }) => {
  return (
    <StyledDiv
      initial={verticalFadeIn ? { y: 10, opacity: 0 } : { x: 10, opacity: 0 } }
      animate={{ y:0, x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
      {...style}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
