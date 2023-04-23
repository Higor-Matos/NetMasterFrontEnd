// App.tsx

import React, { useState, useCallback } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Sidebar, Topbar, Footer, PageContent } from "./components";
import { Dashboard, ControlPanel, Presentation } from "./pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState("presentation");
  const [showSidebarTopbar, setShowSidebarTopbar] = useState(false);

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
      <PageContent showSidebarTopbar={showSidebarTopbar}>
        {getPageContent()}
      </PageContent>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
