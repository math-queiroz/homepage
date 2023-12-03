import {
    Box
} from '@chakra-ui/react'

const CentralizedBox = ({ children, id, style }) => {
    return (
        <Box
            id={id}
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 190px)',
                width: '100vw',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}
        >
            {children}
        </Box>
    )
}

export default CentralizedBox