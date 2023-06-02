import React from "react";
import {
  Box,
  Text,
  Spinner,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AiOutlineDesktop } from "react-icons/ai";

interface OSData {
  caption: string;
  version: string;
}

interface OSInfoProps {
  osData: OSData;
  isLoading: boolean;
}

const OSInfo: React.FC<OSInfoProps> = ({ osData, isLoading }) => {
  const loadingColor = useColorModeValue("blue.500", "blue.300");
  const iconColor = useColorModeValue("#283142", "#F5F5F5");
  const boxBgColor = useColorModeValue("#F5F5F5", "#283142");
  const textColor = useColorModeValue("gray.700", "gray.300");

  if (isLoading) {
    return <Spinner size="md" color={loadingColor} />;
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
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={textColor}
      >
        <AiOutlineDesktop style={{ marginRight: "8px", color: iconColor }} />
        Sistema Operacional
      </Text>
      {osData ? (
        <UnorderedList color={textColor} style={{ paddingLeft: "20px" }}>
          <ListItem>{osData.caption}</ListItem>
          <ListItem>V. {osData.version}</ListItem>
        </UnorderedList>
      ) : (
        <Text color={textColor} textAlign="center">
          Nenhuma informação do Sistema Operacional encontrada.
        </Text>
      )}
    </Box>
  );
};

export default OSInfo;
