// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Text, HStack, Link } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      as='footer'
      paddingY='1.5rem'
      marginTop='auto'
      marginLeft={{ base: 0, md: '220px' }} // Adicione marginLeft para dispositivos md e maiores
    >
      <Container maxW='container.xl'>
        <HStack justifyContent='space-between'>
          <Text fontSize='sm' color='gray.600'>
            &copy; 2023 Integrator Projector. All Rights Reserved.
          </Text>
          <HStack spacing='4'>
            <Link href='https://www.linkedin.com/in/higordedeusmatos/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin />
            </Link>
            <Link href='https://github.com/Higor-Matos' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
            </Link>
            <Link href='mailto:higordeus22@gmail.com?subject=Interesse%20Comercial&body=Ol%C3%A1!' target='_blank' rel='noopener noreferrer'>
              <FaEnvelope />
            </Link>
            <Link href='https://wa.link/76i4cd' target='_blank' rel='noopener noreferrer'>
              <FaWhatsapp />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
