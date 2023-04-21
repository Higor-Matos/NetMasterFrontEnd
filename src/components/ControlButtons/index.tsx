import React from "react";
import { Button } from "@chakra-ui/react";
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
  return (
    <Button
      onClick={onClick}
      variant="outline"
      leftIcon={<ButtonIcon />}
      width="100%"
      textAlign="right"
    >
      {label}
    </Button>
  );
};

export default ControlButtons;
