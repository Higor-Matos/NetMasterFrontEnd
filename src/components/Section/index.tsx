import React from "react";
import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const backgroundColor = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      p={4}
      bg={backgroundColor}
      borderRadius="md"
      borderWidth={1}
      borderColor={borderColor}
    >
      <Heading as="h3" fontSize="lg" mb={4}>
        {title}
      </Heading>
      <Divider borderColor={dividerColor} mb={4} />
      {children}
    </Box>
  );
};

export default Section;
