import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Flex,
  useColorMode,
  extendTheme
} from "@chakra-ui/react";
import axios from "axios";
import{ Dashboard, ControlPanel, Presentation } from "./pages/index";
import { Topbar, Sidebar, Main, Footer } from "./components/index";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "system-ui, sans-serif",
  },
});

const App = () => {
  const { colorMode } = useColorMode();
  const [ip, setIp] = useState("");
  const [computers, setComputers] = useState([]);
  const [currentPage, setCurrentPage] = useState("presentation");
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    fetchComputers();
  }, []);

  const fetchComputers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5018/powershell/listComputersNetwork"
      );
      setComputers(response.data.success.result.computers);
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while fetching the list of computers. Please try again later."
      );
    }
  };

  const handleButtonClick = async (endpoint: any) => {
    try {
      const response = await axios.post(
        `http://localhost:5018/powershell/${endpoint}`,
        { ip }
      );
      console.log(response);
      alert(response.data);
    } catch (error: any) {
      console.error(error);
      let message = "An error occurred. Please try again later.";
      if (error.response) {
        message = `Error ${error.response.status}: ${error.response.statusText}`;
      } else if (error.request) {
        message = "The request was made but no response was received.";
      }
      alert(message);
    }
  };

  const handlePageChange = (newPage: string) => {
    setCurrentPage(newPage);
    if (newPage !== "presentation") {
      setShowNavigation(true);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "control-panel":
        return (
          <ControlPanel
            ip={ip}
            onIPChange={(event) => setIp(event.target.value)}
            computers={computers}
            onClick={handleButtonClick}
          />
        );
      case "dashboard":
        return <Dashboard />;
      default:
        return <Presentation handlePageChange={handlePageChange} />;
    }
  };

return (
  <>
    {showNavigation && <Topbar />}
    <Container maxW="container.xl">
      <Flex
        direction={{ base: "column", md: "row" }}
        paddingBottom={{ base: "16", md: "64px" }}
      >
        {showNavigation && (
          <Sidebar
            currentPage={currentPage}
            onPresentationClick={() => handlePageChange("presentation")}
            onControlPanelClick={() => handlePageChange("control-panel")}
            onDashboardClick={() => handlePageChange("dashboard")}
          />
        )}
        <Main>{renderCurrentPage()}</Main>
      </Flex>
    </Container>
    <Footer />
  </>
);
};

export default App;
