import React from "react";
import {
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { SiAdobe, SiChocolatey } from "react-icons/si";
import { MdOutlineRestartAlt } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";

import {ControlButtons, FileUpload, Section, IPAddressInput } from "../../components";

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
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} pb={6}>
      <Section title="Install Program">
        <VStack spacing={4}>
          <IPAddressInput value={ip} onChange={onIPChange} singleCommand />
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
          <IPAddressInput value={ip} onChange={onIPChange} />
          <ControlButtons
            label="Chocolatey Version"
            icon={SiChocolatey}
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
