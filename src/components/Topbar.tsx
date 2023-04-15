import React from "react";
import {
Box,
HStack,
IconButton,
Avatar,
useColorMode,
useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, BellIcon, WarningIcon } from "@chakra-ui/icons";

const Topbar = () => {
const { colorMode, toggleColorMode } = useColorMode();
const backgroundColor = useColorModeValue("white", "#111C44");
const colorScheme = useColorModeValue("gray", "whiteAlpha");
const iconColorScheme = useColorModeValue("gray", "orange");

return (
<Box
   position="fixed"
   top="8"
   right="8"
   p="2"
   zIndex="2"
   borderRadius="xl"
   bg={backgroundColor}
   boxShadow="lg"
 >
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
colorScheme={iconColorScheme}
size="sm"
borderRadius="md"
/>
<IconButton
aria-label="Attention"
icon={<WarningIcon />}
variant="ghost"
colorScheme={iconColorScheme}
size="sm"
borderRadius="md"
/>
<Avatar size="xs" src="https://i.ibb.co/fMgWt01/download.jpg" borderRadius="md" />
</HStack>
</Box>
);
};

export default Topbar;

