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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineHome, AiFillLayout } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { IconBaseProps } from "react-icons/lib";


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
  
const renderIndicator = (page: string): JSX.Element | null =>
  currentPage === page ? (
    <Box
      w="4px"
      h="20px"
      bg="purple.500"
      ml={2}
      borderRadius="25px"
      transform="rotate(0deg)"
    />
  ) : null;


const renderButton = (text: string | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined, icon: { (props: IconBaseProps): JSX.Element; (props: IconBaseProps): JSX.Element; (props: IconBaseProps): JSX.Element; (props: IconBaseProps): JSX.Element; (props: IconBaseProps): JSX.Element; (props: IconBaseProps): JSX.Element; }, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined, page: string) => (
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
    borderRadius="md"
    mb={2} // Adiciona um espaçamento uniforme entre os cards
  >
    <Text flex="1">{text}</Text>
    {renderIndicator(page)}
  </Button>
);

  const renderMenuButton = () => (
    !isLargerThan768 ? (
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={toggleMenu}
        position="fixed"
        zIndex="2"
        left="8"
        top="8"
        size="sm"
        borderRadius="md"
      />
    ) : null
  );
  

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
          <VStack spacing="5" alignItems="stretch">
            <Heading size="sm" mb="1" textAlign="center" fontSize="lg">
              NET MASTER
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
          </VStack>
        </Box>
      ) : (
        <>
          <Drawer isOpen={isMenuOpen} onClose={toggleMenu} placement="left" size="xs">
            <DrawerOverlay />
            <DrawerContent bg={colorMode === "dark" ? "#111C44" : "white"} borderRadius="md">
              <DrawerCloseButton />
              <VStack spacing="4" alignItems="stretch" padding="4">
                <Heading size="lg" mb="2" textAlign="center" fontSize="md">
                  NETMASTER
                </Heading>
                <Divider borderColor="gray.300" my={2} />
                {renderButton(
                  "Presentation",
                  AiOutlineHome, onPresentationClick,
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
                  </VStack>
                  </DrawerContent>
                  </Drawer>
                  </>
                  )}
                  </>
                  );
                  };
                  
                  export default Sidebar;
