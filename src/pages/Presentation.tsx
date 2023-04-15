import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Presentation: React.FC = () => {
  return (
    <Box
      height="100vh"
      backgroundSize="cover"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      px="4"
    >
      <Box
        p="6"
        borderRadius="lg"
      >
        <Text fontSize="2xl" fontWeight="medium" mb="8">
          NetMaster
        </Text>
        <Text fontSize="2xl" fontWeight="medium" mb="8">
          O painel de administraração para gerenciar sua rede
        </Text>
        <Button
          size="lg"
          onClick={() => {}}
        >
          Acessar Controle e Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default Presentation;
