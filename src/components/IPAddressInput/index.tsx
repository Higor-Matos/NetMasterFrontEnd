import React, { useState } from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

interface IPAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  singleCommand?: boolean;
}

const IPAddressInput: React.FC<IPAddressInputProps> = ({ value, onChange, singleCommand }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleBlur = () => {
    if (singleCommand) {
      onChange(currentValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    if (!singleCommand) {
      onChange(event.target.value);
    }
  };

  return (
    <InputGroup size="md" width="100%">
      <InputLeftAddon children="IP" />
      <Input
        type="text"
        value={currentValue}
        onBlur={handleBlur}
        onChange={handleChange}
        maxLength={singleCommand ? 1000 : 50}
      />
    </InputGroup>
  );
};

export default IPAddressInput;
