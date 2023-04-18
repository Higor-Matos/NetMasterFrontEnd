// src/components/Sidebar/MobileMenuButton.tsx
import React from "react";
import { IconButton, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  if (isLargerThan768) {
    return null;
  }

  return (
    <IconButton
      aria-label="Open Menu"
      icon={<HamburgerIcon />}
      onClick={onClick}
      position="fixed"
      zIndex="2"
      left="5"
      top="5"
      size="sm"
      borderRadius="md"
    />
  );
};

export default MobileMenuButton;
