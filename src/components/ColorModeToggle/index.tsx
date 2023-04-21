import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "dark" ? "Modo claro" : "Modo escuro"}>
      <IconButton
        aria-label={colorMode === "dark" ? "Modo claro" : "Modo escuro"}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        isRound
        size="md"
      />
    </Tooltip>
  );
};

export default ColorModeToggle;
