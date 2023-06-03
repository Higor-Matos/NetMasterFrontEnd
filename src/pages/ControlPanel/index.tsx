import React from "react";
import { SimpleGrid, VStack, Select } from "@chakra-ui/react";
import { SiAdobe, SiChocolatey } from "react-icons/si";
import { MdOutlineRestartAlt } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";

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

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={6}
      pb={6}
      pr={{ base: 4, md: 8 }}
    >
      <Section title="Instalar Programa para usuário selecionado">
        <VStack spacing={4}>
          <Select
            value={selectedComputer}
            onChange={(e) => onComputerChange(e.target.value)}
          >
            {computerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <ControlButtons
            label="Adobe Reader"
            icon={SiAdobe}
            onClick={() => onClick("instalarAdobeReader", selectedComputer)}
          />
        </VStack>
      </Section>
      <Section title="Comando para todos usuários">
        <VStack spacing={4}>
          <ControlButtons
            label="Reiniciar"
            icon={MdOutlineRestartAlt}
            onClick={() => onClick("reiniciarPc", selectedComputer)}
          />
          <ControlButtons
            label="Desligar"
            icon={RiShutDownLine}
            onClick={() => onClick("desligarPc", selectedComputer)}
          />
        </VStack>
      </Section>
      <Section title="Comando para usuário selecionado">
        <VStack spacing={4}>
          <Select
            value={selectedComputer}
            onChange={(e) => onComputerChange(e.target.value)}
          >
            {computerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <ControlButtons
            label="Versão do Chocolatey"
            icon={SiChocolatey}
            onClick={() =>
              onClick("verificarVersaoChocolatey", selectedComputer)
            }
          />
          <ControlButtons
            label="Reiniciar"
            icon={MdOutlineRestartAlt}
            onClick={() => onClick("reiniciarPc", selectedComputer)}
          />
          <ControlButtons
            label="Desligar"
            icon={RiShutDownLine}
            onClick={() => onClick("desligarPc", selectedComputer)}
          />
        </VStack>
      </Section>
      <Section title="Upload para todos usuários">
        <VStack spacing={4}>
          <FileUpload />
        </VStack>
      </Section>
    </SimpleGrid>
  );
};

export default ControlPanel;
