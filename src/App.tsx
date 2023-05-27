import React, { useState, useCallback } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Sidebar,
  Topbar,
  Footer,
  PageContent,
} from "./components";
import {
  ControlPanel,
  Dashboard,
  Presentation,
} from "./pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState("presentation");
  const [showSidebarTopbar, setShowSidebarTopbar] = useState(false);

  const handlePageChange = useCallback((page: React.SetStateAction<string>) => {
    setCurrentPage(page);
  }, []);

  const getPageContent = useCallback(() => {
    switch (currentPage) {
      case "control-panel":
        return <ControlPanel ip={""} onIPChange={function (value: string): void {
          throw new Error("Function not implemented.");
        } } computer={""} onClick={function (endpoint: string, ip?: string | undefined): void {
          throw new Error("Function not implemented.");
        } } />;
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
        colorMode="light"
        toggleColorMode={() => {
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
