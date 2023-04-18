import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  Avatar,
  useColorMode,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, BellIcon, WarningIcon } from '@chakra-ui/icons';

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const AvatarMenu = () => {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Avatar"
          icon={
            <Avatar size="xs" src="https://i.ibb.co/fMgWt01/download.jpg" />
          }
          variant="ghost"
          size="sm"
          borderRadius="md"
          colorScheme={colorMode === 'dark' ? 'orange' : 'gray'}
        />
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    );
  };

  return (
    <Box
      position="fixed"
      top="5"
      right="5"
      p={{ base: '1', md: '2' }}
      zIndex="2"
      borderRadius="xl"
      bg={colorMode === 'dark' ? '#111C44' : 'white'}
      boxShadow="lg"
    >
      <HStack spacing="2">
        {isLargerThan768 ? (
          <>
            <IconButton
              aria-label="Notification"
              icon={<BellIcon />}
              variant="ghost"
              colorScheme={colorMode === 'dark' ? 'orange' : 'gray'}
              size="sm"
              borderRadius="md"
            />
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              variant="ghost"
              onClick={toggleColorMode}
              colorScheme={colorMode === 'dark' ? 'orange' : 'gray'}
              size="sm"
              borderRadius="md"
            />
            <IconButton
              aria-label="Attention"
              icon={<WarningIcon />}
              variant="ghost"
              colorScheme={colorMode === 'dark' ? 'orange' : 'gray'}
              size="sm"
              borderRadius="md"
            />
          </>
        ) : null}
        <AvatarMenu />
      </HStack>
    </Box>
  );
};

export default Topbar;
