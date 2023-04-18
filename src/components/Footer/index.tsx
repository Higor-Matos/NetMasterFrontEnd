// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Text, HStack } from '@chakra-ui/react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <Box
      as='footer'
      paddingY='1.5rem'
      marginTop='auto'
      marginLeft={{ base: 0, md: '220px' }}
    >
      <Container maxW='container.xl'>
        <HStack justifyContent='space-between'>
          <Text fontSize='sm' color='gray.600'>
            &copy; 2023 Integrator Projector. All Rights Reserved.
          </Text>
          <HStack spacing='4'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
