import {
    Container,
    Box
} from '@chakra-ui/react'

const CentralizedContainer = ({ children, id, style }) => {
    return (
        <Container
            id={id}
            style={{
                display: 'flex',
                height: 'calc(100vh - 190px)',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box {...style}>
                {children}
            </Box>
        </Container>
    )
}

export default CentralizedContainer