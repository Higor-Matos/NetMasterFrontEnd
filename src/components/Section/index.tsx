import React from "react";
import {
  Box,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const backgroundColor = useColorModeValue("gray.100", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const boxShadow = useColorModeValue(
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)"
  );

  return (
    <Box
      p={4}
      bg={backgroundColor}
      borderRadius="md"
      borderWidth={1}
      borderColor={borderColor}
      display="flex"
      flexDirection="column"
      flex="1"
      minHeight="100%"
      boxShadow={boxShadow}
    >
      <Heading as="h3" fontSize="lg" mb={4} color={textColor}>
        {title}
      </Heading>
      <Divider borderColor={dividerColor} mb={4} />
      <Text color={textColor}>{children}</Text>
    </Box>
  );
};

export default Section;
