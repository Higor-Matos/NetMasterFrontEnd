import React from "react";
import { Input, InputGroup } from "@chakra-ui/react";

interface IPAddressInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IPAddressInput: React.FC<IPAddressInputProps> = ({ value, onChange }) => {
  return (
    <InputGroup>
      <Input
        placeholder="Enter IP address"
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default IPAddressInput;
