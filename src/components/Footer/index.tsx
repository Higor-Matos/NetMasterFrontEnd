import React from "react";
import { Box, Container, Text, Flex, Link, Icon } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box as="footer" py="1.5rem" mt="auto" ml={{ base: 0, md: "220px" }}>
      <Container maxW="container.xl">
        <Flex justifyContent="space-between">
          <Text fontSize="sm" color="gray.600">
            &copy; 2023 Integrator Projector. All Rights Reserved.
          </Text>
          <Flex gap="4">
            <Link
              href="https://www.linkedin.com/in/higordedeusmatos/"
              isExternal
            >
              <Icon as={AiFillLinkedin} w={4} h={4} mr="4" />
            </Link>
            <Link href="https://github.com/Higor-Matos" isExternal>
              <Icon as={AiFillGithub} w={4} h={4} mr="4" />
            </Link>
            <Link
              href="mailto:higordeus22@gmail.com?subject=Interesse%20Comercial&body=Ol%C3%A1!"
              isExternal
            >
              <Icon as={AiOutlineMail} w={4} h={4} mr="4" />
            </Link>
            <Link href="https://wa.link/76i4cd" isExternal>
              <Icon as={AiOutlineWhatsApp} w={4} h={4} mr="4" />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
