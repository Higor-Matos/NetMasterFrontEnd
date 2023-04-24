import React from "react";
import {
  Box,
  VStack,
  Heading,
  Divider,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MenuButton } from "../index";

interface MenuItem {
  text: string;
  icon: IconType;
  onClick: () => void;
  page: string;
}

interface DesktopSidebarProps {
  menuItems: {
    text: string;
    icon: IconType;
    onClick: () => void;
    page: string;
  }[];
  currentPage: string;
  renderIndicator: (page: string) => JSX.Element;
}

const DesktopSidebar = ({
  menuItems,
  currentPage,
  renderIndicator,
}: DesktopSidebarProps) => {
  const { colorMode } = useColorMode();
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      display={{ base: "none", md: "block" }}
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
        <Heading
          size="sm"
          mb="1"
          textAlign="center"
          fontSize={{ base: "md", md: "lg" }}
          color={headingColor}
        >
          <strong style={{ fontWeight: "bold" }}>NET</strong> MASTER
        </Heading>
        <Divider as="hr" borderColor="gray.300" my={2} />
        {menuItems.map((item) => (
          <MenuButton
            key={item.text}
            bg={item.page === currentPage ? item.hoverColor : ""}
            renderIndicator={renderIndicator}
            text={item.text}
            icon={item.icon}
            onClick={item.onClick}
            page={item.page}
          />
        ))}
        <Spacer />
      </VStack>
    </Box>
  );
};

export default DesktopSidebar;
