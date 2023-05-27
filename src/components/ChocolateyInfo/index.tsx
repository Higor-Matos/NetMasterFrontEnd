import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const ChocolateyInfo = ({ chocolateyData }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Chocolatey Version</Text>
      <UnorderedList>
        <ListItem>{chocolateyData.chocolateyVersion}</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ChocolateyInfo;
