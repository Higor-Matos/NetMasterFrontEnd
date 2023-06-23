import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Select,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
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

// Framer Motion Box
const MotionBox = motion(Box);

interface ChocolateyData {
  chocolateyVersion: string;
}

interface OSData {
  caption: string;
  version: string;
}

interface RamChartData {
  name: string;
  value: number;
  isLoading: boolean;
}

const Dashboard = () => {
  const [ramData, setRamData] = useState<RamChartData[]>([]);
  const [storageData, setStorageData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [chocolateyData, setChocolateyData] = useState<ChocolateyData>({
    chocolateyVersion: "",
  });
  const [osData, setOsData] = useState<OSData>({ caption: "", version: "" });
  const [programsData, setProgramsData] = useState([]);
  const [computerName, setComputerName] = useState("RAMO-PC");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const computerOptions = {
    "RAMO-PC": "Computador 1",
    "ERICK-PC": "Computador 2",
    NOTEGUSTAVO: "Computador 3",
  };

  useEffect(() => {
    fetchData();
  }, [computerName]);

  const fetchData = async () => {
    setIsLoading(true);
    setError("");

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
        { name: "Total", value: total, isLoading: isLoading },
        { name: "Livre", value: free, isLoading: isLoading },
      ]);

      if (storageResponse.disks) {
        setStorageData(storageResponse.disks);
      } else {
        setStorageData([]);
      }

      setUserData(userResponse.users);
      setChocolateyData(chocolateyResponse);
      setOsData(osResponse);
      setProgramsData(programsResponse.programs);
    } catch (error) {
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
  };

  useEffect(() => {
    fetchData();
  }, [computerName]);

  const boxColor = useColorModeValue("white", "gray.700");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  let content = null;
  if (isLoading) {
    content = (
      <Center mt={6}>
        <Spinner size="xl" />
      </Center>
    );
  } else if (error) {
    content = <Text color="red.500">{error}</Text>;
  } else {
    content = (
      <Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          templateRows={{
            base: "repeat(6, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
          mt={6}
        >
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 1 }} rowSpan={3}>
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              p={5}
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <UserList userData={userData} isLoading={isLoading} />
            </MotionBox>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 1 }} rowSpan={3}>
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              p={5}
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <ChocolateyInfo chocolateyData={chocolateyData} />
            </MotionBox>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 2 }} rowSpan={3}>
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              p={5}
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <OSInfo osData={osData} isLoading={isLoading} />
            </MotionBox>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 2 }} rowSpan={2}>
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              p={5}
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <RamChart ramData={ramData} isLoading={isLoading} />
            </MotionBox>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 2 }} rowSpan={2}>
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              p={5}
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <StorageChart storageData={storageData} />
            </MotionBox>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 2 }} rowSpan={2}>
            <MotionBox
              initial="hidden"
              animate="visible"
              variants={boxVariants}
              p={5}
              borderRadius="lg"
              bg={boxColor}
              boxShadow={`0 4px 6px ${boxShadowColor}`}
            >
              <ProgramsInfo programsData={programsData} />
            </MotionBox>
          </GridItem>
        </Grid>
      </Center>
    );
  }

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
      <Select
        mt={4}
        value={computerName}
        onChange={handleChangeComputer}
        boxShadow={`0 4px 6px ${boxShadowColor}`}
      >
        {Object.entries(computerOptions).map(([realName, maskedName]) => (
          <option key={realName} value={realName}>
            {maskedName}
          </option>
        ))}
      </Select>
      {content}
    </Box>
  );
};

export default Dashboard;
