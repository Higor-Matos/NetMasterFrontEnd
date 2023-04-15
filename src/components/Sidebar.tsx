import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Button,
  Spacer,
  useColorMode,
  Icon,
  Text,
  Divider,
  useMediaQuery,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineHome, AiFillLayout } from "react-icons/ai";

const Sidebar = ({
  onPresentationClick,
  onControlPanelClick,
  onDashboardClick,
  currentPage,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderIndicator = (page) =>
    currentPage === page ? (
      <Box
        w="4px"
        h="20px"
        bg="#7551FF"
        ml={2}
        borderRadius="25px"
        transform="rotate(0deg)"
      />
    ) : null;

  const renderButton = (text, icon, onClick, page) => (
    <Button
      key={text}
      leftIcon={<Icon as={icon} boxSize="16px" />}
      variant="ghost"
      fontSize="sm"
      fontWeight="semibold"
      textAlign="left"
      onClick={onClick}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text flex="1">{text}</Text>
      {renderIndicator(page)}
    </Button>
  );

  return (
    <>
      {isLargerThan768 ? (
        <Box
          position="fixed"
          left="0"
          top="0"
          width="220px"
          height="100%"
          bg={colorMode === "dark" ? "#111C44" : "white"}
          padding="4"
          boxShadow="md"
          zIndex="1"
        >
          <VStack spacing="4" alignItems="stretch">
            <Heading size="lg" mb="2" textAlign="center" fontSize="md">
              NETMASTER
            </Heading>
            <Divider borderColor="gray.300" my={2} />
            {renderButton(
              "Presentation",
              AiOutlineHome,
              onPresentationClick,
              "presentation"
            )}
            {renderButton(
              "Control Panel",
              AiFillLayout,
              onControlPanelClick,
              "control-panel"
            )}
            {renderButton(
              "Dashboard",
              RiBarChartBoxLine,
              onDashboardClick,
              "dashboard"
            )}
            <Spacer />
            <Button
              aria-label="Toggle Dark Mode"
              variant="ghost"
              leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            >
              {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </VStack>
        </Box>
      ) : (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            position="fixed"
            zIndex="2"
            bg={colorMode === "dark" ? "#111C44" : "white"}
            boxShadow="md"
          />
          <Drawer isOpen={isMenuOpen} onClose={toggleMenu} placement="left" size="xs">
            <DrawerOverlay />
            <DrawerContent bg={colorMode === "dark" ? "#111C44" : "white"}>
              <DrawerCloseButton />
              <VStack spacing="4" alignItems="stretch" padding="4">
                <Heading size="lg" mb="2" textAlign="center" fontSize="md">
                  NETMASTER
                </Heading>
                <Divider borderColor="gray.300" my={2} />
                {renderButton(
                  "Presentation",
                  AiOutlineHome,
                  onPresentationClick,
                  "presentation"
                )}
                {renderButton(
                  "Control Panel",
                  AiFillLayout,
                  onControlPanelClick,
                  "control-panel"
                )}
                {renderButton(
                  "Dashboard",
                  RiBarChartBoxLine,
                  onDashboardClick,
                  "dashboard"
                )}
                <Spacer />
                <Button
                  aria-label="Toggle Dark Mode"
                  variant="ghost"
                  leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                  onClick={toggleColorMode}
                >
                  {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
                </Button>
              </VStack>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};
export default Sidebar;