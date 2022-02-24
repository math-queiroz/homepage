let imgPrefix;

if (process.env.NODE_ENV === 'development')
    imgPrefix = ''
else 
    imgPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '/out'

export default imgPrefix