import React from "react";
import { Box, Flex, Link, Text, Icon, Stack, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };

  return (
    <Box
      bg={bgColor[colorMode]}
      w="100%"
      p={4}
      position="sticky"
      bottom={0}
      zIndex={1000}
    >
      <Stack direction={{ base: "column", md: "row" }} alignItems="center" justify="space-between">
        <Text fontSize="sm">&copy; 2023 Integrator Projector. All Rights Reserved.</Text>
        <Stack direction="row" spacing={4}>
          <Link href="https://www.linkedin.com/in/higordedeusmatos/" isExternal>
            <Icon as={AiFillLinkedin} w={4} h={4} />
          </Link>
          <Link href="https://github.com/Higor-Matos" isExternal>
            <Icon as={AiFillGithub} w={6} h={6} />
          </Link>
          <Link href="mailto:higordeus22@gmail.com?subject=Interesse%20Comercial&body=Ol%C3%A1!" isExternal>
            <Icon as={AiOutlineMail} w={6} h={6} />
          </Link>
          <Link href="https://wa.link/76i4cd" isExternal>
            <Icon as={AiOutlineWhatsApp} w={6} h={6} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
