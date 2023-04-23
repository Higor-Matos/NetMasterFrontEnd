import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ControlButtonsProps {
  label: string;
  onClick: () => void;
  icon: IconType;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  label,
  onClick,
  icon: ButtonIcon,
}) => {
  const borderColor = useColorModeValue("gray.600", "gray.400");
  const textColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const _hoverBgColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Button
      onClick={onClick}
      variant="solid"
      leftIcon={<ButtonIcon />}
      width="100%"
      textAlign="right"
      borderColor={borderColor}
      color={textColor}
      bg={bgColor}
      _hover={{
        bg: _hoverBgColor,
        borderColor: borderColor,
      }}
      _active={{
        bg: _hoverBgColor,
        borderColor: borderColor,
      }}
    >
      {label}
    </Button>
  );
};

export default ControlButtons;
