import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const label =
    colorMode === "dark" ? "Ativar modo claro" : "Ativar modo escuro";

  return (
    <IconButton
      aria-label={label}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      isRound
      size="md"
    />
  );
};

export default ColorModeToggle;
