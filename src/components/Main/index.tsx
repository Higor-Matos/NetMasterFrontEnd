// src/components/Main.tsx
import { Box } from '@chakra-ui/react';

const Main = ({ children }) => (
  <Box
    mt={{ base: '16', md: '8' }}
    w='100%'
    minHeight='calc(100vh - 2rem)'
    pl={{ base: 0, md: '220px' }} // Adicione paddingLeft para dispositivos md e maiores
  >
    {children}
  </Box>
);

export default Main;
