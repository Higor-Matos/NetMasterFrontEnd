import React, { useState, useCallback } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Sidebar, Topbar, Footer } from "./components";
import { Dashboard, ControlPanel, Presentation } from "./pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState("presentation");
  const [showSidebarTopbar, setShowSidebarTopbar] = useState(false);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleShowSidebarTopbar = useCallback((show) => {
    setShowSidebarTopbar(show);
  }, []);

  const getPageContent = () => {
    switch (currentPage) {
      case "presentation":
        return (
          <Presentation
            handlePageChange={handlePageChange}
            setShowSidebarTopbar={setShowSidebarTopbar}
            showSidebarTopbar={showSidebarTopbar}
          />
        );
      case "control-panel":
        return <ControlPanel />;
      case "dashboard":
        return <Dashboard />;
      default:
        return (
          <Presentation
            handlePageChange={handlePageChange}
            setShowSidebarTopbar={setShowSidebarTopbar}
            showSidebarTopbar={showSidebarTopbar}
          />
        );
    }
  };

  const PageContent = ({ children }) => {
    return (
      <Box
        marginLeft={{ base: 0, md: showSidebarTopbar ? "250px" : "0" }}
        paddingTop="5rem"
        minHeight="100vh"
        paddingRight={{ base: "1rem", md: "0" }}
        paddingLeft={{ base: "1rem", md: "0" }}
        transition="margin-left 0.3s ease-in"
      >
        {children}
      </Box>
    );
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
      <Topbar isVisible={showSidebarTopbar} />
      <PageContent>{getPageContent()}</PageContent>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
