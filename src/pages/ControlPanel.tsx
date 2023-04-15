import {
  SimpleGrid,
  VStack,
  Box,
  Text,
  Divider,
  useColorModeValue,
  } from "@chakra-ui/react";
  import { SiAdobe } from "react-icons/si";
  import { MdOutlineRestartAlt } from "react-icons/md";
  import { RiShutDownLine } from "react-icons/ri";
  
  import IPAddressInput from "../components/IPAddressInput";
  import SingleCommandIPAddressInput from "../components/SingleCommandIPAddressInput";
  import ControlButtons from "../components/ControlButtons";
  import FileUpload from "../components/FileUpload";
  
  interface ControlPanelProps {
  ip: string;
  onIPChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  computers: string[];
  onClick: (endpoint: string, ip?: string) => void;
  }
  
  const ControlPanel: React.FC<ControlPanelProps> = ({
  ip,
  onIPChange,
  computers,
  onClick,
  }) => {
  const sectionBg = useColorModeValue("gray.200", "gray.700");
  const dividerColor = useColorModeValue("gray.400", "gray.600");
  
  const Section = ({ children, title }) => (
  <Box
     bg={sectionBg}
     borderRadius="lg"
     p={4}
     boxShadow="md"
     display="inline-flex"
     flexDirection="column"
     maxWidth="xs"
     mx="auto"
   >
  <VStack align="start" spacing={2} alignItems="stretch" minHeight="200px">
  <Text fontSize="lg" fontWeight="bold">
  {title}
  </Text>
  <Divider borderColor={dividerColor} />
  {children}
  </VStack>
  </Box>
  );
  
  return (
  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} pb={6}>
  <Section title="Install Program">
  <VStack spacing={4}>
  <IPAddressInput value={ip} onChange={onIPChange} />
  <ControlButtons
  label="Adobe Reader"
  icon={SiAdobe}
  onClick={() => onClick("installAdobeReader", ip)}
  />
  </VStack>
  </Section>
  <Section title="Available Actions in Batch">
  <VStack spacing={4}>
  <ControlButtons
  label="Restart"
  icon={MdOutlineRestartAlt}
  onClick={() => onClick("restartPc", ip)}
  />
  <ControlButtons
  label="Shutdown"
  icon={RiShutDownLine}
  onClick={() => onClick("shutdownPc", ip)}
  />
  </VStack>
  </Section>
  <Section title="Send Single Command">
  <VStack spacing={4}>
  <SingleCommandIPAddressInput value={ip} onChange={onIPChange} />
  <ControlButtons
  label="Chocolatey Version"
  icon={SiAdobe}
  onClick={() => onClick("verifyChocolateyVersion", ip)}
  />
  <ControlButtons
  label="Restart"
  icon={MdOutlineRestartAlt}
  onClick={() => onClick("restartPc", ip)}
  />
  <ControlButtons
  label="Shutdown"
  icon={RiShutDownLine}
  onClick={() => onClick("shutdownPc", ip)}
  />
  </VStack>
  </Section>
  <Section title="File Upload">
  <VStack spacing={4}>
  <FileUpload />
  </VStack>
  </Section>
  </SimpleGrid>
  );
  };
  
  export default ControlPanel;