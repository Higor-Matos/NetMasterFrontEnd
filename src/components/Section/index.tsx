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
  const dividerColor = useColorModeValue("gray.300", "gray.600");
  const backgroundColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");
  const boxShadow = useColorModeValue(
    "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    "0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24)"
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
