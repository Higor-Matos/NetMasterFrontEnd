import React, { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Avatar,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";
import {
SunIcon,
MoonIcon,
BellIcon,
WarningIcon,
ChevronDownIcon,
} from "@chakra-ui/icons";

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showMenu, setShowMenu] = useState(false);
  const backgroundColor = useColorModeValue("white", "#111C44");
  const colorScheme = useColorModeValue("gray", "whiteAlpha");
  const iconColorScheme = useColorModeValue("gray", "orange");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleAvatarClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      p="2"
      zIndex="2"
      borderRadius="xl"
      bg={backgroundColor}
      boxShadow="lg"
    >
      {isLargerThan768 ? (
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
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Avatar"
              icon={<Avatar size="xs" src="https://i.ibb.co/fMgWt01/download.jpg" />}
              variant="ghost"
              size="sm"
              borderRadius="md"
              onClick={handleAvatarClick}
            />
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      ) : (
        <HStack spacing="2">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Avatar"
              icon={<Avatar size="xs" src="https://i.ibb.co/fMgWt01/download.jpg" />}
              variant="ghost"
              size="sm"
              borderRadius="md"
              onClick={handleAvatarClick}
            />
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      )}
    </Box>
  );
};
export default Topbar;