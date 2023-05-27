import React, { useEffect, useState } from "react";
import { Box, Button, Text, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import RamChart from "../../components/RamChart";
import StorageChart from "../../components/StorageChart";
import UserList from "../../components/UserList";
import ChocolateyInfo from "../../components/ChocolateyInfo"; // Novo componente

const Dashboard = () => {
  const [ramData, setRamData] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [chocolateyData, setChocolateyData] = useState({}); // Estado para dados do Chocolatey
  const [computerName, setComputerName] = useState("MAGNATI-10848-F");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [computerName]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const ramResponse = await axios.get(`http://localhost:5018/hardware/getInfo/ram/${computerName}`);
      const storageResponse = await axios.get(`http://localhost:5018/hardware/getInfo/storage/${computerName}`);
      const userResponse = await axios.get(`http://localhost:5018/system/getUsersInfo/${computerName}`);
      const chocolateyResponse = await axios.get(`http://localhost:5018/system/getChocolateyInfo/${computerName}`); // Buscando os dados do Chocolatey

      setRamData([
        { name: "Total", value: ramResponse.data.totalVisibleMemorySize_GB },
        { name: "Livre", value: ramResponse.data.freePhysicalMemory_GB },
      ]);

      setStorageData(storageResponse.data.disks);
      setUserData(userResponse.data.users);
      setChocolateyData(chocolateyResponse.data); // Atualizando o estado com os dados do Chocolatey
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeComputer = () => {
    setComputerName((prevComputerName) =>
      prevComputerName === "RAMO-PC" ? "MAGNATI-10848-F" : "RAMO-PC"
    );
  };

  const boxColor = useColorModeValue("white", "gray.700");

  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)", 
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
            <UserList userData={userData} />
          </Box>
        </GridItem>
        <GridItem> {/* Novo painel */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <ChocolateyInfo chocolateyData={chocolateyData} />
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
