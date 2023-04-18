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

  const handlePageChange = (page) => setCurrentPage(page);

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
        return <Presentation />;
    }
  };

return (
  <>
    <Topbar />
    <Container maxW="container.xl">
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Flex direction={{ base: "column", md: "row" }} flex="1">
          <Sidebar
            currentPage={currentPage}
            onPresentationClick={() => handlePageChange("presentation")}
            onControlPanelClick={() => handlePageChange("control-panel")}
            onDashboardClick={() => handlePageChange("dashboard")}
          />
          <Main>
            {renderCurrentPage()}
            <Footer />
          </Main>
        </Flex>
      </Box>
    </Container>
  </>
);

};

export default App;
