import React, { useState } from "react";
import { Input, InputGroup } from "@chakra-ui/react";

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
        placeholder="Input IP"
        isInvalid={false} 
      />
    </InputGroup>
  );
};

export default IPAddressInput;
