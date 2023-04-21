import { useState } from "react";
import {
  HStack,
  IconButton,
  Avatar,
  useColorMode,
  Collapse,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, BellIcon, WarningIcon } from "@chakra-ui/icons";

const AvatarMenu = ({ colorScheme }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        aria-label="Avatar"
        icon={<Avatar size="xs" src="https://i.ibb.co/fMgWt01/download.jpg" />}
        variant="ghost"
        size="sm"
        borderRadius="md"
        onClick={handleToggle}
        colorScheme={colorScheme}
      />
      <Collapse in={isOpen} animateOpacity>
        <HStack spacing="2">
          <IconButton
            aria-label="Notification"
            icon={<BellIcon />}
            variant="ghost"
            colorScheme={colorScheme}
            size="sm"
            borderRadius="md"
          />
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            variant="ghost"
            onClick={toggleColorMode}
            colorScheme={colorScheme}
            size="sm"
            borderRadius="md"
          />
          <IconButton
            aria-label="Attention"
            icon={<WarningIcon />}
            variant="ghost"
            colorScheme={colorScheme}
            size="sm"
            borderRadius="md"
          />
        </HStack>
      </Collapse>
    </>
  );
};

export default AvatarMenu;
