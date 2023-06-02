import React from "react";
import {
  VStack,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlineAppstore, AiFillAppstore } from "react-icons/ai";

interface Program {
  displayName: string;
  displayVersion: string;
}

interface ProgramsInfoProps {
  programsData: Program[];
}

const ProgramsInfo: React.FC<ProgramsInfoProps> = ({ programsData }) => {
  const loadingColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const listItemBgColor = useColorModeValue("#F5F5F5", "#283142");
  const iconColor = useColorModeValue("#283142", "#F5F5F5");
  const boxBgColor = useColorModeValue("#F5F5F5", "#283142");

  if (!programsData) {
    return <Spinner size="md" color={loadingColor} />;
  }
  const sortedProgramsData = [...programsData].sort((a, b) =>
    a.displayName.localeCompare(b.displayName)
  );

  return (
    <Box
      boxShadow="0px 3px 6px rgba(0,0,0,0.16)"
      p="4"
      borderRadius="lg"
      backgroundColor={boxBgColor}
      maxHeight="60vh"
      overflowY="auto"
    >
      <Heading
        mb="4"
        fontSize="xl"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={textColor}
      >
        <AiOutlineAppstore style={{ marginRight: "8px", color: iconColor }} />
        Programas Instalados
      </Heading>
      <VStack spacing={2} alignItems="start">
        {sortedProgramsData.map((program: Program) => (
          <Box
            key={program.displayName}
            backgroundColor={listItemBgColor}
            p="3"
            borderRadius="md"
            color={textColor}
            width="250px"
          >
            <Text display="flex" alignItems="center">
              <AiFillAppstore
                style={{ marginRight: "8px", color: iconColor }}
              />
              <Text fontSize="sm" fontWeight="bold" isTruncated>
                {program.displayName}
              </Text>
            </Text>
            <Text fontSize="xs">V.{program.displayVersion}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ProgramsInfo;
