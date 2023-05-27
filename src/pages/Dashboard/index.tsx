import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Select,
  VStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import RamChart from "../../components/RamChart";
import StorageChart from "../../components/StorageChart";
import UserList from "../../components/UserList";
import ChocolateyInfo from "../../components/ChocolateyInfo";
import OSInfo from "../../components/OSInfo";
import ProgramsInfo from "../../components/ProgramsInfo";

const API_BASE_URL = "http://localhost:5018";

const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    throw new Error(getErrorMessage(error));
  }
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "Ocorreu um erro desconhecido.";
  }
}

const fetchRamInfo = (computerName: string) =>
  fetchData(`${API_BASE_URL}/hardware/getInfo/ram/${computerName}`);

const fetchStorageInfo = (computerName: string) =>
  fetchData(`${API_BASE_URL}/hardware/getInfo/storage/${computerName}`);

const fetchUserInfo = (computerName: string) =>
  fetchData(`${API_BASE_URL}/system/getUsersInfo/${computerName}`);

const fetchChocolateyInfo = (computerName: string) =>
  fetchData(`${API_BASE_URL}/system/getChocolateyInfo/${computerName}`);

const fetchOsInfo = (computerName: string) =>
  fetchData(`${API_BASE_URL}/system/getOsVersionInfo/${computerName}`);

const fetchProgramsInfo = (computerName: string) =>
  fetchData(`${API_BASE_URL}/system/getInstalledProgramsInfo/${computerName}`);

const Dashboard = () => {
  const [ramData, setRamData] = useState<{ name: string; value: number }[]>([]);
  const [storageData, setStorageData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [chocolateyData, setChocolateyData] = useState<{
    chocolateyVersion: string;
  }>({
    chocolateyVersion: "",
  });
  const [osData, setOsData] = useState({});
  const [programsData, setProgramsData] = useState([]);
  const [computerName, setComputerName] = useState("MAGNATI-10848-F");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>("");
  const computerOptions = ["MAGNATI-10848-F", "RAMO-PC", "ANOTHER-PC"];

  useEffect(() => {
    const fetchDataAsync = async (computerName: string) => {
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
          fetchRamInfo(computerName).catch((error) => {
            throw new Error(getErrorMessage(error));
          }),
          fetchStorageInfo(computerName).catch((error) => {
            throw new Error(getErrorMessage(error));
          }),
          fetchUserInfo(computerName).catch((error) => {
            throw new Error(getErrorMessage(error));
          }),
          fetchChocolateyInfo(computerName).catch((error) => {
            throw new Error(getErrorMessage(error));
          }),
          fetchOsInfo(computerName).catch((error) => {
            throw new Error(getErrorMessage(error));
          }),
          fetchProgramsInfo(computerName).catch((error) => {
            throw new Error(getErrorMessage(error));
          }),
        ]);

        const {
          totalVisibleMemorySize_GB: total,
          freePhysicalMemory_GB: free,
        } = ramResponse;
        setRamData([
          { name: "Total", value: total },
          { name: "Livre", value: free },
        ]);

        setStorageData(storageResponse.disks);
        setUserData(userResponse.users);
        setChocolateyData(chocolateyResponse);
        setOsData(osResponse);
        setProgramsData(programsResponse.programs);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync(computerName);
  }, [computerName]);

  const handleChangeComputer = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setComputerName(event.target.value);
  };

  const boxColor = useColorModeValue("white", "gray.700");

  return (
    <Box p={5}>
      <Select
        placeholder="Selecionar computador"
        onChange={handleChangeComputer}
      >
        {computerOptions.map((computer) => (
          <option key={computer} value={computer}>
            {computer}
          </option>
        ))}
      </Select>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt={6}
      >
        <GridItem>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={boxColor}
          >
            <VStack spacing={4} align="start">
              <Heading size="md">
                <Icon boxSize={6} /> RAM
              </Heading>
              <RamChart ramData={ramData} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={boxColor}
          >
            <VStack spacing={4} align="start">
              <Heading size="md">
                <Icon boxSize={6} /> Armazenamento
              </Heading>
              <StorageChart storageData={storageData} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={boxColor}
          >
            <VStack spacing={4} align="start">
              <Heading size="md">
                <Icon boxSize={6} /> Usuários
              </Heading>
              <UserList userData={userData} isLoading={isLoading} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={boxColor}
          >
            <VStack spacing={4} align="start">
              <Heading size="md">
                <Icon boxSize={6} /> Chocolatey
              </Heading>
              <ChocolateyInfo chocolateyData={chocolateyData} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={boxColor}
          >
            <VStack spacing={4} align="start">
              <Heading size="md">
                <Icon boxSize={6} /> Programas
              </Heading>
              <ProgramsInfo programsData={programsData} />
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={boxColor}
          >
            <VStack spacing={4} align="start">
              <Heading size="md">
                <Icon boxSize={6} /> Informações do Sistema Operacional
              </Heading>
              <OSInfo osData={osData} />
            </VStack>
          </Box>
        </GridItem>
      </Grid>
      {error ? (
        <Text color="red.500" mt={4}>
          {typeof error === "string" ? error : "Ocorreu um erro desconhecido."}
        </Text>
      ) : null}
    </Box>
  );
};

export default Dashboard;
