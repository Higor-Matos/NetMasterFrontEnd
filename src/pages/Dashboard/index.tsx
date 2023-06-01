import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Select,
  Center,
} from "@chakra-ui/react";
import {
  RamChart,
  StorageChart,
  UserList,
  ChocolateyInfo,
  OSInfo,
  ProgramsInfo,
} from "../../components";
import * as HardwareService from "../../services/hardwareService";
import * as SystemService from "../../services/systemService";
import { AxiosError } from "axios";

interface ChocolateyData {
  chocolateyVersion: string;
}

const Dashboard = () => {
  const [ramData, setRamData] = useState<{ name: string; value: number }[]>([]);
  const [storageData, setStorageData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [chocolateyData, setChocolateyData] = useState<ChocolateyData>({
    chocolateyVersion: "",
  });
  const [osData, setOsData] = useState({});
  const [programsData, setProgramsData] = useState([]);
  const [computerName, setComputerName] = useState("MAGNATI-10848-F");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const computerOptions = ["MAGNATI-10848-F", "RAMO-PC", "ANOTHER-PC"];

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
        HardwareService.fetchRamInfo(computerName),
        HardwareService.fetchStorageInfo(computerName),
        SystemService.fetchUserInfo(computerName),
        SystemService.fetchChocolateyInfo(computerName),
        SystemService.fetchOsInfo(computerName),
        SystemService.fetchProgramsInfo(computerName),
      ]);

      const { totalVisibleMemorySize_GB: total, freePhysicalMemory_GB: free } =
        ramResponse;
      setRamData([
        { name: "Total", value: total },
        { name: "Livre", value: free },
      ]);

      setStorageData(storageResponse.disks);
      setUserData(userResponse.users);
      setChocolateyData(chocolateyResponse);
      setOsData(osResponse);
      setProgramsData(programsResponse.programs);
    } catch (error: unknown) {
      setError((error as AxiosError).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeComputer = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setComputerName(event.target.value);
  };

  const boxColor = useColorModeValue("white", "gray.700");

  return (
    <Box p={5}>
      <Select mt={4} value={computerName} onChange={handleChangeComputer}>
        {computerOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Button mt={4} onClick={fetchData}>
        Mudar Computador
      </Button>
      {error && <Text color="red.500">{error}</Text>}
      <Center>
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
              <RamChart ramData={ramData} />
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
              <StorageChart storageData={storageData} />
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
              <UserList userData={userData} isLoading={isLoading} />
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
              <ChocolateyInfo chocolateyData={chocolateyData} />
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
              <ProgramsInfo programsData={programsData} />
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
              <OSInfo osData={osData} />
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default Dashboard;
