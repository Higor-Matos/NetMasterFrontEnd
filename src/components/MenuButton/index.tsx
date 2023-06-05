import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type MenuButtonProps = {
  text: string;
  icon: IconType;
  onClick: () => void;
  page: string;
  activeColor: string;
  renderIndicator: (page: string) => JSX.Element;
  iconColor?: string;
};

const MenuButton = ({
  text,
  icon: Icon,
  onClick,
  page,
  activeColor,
  renderIndicator,
  iconColor,
}: MenuButtonProps) => {
  const [hoverBgColor, hoverBorderColor] = useToken("colors", [
    "gray.100",
    "gray.200",
  ]);

  return (
    <Flex
      as={IconButton}
      aria-label={text}
      icon={
        <>
          <Icon fontSize="1.2rem" color={iconColor} />
          <Text ml={2} color="gray.800" flexGrow={1} fontSize="1rem">
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
      bg={page === activeColor ? activeColor : "transparent"}
      _hover={{
        bg: hoverBgColor,
        borderColor: hoverBorderColor,
      }}
      _active={{
        bg: hoverBgColor,
        borderColor: hoverBorderColor,
      }}
      _focus={{
        boxShadow: "outline",
      }}
    />
  );
};

export default MenuButton;
