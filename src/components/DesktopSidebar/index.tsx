import React from "react";
import { Box, VStack, Heading, Divider, Spacer, useColorMode } from "@chakra-ui/react";
import { MenuButton } from "../index";

type DesktopSidebarProps = {
  menuItems: any[];
  currentPage: string;
  renderIndicator: (page: string) => JSX.Element;
};

const DesktopSidebar = ({ menuItems, currentPage, renderIndicator }: DesktopSidebarProps) => {
  const { colorMode } = useColorMode();

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
        <Heading size="sm" mb="1" textAlign="center" fontSize="lg">
          <strong style={{fontWeight: 'bold'}}>NET</strong> MASTER
        </Heading>
        <Divider borderColor="gray.300" my={2} />
        {menuItems.map((item) => (
          <MenuButton
            key={item.text}
            text={item.text}
            icon={item.icon}
            onClick={item.onClick}
            page={item.page}
            renderIndicator={renderIndicator}
          />
        ))}
        <Spacer />
      </VStack>
    </Box>
  );
};

export default DesktopSidebar;
