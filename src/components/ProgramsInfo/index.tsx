import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

const ProgramsInfo = ({ programsData }) => {
  return (
    <VStack spacing={2} alignItems="start">
      <Heading size="md">Programas Instalados</Heading>
      {programsData.map((program, index) => (
        <VStack key={index}>
          <Text>{program.displayName}</Text>
          <Text>V.{program.displayVersion}</Text>
        </VStack>
      ))}
    </VStack>
  );
};

export default ProgramsInfo;
