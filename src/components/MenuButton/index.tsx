import React from "react";
import {
  Button,
  Icon,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import Indicator from "./Indicator";

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
  icon,
  onClick,
  page,
  bgColor,
  hoverColor,
  renderIndicator,
  iconColor,
}: MenuButtonProps) => {
  const textColor = useColorModeValue("gray.800", "white");
  const defaultIconColor = useColorModeValue("gray.600", "gray.300");
  const fontSize = { base: "sm", md: "md" };

  return (
    <Button
      variant="ghost"
      justifyContent="flex-start"
      isFullWidth
      onClick={onClick}
      borderRadius="md"
      py="3"
      px="2"
      _hover={{ bg: hoverColor }}
      _active={{ bg: bgColor }}
      _focus={{ boxShadow: "none" }}
    >
      <HStack spacing="2">
        <Icon as={icon} boxSize="20px" color={iconColor || defaultIconColor} />
        <Text fontSize={fontSize} color={textColor}>
          {text}
        </Text>
      </HStack>
      {renderIndicator(page)}
    </Button>
  );
};

export default MenuButton;
