import { Button } from "@chakra-ui/react";

const ControlButtons = ({ onClick }) => {
  return (
    <>
      <Button onClick={() => onClick("shutdownPc")}>Shutdown PC</Button>
      <Button onClick={() => onClick("restartPc")}>Restart PC</Button>
      <Button onClick={() => onClick("verifyChocolateyVersion")}>
        Verify Chocolatey Version
      </Button>
      <Button onClick={() => onClick("installAdobeReader")}>
        Install Winrar
      </Button>
      <Button onClick={() => onClick("streaming/toggle")}>
        Toggle Streaming Server
      </Button>
    </>
  );
};

export default ControlButtons;
