import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  VStack,
  Select,
  Box,
  Fade,
  ScaleFade,
  SlideFade,
  useColorModeValue,
  CircularProgress,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import {
  SiAdobe,
  SiChocolatey,
  SiFirefox,
  SiGooglechrome,
} from "react-icons/si";
import { MdOutlineRestartAlt } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";
import { BsFileEarmarkText, BsFillPlayFill } from "react-icons/bs";
import { IoIosFolderOpen } from "react-icons/io";
import { ControlButtons, FileUpload, Section } from "../../components";
import { ApiService } from "../../services/ApiService";

interface ControlPanelProps {
  onComputerChange: (value: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onComputerChange }) => {
  const [selectedComputer, setSelectedComputer] = useState<string>("");
  const [selectedComputer2, setSelectedComputer2] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<string>("");
  const computerOptions: Record<string, string> = {
    "RAMO-PC": "Computador 1",
    "ERICK-PC": "Computador 2",
    "MAGNATI-10848-F": "Computador 3",
  };
  const programOptions = [
    {
      label: "Adobe Reader",
      icon: SiAdobe,
      software: "AdobeReader",
    },
    {
      label: "Firefox",
      icon: SiFirefox,
      software: "Firefox",
    },
    {
      label: "Google Chrome",
      icon: SiGooglechrome,
      software: "GoogleChrome",
    },
    {
      label: "Office 365",
      icon: BsFileEarmarkText,
      software: "Office365",
    },
    {
      label: "VLC",
      icon: BsFillPlayFill,
      software: "Vlc",
    },
    {
      label: "WinRAR",
      icon: IoIosFolderOpen,
      software: "Winrar",
    },
  ];
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  useEffect(() => {
    console.log(selectedComputer);
  }, [selectedComputer]);

  const handleApiCall = async (
    endpoint: string,
    computer: string,
    software?: string
  ) => {
    setIsLoading(true);
    setShowLoadingMessage(false);
    setError("");
    setApiResponse("");

    const loadingTimeout = setTimeout(() => {
      setShowLoadingMessage(true);
    }, 15000);

    try {
      let response;
      switch (endpoint) {
        case "installSoftware":
          response = await ApiService.installSoftware(computer, software);
          break;
        case "shutdownPc":
          response = await ApiService.shutdownPc(computer);
          break;
        case "restartPc":
          response = await ApiService.restartPc(computer);
          break;
        default:
          console.error("Endpoint não reconhecido!");

          return;
      }
      console.log(response);
      setApiResponse(response.data.message);
      setIsLoading(false);
      clearTimeout(loadingTimeout);
    } catch (error: any) {
      console.error(error);
      setIsLoading(false);
      clearTimeout(loadingTimeout);
      setError("Ocorreu um erro ao executar a operação.");
      setApiResponse(error.response?.data.message || "");
    }
  };

  const handleBatchAction = async (endpoint: string) => {
    const requests = Object.keys(computerOptions).map((computer) =>
      handleApiCall(endpoint, computer)
    );
    const results = await Promise.allSettled(requests);
    results.forEach((result, i) => {
      if (result.status === "rejected") {
        console.error(
          `A ação em lote para o computador ${
            computerOptions[Object.keys(computerOptions)[i]]
          } falhou.`
        );
      }
    });
  };

  const handleComputerChange = (value: string) => {
    setSelectedComputer(value);
    onComputerChange(value);
  };

  const renderComputerOptions = () => {
    return Object.entries(computerOptions).map(([realName, maskedName]) => (
      <option key={realName} value={realName}>
        {maskedName}
      </option>
    ));
  };

  const renderProgramOptions = () => {
    return programOptions.map((program, index) => (
      <SlideFade in offsetY="20px" key={program.label}>
        {index !== 0 && <Box h="10px" />}
        <Box w="100%">
          <ControlButtons
            label={program.label}
            icon={program.icon}
            onClick={() =>
              handleApiCall(
                "installSoftware",
                selectedComputer || Object.keys(computerOptions)[0],
                program.software
              )
            }
          />
        </Box>
      </SlideFade>
    ));
  };

  return (
    <Fade in>
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <CircularProgress isIndeterminate color="green.300" />
          {showLoadingMessage && (
            <Box mt={2} fontWeight="bold">
              Comandos que demandam grande processamento podem demorar até 5
              minutos.
            </Box>
          )}
        </Box>
      ) : (
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={6}
          pb={6}
          pr={{ base: 4, md: 8 }}
          w="100%"
          h="100%"
        >
          <Section title="Instalar Programa">
            <VStack spacing={6} w="100%" h="100%" align="stretch">
              <ScaleFade in>
                <Box w="100%">
                  <Select
                    size="lg"
                    value={selectedComputer}
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      handleComputerChange(selectedValue);
                    }}
                    boxShadow={`0 4px 6px ${boxShadowColor}`}
                  >
                    {renderComputerOptions()}
                  </Select>
                </Box>
              </ScaleFade>
              <Box h="200px" overflowY="scroll" w="100%">
                {renderProgramOptions()}
              </Box>
            </VStack>
          </Section>
          <Section title="Ações Disponíveis em Lote">
            <VStack spacing={6} w="100%" h="100%" align="stretch">
              <SlideFade in offsetY="20px">
                <Box w="100%">
                  <Control
                    Buttons
                    label="Reiniciar"
                    icon={MdOutlineRestartAlt}
                    onClick={() => handleBatchAction("restartPc")}
                  />
                </Box>
              </SlideFade>
              <SlideFade in offsetY="20px">
                <Box w="100%">
                  <ControlButtons
                    label="Desligar"
                    icon={RiShutDownLine}
                    onClick={() => handleBatchAction("shutdownPc")}
                  />
                </Box>
              </SlideFade>
            </VStack>
          </Section>
          <Section title="Enviar Comando Individual">
            <VStack spacing={6} w="100%" h="100%" align="stretch">
              <SlideFade in offsetY="20px">
                <Box w="100%">
                  <Select
                    size="lg"
                    value={selectedComputer2}
                    onChange={(e) => handleComputerChange(e.target.value || "")}
                    boxShadow={`0 4px 6px ${boxShadowColor}`}
                  >
                    {renderComputerOptions()}
                  </Select>
                </Box>
              </SlideFade>
              <SlideFade in offsetY="20px">
                <Box w="100%">
                  <ControlButtons
                    label="Reiniciar"
                    icon={MdOutlineRestartAlt}
                    onClick={() =>
                      handleApiCall(
                        "restartPc",
                        selectedComputer || Object.keys(computerOptions)[0]
                      )
                    }
                  />
                </Box>
              </SlideFade>
              <SlideFade in offsetY="20px">
                <Box w="100%">
                  <ControlButtons
                    label="Desligar"
                    icon={RiShutDownLine}
                    onClick={() =>
                      handleApiCall(
                        "shutdownPc",
                        selectedComputer || Object.keys(computerOptions)[0]
                      )
                    }
                  />
                </Box>
              </SlideFade>
            </VStack>
          </Section>
          <Section title="Upload de Arquivo">
            <VStack spacing={6} w="100%" h="100%" align="stretch">
              <SlideFade in offsetY="20px">
                <Box w="100%" flex="1">
                  <FileUpload />
                </Box>
              </SlideFade>
            </VStack>
          </Section>
          {apiResponse && (
            <Popover>
              <PopoverTrigger>
                <Box visibility="hidden" />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Text>{apiResponse}</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </SimpleGrid>
      )}
    </Fade>
  );
};

export default ControlPanel;
