import React from 'react';
import { Heading, VStack, Text } from '@chakra-ui/react';

const OSInfo = ({ osData }) => {
  return (
    <VStack spacing={2} alignItems="start">
      <Heading size="md">Sistema Operacional</Heading>
      <Text>Caption: {osData.caption}</Text>
      <Text>Versão: {osData.version}</Text>
    </VStack>
  );
};

export default OSInfo;
