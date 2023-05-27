import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import {
  RamChart,
  StorageChart,
} from "../../components";


const Dashboard: React.FC = () => {
  const [ramData, setRamData] = useState<{ name: string; value: number }[]>([]);
  const [storageData, setStorageData] = useState<{
    DeviceID: string;
    Size_GB: number;
    FreeSpace_GB: number;
  }[]>([]);
  const [computerName, setComputerName] = useState("MAGNATI-10848-F");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [computerName]);

  const fetchData = async () => {
    try {
      const ramResponse = await axios.get<{ totalVisibleMemorySize_GB: number; freePhysicalMemory_GB: number }>(
        `http://localhost:5018/hardware/getInfo/ram/${computerName}`
      );
      const storageResponse = await axios.get<{
        disks: {
          DeviceID: string;
          Size_GB: number;
          FreeSpace_GB: number;
        }[];
      }>(
        `http://localhost:5018/hardware/getInfo/storage/${computerName}`
      );

      setRamData([
        { name: "Total", value: ramResponse.data.totalVisibleMemorySize_GB },
        { name: "Livre", value: ramResponse.data.freePhysicalMemory_GB },
      ]);

      setStorageData(storageResponse.data.disks);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.");
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
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <Text fontSize="xl" mb={5}>
              RAM
            </Text>
            {isLoading ? (
              <Spinner size="md" color="blue.500" />
            ) : ramData.length > 0 ? (
              <RamChart ramData={ramData} />
            ) : (
              <p>Carregando dados de RAM...</p>
            )}
          </Box>
        </GridItem>
        <GridItem>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={boxColor}>
            <Text fontSize="xl" mb={5}>
              Armazenamento
            </Text>
            {isLoading ? (
              <Spinner size="md" color="blue.500" />
            ) : storageData.length > 0 ? (
              <StorageChart storageData={storageData} />
            ) : (
              <p>Carregando dados de Armazenamento...</p>
            )}
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
