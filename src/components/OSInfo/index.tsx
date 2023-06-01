import React from "react";
import { Box, Text, Spinner, useColorModeValue } from "@chakra-ui/react";
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
  const textColor = useColorModeValue("gray.700", "gray.300");
  const boxBgColor = useColorModeValue("#F5F5F5", "#283142");
  const iconColor = useColorModeValue("#283142", "#F5F5F5");

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
        display="flex"
        justifyContent="center"
        color={textColor}
      >
        <AiOutlineDesktop style={{ marginRight: "8px", color: iconColor }} />
        Sistema Operacional
      </Text>
      {osData ? (
        <>
          <Text color={textColor} mb="2">
            {osData.caption}
          </Text>
          <Text color={textColor}>V. {osData.version}</Text>
        </>
      ) : (
        <Text color={textColor}>
          Nenhuma informação do Sistema Operacional encontrada.
        </Text>
      )}
    </Box>
  );
};

export default OSInfo;
