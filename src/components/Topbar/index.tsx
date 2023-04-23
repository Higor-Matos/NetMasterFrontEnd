import { motion } from "framer-motion";
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
  ColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, BellIcon, WarningIcon } from "@chakra-ui/icons";
import avatarImg from "../../assets/img/avatar.jpg";

const MotionBox = motion(Box);

interface Props {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  isLargerThan768: boolean;
  isVisible: boolean;
}

const AvatarMenu = ({ colorMode, toggleColorMode, isLargerThan768 }: Props) => {
  const iconColor = colorMode === "dark" ? "white" : "gray.800";
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Avatar"
        icon={<Avatar size="xs" src={avatarImg} />}
        variant="ghost"
        size="sm"
        borderRadius="md"
        colorScheme={colorMode === "dark" ? "orange" : "gray"}
      />
      <MenuList>
        {!isLargerThan768 && (
          <MenuGroup>
            <MenuItem onClick={toggleColorMode}>
              {colorMode === "dark" ? (
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

const Topbar = ({ isVisible }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const iconColor = colorMode === "dark" ? "white" : "gray.800";

  return (
    <MotionBox
      position="fixed"
      top="5"
      right="5"
      p={{ base: "1", md: "2" }}
      zIndex="2"
      borderRadius="xl"
      bg={colorMode === "dark" ? "#111C44" : "white"}
      boxShadow="lg"
      maxWidth={{ base: "100%", md: "calc(100% - 250px)" }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <HStack spacing="2">
        {isLargerThan768 && (
          <>
            <IconButton
              aria-label="Notification"
              icon={<BellIcon />}
              variant="ghost"
              colorScheme={colorMode === "dark" ? "orange" : "gray"}
              size="sm"
              borderRadius="md"
              color={iconColor}
            />
            <IconButton
              aria-label="Toggle Dark Mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              variant="ghost"
              onClick={toggleColorMode}
              colorScheme={colorMode === "dark" ? "orange" : "gray"}
              size="sm"
              borderRadius="md"
              color={iconColor}
            />
            <IconButton
              aria-label="Attention"
              icon={<WarningIcon />}
              variant="ghost"
              colorScheme={colorMode === "dark" ? "orange" : "gray"}
              size="sm"
              borderRadius="md"
              color={iconColor}
            />
          </>
        )}
        <AvatarMenu
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
          isLargerThan768={isLargerThan768}
          isVisible={false}
        />
      </HStack>
    </MotionBox>
  );
};
export default Topbar;
