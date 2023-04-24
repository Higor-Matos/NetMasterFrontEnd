import React, { useState } from "react";
import { Input, InputGroup, useColorMode } from "@chakra-ui/react";

interface IPAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  singleCommand?: boolean;
}

const IPAddressInput: React.FC<IPAddressInputProps> = ({
  value,
  onChange,
  singleCommand,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const { colorMode } = useColorMode();

  const handleInputBlur = () => {
    if (singleCommand) {
      onChange(currentValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    if (!singleCommand) {
      onChange(event.target.value);
    }
  };

  return (
    <InputGroup size="md" width="100%">
      <Input
        type="text"
        value={currentValue}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        maxLength={singleCommand ? 1000 : 50}
        id="ip-input"
        placeholder="Endereço IP"
        isInvalid={false}
        variant="filled"
        borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
        bg={colorMode === "dark" ? "gray.700" : "gray.100"}
        _hover={{
          borderColor: colorMode === "dark" ? "gray.400" : "gray.500",
        }}
        _focus={{
          borderColor: colorMode === "dark" ? "gray.400" : "gray.500",
          boxShadow: "0 0 0 1px rgba(66, 153, 225, 0.6)",
        }}
      />
    </InputGroup>
  );
};

export default IPAddressInput;
