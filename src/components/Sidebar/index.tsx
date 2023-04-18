import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Spacer,
  useColorMode,
  IconButton,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/react";
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineHome, AiFillLayout } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuButton, Indicator } from "../index";

type SidebarProps = {
  onPresentationClick: () => void;
  onControlPanelClick: () => void;
  onDashboardClick: () => void;
  currentPage: string;
};

const Sidebar = ({
  onPresentationClick,
  onControlPanelClick,
  onDashboardClick,
  currentPage,
}: SidebarProps) => {
  const { colorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderIndicator = (page: string) => (
    <Indicator isVisible={currentPage === page} />
  );

const renderMenuButton = () =>
  !isLargerThan768 ? (
    <IconButton
      aria-label="Open Menu"
      icon={<HamburgerIcon />}
      onClick={toggleMenu}
      position="fixed"
      zIndex="2"
      left="5"
      top="5"
      size="sm"
      borderRadius="md"
    />
  ) : null;


  const menuItems = [
    {
      text: "Presentation",
      icon: AiOutlineHome,
      onClick: onPresentationClick,
      page: "presentation",
    },
    {
      text: "Control Panel",
      icon: AiFillLayout,
      onClick: onControlPanelClick,
      page: "control-panel",
    },
    {
      text: "Dashboard",
      icon: RiBarChartBoxLine,
      onClick: onDashboardClick,
      page: "dashboard",
    },
  ];

  const renderMenuItems = () =>
    menuItems.map((item) => (
      <MenuButton
        key={item.text}
        text={item.text}
        icon={item.icon}
        onClick={item.onClick}
        page={item.page}
        renderIndicator={renderIndicator}
      />
    ));

  return (
    <>
      {renderMenuButton()}
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
          borderRadius="md"
        >
          <VStack spacing="2" alignItems="stretch">
            <Heading size="sm" mb="1" textAlign="center" fontSize="lg">
              NET MASTER
            </Heading>
            <Divider borderColor="gray.300" my={2} />
            {renderMenuItems()}
            <Spacer />
          </VStack>
        </Box>
      ) : (
        <>
          <Drawer isOpen={isMenuOpen} onClose={toggleMenu} placement="left" size="xs">
            <DrawerOverlay />
            <DrawerContent
bg={colorMode === "dark" ? "#111C44" : "white"} borderRadius="md">
<DrawerCloseButton />
<VStack spacing="4" alignItems="stretch" padding="4">
<Heading size="lg" mb="2" textAlign="center" fontSize="md">
NETMASTER
</Heading>
<Divider borderColor="gray.300" my={2} />
{renderMenuItems()}
<Spacer />
</VStack>
</DrawerContent>
</Drawer>
</>
)}
</>
);
};

export default Sidebar;