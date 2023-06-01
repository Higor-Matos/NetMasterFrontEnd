import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

interface ProgramsInfoProps {
  programsData: Array<{ displayName: string; displayVersion: string }>;
}

const ProgramsInfo: React.FC<ProgramsInfoProps> = ({ programsData }) => {
  if (!programsData) {
    return <Text>Carregando informações de programas...</Text>;
  }

  return (
    <VStack spacing={2} alignItems="start">
      <Heading size="md">Programas Instalados</Heading>
      {programsData.map((program) => (
        <VStack key={program.displayName}>
          <Text>{program.displayName}</Text>
          <Text>V.{program.displayVersion}</Text>
        </VStack>
      ))}
    </VStack>
  );
};

export default ProgramsInfo;
