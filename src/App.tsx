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
        colorMode={"light"}
        toggleColorMode={function (): void {
          throw new Error("Function not implemented.");
        }}
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
