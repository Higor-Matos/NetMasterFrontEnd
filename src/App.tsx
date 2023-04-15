import React, { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import ColorModeToggle from "./components/ColorModeToggle";
import ComputerList from "./components/ComputerList";
import ControlButtons from "./components/ControlButtons";

const App = () => {
  const [ip, setIp] = useState("");
  const [computers, setComputers] = useState([]);

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

  return (
    <Container centerContent>
      <Flex
        position="absolute"
        top="0"
        right="0"
        margin="4"
        justify="flex-end"
        alignItems="center"
      >
        <ColorModeToggle />
      </Flex>
      <VStack spacing="4" marginTop="8">
        <Text fontSize="3xl">NetMaster Control</Text>
        <InputGroup>
          <Input
            placeholder="Enter IP address"
            value={ip}
            onChange={(event) => setIp(event.target.value)}
          />
        </InputGroup>
        <ComputerList computers={computers} />
        <ControlButtons onClick={handleButtonClick} />
      </VStack>
    </Container>
  );
};

export default App;
