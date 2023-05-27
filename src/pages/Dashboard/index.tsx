import React, { useEffect, useState } from "react";
import { Box, Button, Text, Grid, GridItem, useColorModeValue, Select, VStack, Heading, Icon } from "@chakra-ui/react";
import axios from "axios";
import RamChart from "../../components/RamChart";
import StorageChart from "../../components/StorageChart";
import UserList from "../../components/UserList";
import ChocolateyInfo from "../../components/ChocolateyInfo"; 
import OSInfo from "../../components/OSInfo"; 
import ProgramsInfo from "../../components/ProgramsInfo"; 

const API_BASE_URL = "http://localhost:5018";

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(getErrorMessage(error));
  }
};

const getErrorMessage = (error) => {
  if (error.response) {
    return "Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.";
  } else if (error.request) {
    return "Não foi possível se conectar ao servidor. Verifique sua conexão com a internet.";
  } else {
    return "Ocorreu um erro desconhecido.";
  }
};

const fetchRamInfo = (computerName) =>
  fetchData(`${API_BASE_URL}/hardware/getInfo/ram/${computerName}`);

const fetchStorageInfo = (computerName) =>
  fetchData(`${API_BASE_URL}/hardware/getInfo/storage/${computerName}`);

const fetchUserInfo = (computerName) =>
  fetchData(`${API_BASE_URL}/system/getUsersInfo/${computerName}`);

const fetchChocolateyInfo = (computerName) =>
  fetchData(`${API_BASE_URL}/system/getChocolateyInfo/${computerName}`);

const fetchOsInfo = (computerName) =>
  fetchData(`${API_BASE_URL}/system/getOsVersionInfo/${computerName}`);

const fetchProgramsInfo = (computerName) =>
  fetchData(`${API_BASE_URL}/system/getInstalledProgramsInfo/${computerName}`);

const Dashboard = () => {
  const [ramData, setRamData] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [chocolateyData, setChocolateyData] = useState({});
  const [osData, setOsData] = useState({});
  const [programsData, setProgramsData] = useState([]);
  const [computerName, setComputerName] = useState("MAGNATI-10848-F");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const computerOptions = ["MAGNATI-10848-F", "RAMO-PC", "ANOTHER-PC"]; // Adicione todos os computadores que você quer na lista

  useEffect(() => {
    fetchData();
  }, [computerName]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const [
        ramResponse,
        storageResponse,
        userResponse,
        chocolateyResponse,
        osResponse,
        programsResponse,
      ] = await Promise.all([
        fetchRamInfo(computerName),
        fetchStorageInfo(computerName),
        fetchUserInfo(computerName),
        fetchChocolateyInfo(computerName),
        fetchOsInfo(computerName),
        fetchProgramsInfo(computerName),
      ]);

      const { totalVisibleMemorySize_GB: total, freePhysicalMemory_GB: free } = ramResponse;
      setRamData([{ name: "Total", value: total }, { name: "Livre", value: free }]);

      setStorageData(storageResponse.disks);
      setUserData(userResponse.users);
      setChocolateyData(chocolateyResponse);
      setOsData(osResponse);
      setProgramsData(programsResponse.programs);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeComputer = (event) => {
    setComputerName(event.target.value);
  };


  const boxColor = useColorModeValue("white", "gray.700");

  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <RamChart ramData={ramData} />
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <StorageChart storageData={storageData} />
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <UserList userData={userData} isLoading={isLoading} />
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <ChocolateyInfo chocolateyData={chocolateyData} />
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <ProgramsInfo programsData={programsData} />
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <OSInfo osData={osData} />
          </Box>
        </GridItem>
      </Grid>
      <Button mt={4} onClick={handleChangeComputer}>
        Mudar Computador
      </Button>
      {error && <Text color="red.500">{error}</Text>}
    </Box>
  );
};

export default Dashboard;
