import React, { useState } from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

interface IPAddressInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IPAddressInput: React.FC<IPAddressInputProps> = ({ value, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newIP = e.target.value;
    if (newIP !== currentValue) {
      onChange(e);
    } else {
      setCurrentValue(value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  return (
    <InputGroup size="md" width="100%">
      <InputLeftAddon children="IP" />
      <Input
        type="text"
        value={currentValue}
        onBlur={handleBlur}
        onChange={handleChange}
        maxLength={50}
      />
    </InputGroup>
  );
};

export default IPAddressInput;
