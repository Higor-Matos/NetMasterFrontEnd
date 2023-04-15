import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

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
    >
      <Text fontSize="6xl" fontWeight="bold" mb="4">
        NetMaster
      </Text>
      <Text fontSize="xl" fontWeight="medium" mb="8">
        O painel de administração para gerenciar sua rede
      </Text>
      <Button colorScheme="purple" size="lg" onClick={() => {}}>
        Acessar Controle e Dashboard
      </Button>
    </Box>
  );
};

export default Presentation;
