import React from "react";
import {
  Box,
  VStack,
  Heading,
  Button,
  Spacer,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Sidebar = ({
  onPresentationClick,
  onControlPanelClick,
  onDashboardClick,
  currentPage,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const renderIndicator = (page) =>
    currentPage === page ? (
      <Icon
        as={ChevronRightIcon}
        color="#7551FF"
        ml={2}
        boxSize={4}
        verticalAlign="middle"
      />
    ) : null;

  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      width="220px"
      height="100%"
      bg={colorMode === "dark" ? "gray.800" : "white"}
      padding="4"
      boxShadow="md"
      zIndex="1"
    >
      <VStack spacing="8" alignItems="center">
        <Heading size="lg" mb="8">
          NetMaster
        </Heading>
        <Button
          onClick={onPresentationClick}
          variant="ghost"
          width="100%"
          textAlign="left"
          justifyContent="space-between"
        >
          Presentation
          {renderIndicator("presentation")}
        </Button>
        <Button
          onClick={onControlPanelClick}
          variant="ghost"
          width="100%"
          textAlign="left"
          justifyContent="space-between"
        >
          Control Panel
          {renderIndicator("control-panel")}
        </Button>
        <Button
          onClick={onDashboardClick}
          variant="ghost"
          width="100%"
          textAlign="left"
          justifyContent="space-between"
        >
          Dashboard
          {renderIndicator("dashboard")}
        </Button>
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
  );
};

export default Sidebar;
