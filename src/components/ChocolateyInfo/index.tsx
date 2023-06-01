import React from "react";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface ChocolateyData {
  chocolateyVersion?: string;
}

interface ChocolateyInfoProps {
  chocolateyData: ChocolateyData;
}

const ChocolateyInfo: React.FC<ChocolateyInfoProps> = ({ chocolateyData }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        Chocolatey Version
      </Text>
      <UnorderedList>
        <ListItem>{chocolateyData.chocolateyVersion}</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ChocolateyInfo;
