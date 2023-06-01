import React from "react";
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiChocolatey } from "react-icons/si";

interface ChocolateyData {
  chocolateyVersion?: string;
}

interface ChocolateyInfoProps {
  chocolateyData: ChocolateyData;
}

const ChocolateyInfo: React.FC<ChocolateyInfoProps> = ({ chocolateyData }) => {
  const loadingColor = useColorModeValue("blue.500", "blue.300");
  const iconColor = useColorModeValue("#283142", "#F5F5F5");
  const boxBgColor = useColorModeValue("#F5F5F5", "#283142");
  const textColor = useColorModeValue("gray.700", "gray.300");

  if (!chocolateyData) {
    return <Spinner size="md" alignItems="center" color={loadingColor} />;
  }

  return (
    <Box
      boxShadow="0px 3px 6px rgba(0,0,0,0.16)"
      p="4"
      borderRadius="lg"
      backgroundColor={boxBgColor}
    >
      <Text
        mb="4"
        fontSize="xl"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={textColor}
      >
        <SiChocolatey style={{ marginRight: "8px", color: iconColor }} />
        Versão Chocolatey
      </Text>
      <UnorderedList color={textColor}>
        <ListItem>{chocolateyData.chocolateyVersion}</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ChocolateyInfo;
