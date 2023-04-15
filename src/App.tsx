import React, { useState, useEffect } from "react";
import { Container, Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Presentation from "./pages/Presentation";
import ControlPanel from "./pages/ControlPanel";
import Dashboard from "./pages/Dashboard";

const App = () => {
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

  const handleButtonClick = async (endpoint) => {
    try {
      const response = await axios.post(
        `http://localhost:5018/powershell/${endpoint}`,
        { ip }
      );
      console.log(response);
      alert(response.data);
    } catch (error) {
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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "presentation":
        return <Presentation />;
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
    <Container maxW="container.xl" centerContent>
      <Flex>
      <Sidebar
          currentPage={currentPage}
          onPresentationClick={() => setCurrentPage("presentation")}
          onControlPanelClick={() => setCurrentPage("control-panel")}
          onDashboardClick={() => setCurrentPage("dashboard")}
        />
        <Box mt="8" w="100%" minH="calc(100vh - 2rem)" pl={{ base: 0, md: 4 }}>
          {renderCurrentPage()}
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
