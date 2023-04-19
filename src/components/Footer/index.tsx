// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Text, HStack, Link, Icon } from '@chakra-ui/react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

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
          <Link href="https://www.linkedin.com/in/higordedeusmatos/" isExternal>
            <Icon as={AiFillLinkedin} w={4} h={4} ml={4} />
          </Link>
          <Link href="https://github.com/Higor-Matos" isExternal>
            <Icon as={AiFillGithub} w={4} h={4} ml={4} />
          </Link>
          <Link href="mailto:higordeus22@gmail.com?subject=Interesse%20Comercial&body=Ol%C3%A1!" isExternal>
            <Icon as={AiOutlineMail} w={4} h={4} ml={4} />
          </Link>
          <Link href="https://wa.link/76i4cd" isExternal>
            <Icon as={AiOutlineWhatsApp} w={4} h={4} ml={4} />
          </Link>

          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
