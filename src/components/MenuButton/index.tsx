import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type MenuButtonProps = {
  text: string;
  icon: IconType;
  onClick: () => void;
  page: string;
  bgColor: string;
  hoverColor: string;
  renderIndicator: (page: string) => JSX.Element;
  iconColor?: string;
};

const MenuButton = ({
  text,
  icon: Icon,
  onClick,
  page,
  renderIndicator,
  iconColor,
}: MenuButtonProps) => {
  const textColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("transparent", "transparent");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      as={IconButton}
      aria-label={text}
      icon={
        <>
          <Icon fontSize="1.2rem" />
          <Text ml={2} color={textColor} flexGrow={1} fontSize="1rem">
            {text}
          </Text>
          <Box w="20px" fontSize="0.8rem" textAlign="right">
            {renderIndicator(page)}
          </Box>
        </>
      }
      onClick={onClick}
      borderRadius="md"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      bg={bgColor}
      _hover={{
        bg: hoverBgColor,
      }}
    />
  );
};

export default MenuButton;
