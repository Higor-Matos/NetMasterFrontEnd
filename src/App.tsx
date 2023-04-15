import React, { useState, useEffect } from "react";
import { Container, VStack } from "@chakra-ui/react";
import ColorModeToggle from "./components/ColorModeToggle";
import ComputerList from "./components/ComputerList";
import ControlButtons from "./components/ControlButtons";
import IPAddressInput from "./components/IPAddressInput";
import { fetchComputers, handleButtonClick } from "./utils";

const App = () => {
  const [ip, setIp] = useState("");
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const computersList = await fetchComputers();
        setComputers(computersList);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    })();
  }, []);

  const handleClick = async (endpoint: string) => {
    await handleButtonClick(endpoint, ip);
  };

  return (
    <Container centerContent>
      <ColorModeToggle />
      <VStack spacing="4" marginTop="8">
        <IPAddressInput value={ip} onChange={(e) => setIp(e.target.value)} />
        <ComputerList computers={computers} />
        <ControlButtons onClick={handleClick} />
      </VStack>
    </Container>
  );
};

export default App;
