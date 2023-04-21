import { useState } from "react";
import {
  HStack,
  IconButton,
  Avatar,
  useColorMode,
  Collapse,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, BellIcon, WarningIcon } from "@chakra-ui/icons";

interface Props {
  colorScheme: string;
  avatarUrl: string;
}

const AvatarMenu = ({ colorScheme, avatarUrl }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const avatarLabel = "Avatar";
  const notificationLabel = "Notificações";
  const toggleDarkModeLabel = `Mudar para modo ${
    colorMode === "dark" ? "claro" : "escuro"
  }`;
  const attentionLabel = "Atenção";

  return (
    <>
      <IconButton
        aria-label={avatarLabel}
        icon={<Avatar size="xs" src={avatarUrl} />}
        variant="ghost"
        size="sm"
        borderRadius="md"
        onClick={toggleMenu}
        colorScheme={colorScheme}
      />
      <Collapse in={isMenuOpen} animateOpacity>
        <HStack spacing="2">
          <IconButton
            aria-label={notificationLabel}
            icon={<BellIcon />}
            variant="ghost"
            colorScheme={colorScheme}
            size="sm"
            borderRadius="md"
          />
          <IconButton
            aria-label={toggleDarkModeLabel}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            variant="ghost"
            onClick={toggleColorMode}
            colorScheme={colorScheme}
            size="sm"
            borderRadius="md"
          />
          <IconButton
            aria-label={attentionLabel}
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
