import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MobileMenuButton = ({ isOpen, onClick }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ? (
    <IconButton
      aria-label="Open Menu"
      icon={<FiMenu />}
      onClick={onClick}
      position="fixed"
      top={4}
      left={4}
      bg="white"
      size="sm"
      color="purple.600"
      display={isOpen ? "none" : "flex"}
      fontSize="24px"
      zIndex={20}
      boxShadow="sm"
    />
  ) : null;
};

export default MobileMenuButton;
