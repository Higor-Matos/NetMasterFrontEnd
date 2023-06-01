import React, { useEffect, useState } from "react";
import {
  Box,
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
  const [lastUpdated, setLastUpdated] = useState<string>("");

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
      setLastUpdated(new Date().toLocaleString());
    }
  };

  const handleChangeComputer = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setComputerName(event.target.value);
    fetchData();
  };

  const boxColor = useColorModeValue("white", "gray.700");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  return (
    <Box p={5}>
      <Text
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="light"
        color="gray.500"
        mb={4}
      >
        últimas atualizações: {lastUpdated}
      </Text>
      <Select mt={4} value={computerName} onChange={handleChangeComputer}>
        {computerOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      {error && <Text color="red.500">{error}</Text>}
      <Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          mt={6}
        >
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              p={5}
              shadow="md"
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <UserList userData={userData} isLoading={isLoading} />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 1 }}>
            <Box
              p={5}
              shadow="md"
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <ChocolateyInfo chocolateyData={chocolateyData} />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <Box
              p={5}
              shadow="md"
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <OSInfo osData={osData} />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <Box
              p={5}
              shadow="md"
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <RamChart ramData={ramData} />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <Box
              p={5}
              shadow="md"
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <StorageChart storageData={storageData} />
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <Box
              p={5}
              shadow="md"
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <ProgramsInfo programsData={programsData} />
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default Dashboard;
