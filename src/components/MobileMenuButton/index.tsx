import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  useBreakpointValue,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MotionIconButton = motion(IconButton);

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const buttonColor = useColorModeValue("purple.600", "purple.200");
  const iconColor = useColorModeValue("gray.800", "white");

  return isMobile ? (
    <Box display="flex" alignItems="center">
      <MotionIconButton
        aria-label="Open Menu"
        icon={<FiMenu color={iconColor} />}
        onClick={onClick}
        position="fixed"
        top={4}
        left={4}
        size="sm"
        color={buttonColor}
        display={isOpen ? "none" : "flex"}
        fontSize="16px"
        zIndex={20}
        boxShadow="sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ alignItems: isLargerThan768 ? "flex-start" : "center" }}
      />
    </Box>
  ) : null;
};

export default MobileMenuButton;
