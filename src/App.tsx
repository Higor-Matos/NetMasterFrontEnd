import React, { useState, useCallback, useEffect } from "react";
import { ChakraProvider, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { Sidebar, Topbar, Footer, PageContent } from "./components";
import { ControlPanel, Dashboard, Presentation } from "./pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState<string>("presentation");
  const [showSidebarTopbar, setShowSidebarTopbar] = useState<boolean>(false);
  const { colorMode, setColorMode } = useColorMode();

  const [isDarkMode] = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const localStorageColorMode = localStorage.getItem("colorMode");
    if (localStorageColorMode) {
      setColorMode(localStorageColorMode);
    } else {
      setColorMode(isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode, setColorMode]);

  useEffect(() => {
    localStorage.setItem("colorMode", colorMode);
  }, [colorMode]);

  const handlePageChange = useCallback((page: string) => {
    setCurrentPage(page);
  }, []);

  const getPageContent = useCallback(() => {
    switch (currentPage) {
      case "control-panel":
        return <ControlPanel onComputerChange={() => {}} />;
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
  }, [currentPage, handlePageChange]);

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
        toggleColorMode={() =>
          setColorMode(colorMode === "light" ? "dark" : "light")
        }
        isLargerThan768={false}
      />
      <PageContent showSidebarTopbar={showSidebarTopbar}>
        {getPageContent()}
      </PageContent>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
