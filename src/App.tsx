import React, { useState, useCallback } from "react";
import { ChakraProvider, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { Sidebar, Topbar, Footer, PageContent } from "./components";
import { Dashboard, ControlPanel, Presentation } from "./pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState("presentation");
  const [showSidebarTopbar, setShowSidebarTopbar] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handlePageChange = useCallback((page: React.SetStateAction<string>) => {
    setCurrentPage(page);
  }, []);

  const getPageContent = () => {
    switch (currentPage) {
      case "presentation":
        return (
          <Presentation
            handlePageChange={handlePageChange}
            setShowSidebarTopbar={setShowSidebarTopbar}
          />
        );
      case "control-panel":
        return (
          <ControlPanel
            ip=""
            onIPChange={() => {}}
            computer=""
            onClick={() => {}}
          />
        );
      case "dashboard":
        return <Dashboard />;
      default:
        return (
          <Presentation
            handlePageChange={handlePageChange}
            setShowSidebarTopbar={setShowSidebarTopbar}
          />
        );
    }
  };

  return (
    <ChakraProvider>
      {showSidebarTopbar && (
        <Sidebar
          onPresentationClick={() => handlePageChange("presentation")}
          onControlPanelClick={() => handlePageChange("control-panel")}
          onDashboardClick={() => handlePageChange("dashboard")}
          currentPage={currentPage}
        />
      )}
      <Topbar
        isVisible={showSidebarTopbar}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        isLargerThan768={isLargerThan768}
      />
      <PageContent showSidebarTopbar={showSidebarTopbar}>
        {getPageContent()}
      </PageContent>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
