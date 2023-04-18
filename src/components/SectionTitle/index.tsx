import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" pb={2}>
      <Text fontSize="md" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
};

export default SectionTitle;