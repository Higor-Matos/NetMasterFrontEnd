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
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, BellIcon, WarningIcon } from '@chakra-ui/icons';
import avatarImg from '../../assets/img/avatar.jpg';

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const AvatarMenu = () => {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Avatar"
          icon={<Avatar size="xs" src={avatarImg} />}
          variant="ghost"
          size="sm"
          borderRadius="md"
          colorScheme={colorMode === 'dark' ? 'orange' : 'gray'}
        />
        <MenuList>
          {!isLargerThan768 && (
            <MenuGroup>
              <MenuItem onClick={toggleColorMode}>
                {colorMode === 'dark' ? (
                  <>
                    <SunIcon mr="2" />
                    Tema Claro
                  </>
                ) : (
                  <>
                    <MoonIcon mr="2" />
                    Tema Escuro
                  </>
                )}
              </MenuItem>
              <MenuItem icon={<BellIcon />}>Notification</MenuItem>
              <MenuItem icon={<WarningIcon />}>Attention</MenuItem>
            </MenuGroup>
          )}
          {!isLargerThan768 && <MenuDivider />}
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
        {isLargerThan768 && (
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
        )}
        <AvatarMenu />
      </HStack>
    </Box>
  );
};

export default Topbar;
