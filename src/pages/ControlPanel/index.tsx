import React from "react";
import {
  SimpleGrid,
  VStack,
  Select,
  Box,
  Fade,
  ScaleFade,
  SlideFade,
  useColorModeValue,
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

interface ControlPanelProps {
  selectedComputer: string;
  onComputerChange: (value: string) => void;
  onClick: (endpoint: string, computer?: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  selectedComputer,
  onComputerChange,
  onClick,
}) => {
  const computerOptions = ["RAMO-PC", "HIGOR-PC", "OUTRO-PC"];
  const programOptions = [
    { label: "Adobe Reader", icon: SiAdobe, endpoint: "instalarAdobeReader" },
    { label: "Firefox", icon: SiFirefox, endpoint: "instalarFirefox" },
    {
      label: "Google Chrome",
      icon: SiGooglechrome,
      endpoint: "instalarGoogleChrome",
    },
    {
      label: "Office 365",
      icon: BsFileEarmarkText,
      endpoint: "instalarOffice365",
    },
    { label: "VLC", icon: BsFillPlayFill, endpoint: "instalarVLC" },
    { label: "WinRAR", icon: IoIosFolderOpen, endpoint: "instalarWinRAR" },
  ];

  const boxColor = useColorModeValue("white", "gray.700");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  return (
    <Fade in>
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
                  onChange={(e) => onComputerChange(e.target.value)}
                  boxShadow={`0 4px 6px ${boxShadowColor}`}
                >
                  {computerOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Box>
            </ScaleFade>
            <Box h="200px" overflowY="scroll" w="100%">
              {programOptions.map((program, index) => (
                <SlideFade in offsetY="20px" key={program.label}>
                  <React.Fragment>
                    {index !== 0 && <Box h="10px" />}
                    <Box w="100%">
                      <ControlButtons
                        label={program.label}
                        icon={program.icon}
                        onClick={() =>
                          onClick(program.endpoint, selectedComputer)
                        }
                      />
                    </Box>
                  </React.Fragment>
                </SlideFade>
              ))}
            </Box>
          </VStack>
        </Section>
        <Section title="Ações Disponíveis em Lote">
          <VStack spacing={6} w="100%" h="100%" align="stretch">
            <SlideFade in offsetY="20px">
              <Box w="100%">
                <ControlButtons
                  label="Reiniciar"
                  icon={MdOutlineRestartAlt}
                  onClick={() => onClick("reiniciarPc", selectedComputer)}
                />
              </Box>
            </SlideFade>
            <SlideFade in offsetY="20px">
              <Box w="100%">
                <ControlButtons
                  label="Desligar"
                  icon={RiShutDownLine}
                  onClick={() => onClick("desligarPc", selectedComputer)}
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
                  value={selectedComputer}
                  onChange={(e) => onComputerChange(e.target.value)}
                  boxShadow={`0 4px 6px ${boxShadowColor}`}
                >
                  {computerOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Box>
            </SlideFade>
            <SlideFade in offsetY="20px">
              <Box w="100%">
                <ControlButtons
                  label="Versão do Chocolatey"
                  icon={SiChocolatey}
                  onClick={() =>
                    onClick("verificarVersaoChocolatey", selectedComputer)
                  }
                />
              </Box>
            </SlideFade>
            <SlideFade in offsetY="20px">
              <Box w="100%">
                <ControlButtons
                  label="Reiniciar"
                  icon={MdOutlineRestartAlt}
                  onClick={() => onClick("reiniciarPc", selectedComputer)}
                />
              </Box>
            </SlideFade>
            <SlideFade in offsetY="20px">
              <Box w="100%">
                <ControlButtons
                  label="Desligar"
                  icon={RiShutDownLine}
                  onClick={() => onClick("desligarPc", selectedComputer)}
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
      </SimpleGrid>
    </Fade>
  );
};

export default ControlPanel;
