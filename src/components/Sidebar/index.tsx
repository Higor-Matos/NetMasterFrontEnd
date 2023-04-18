import React, { useState } from "react";
import {
  VStack,
  Heading,
  Spacer,
  Divider
} from "@chakra-ui/react";
import { AiOutlineHome, AiFillLayout } from "react-icons/ai";
import { RiBarChartBoxLine } from "react-icons/ri";
import {
  MenuButton,
  Indicator,
  MobileMenuButton,
  SidebarDrawer,
  DesktopSidebar
} from "../index";

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
  currentPage
}: SidebarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderIndicator = (page: string) => (
    <Indicator isVisible={currentPage === page} />
  );

  const menuItems = [
    {
      text: "Presentation",
      icon: AiOutlineHome,
      onClick: onPresentationClick,
      page: "presentation"
    },
    {
      text: "Control Panel",
      icon: AiFillLayout,
      onClick: onControlPanelClick,
      page: "control-panel"
    },
    {
      text: "Dashboard",
      icon: RiBarChartBoxLine,
      onClick: onDashboardClick,
      page: "dashboard"
    }
  ];

  return (
    <>
      <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <DesktopSidebar
        menuItems={menuItems}
        currentPage={currentPage}
        renderIndicator={renderIndicator}
      />
      <SidebarDrawer
        menuItems={menuItems}
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        currentPage={currentPage}
        renderIndicator={renderIndicator}
      />
    </>
  );
};

export default Sidebar;
