// SingleCommandIPAddressInput.tsx
import React, { useState } from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

interface IPAddressInputProps {
value: string;
onChange: (value: string) => void;
}

const SingleCommandIPAddressInput: React.FC<IPAddressInputProps> = ({
value,
onChange,
}) => {
const [inputValue, setInputValue] = useState(value);

const handleBlur = () => {
onChange(inputValue);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setInputValue(event.target.value);
};

return (
<InputGroup size="md" width="100%">
<InputLeftAddon children="IP" />
<Input
     type="text"
     value={inputValue}
     onChange={handleChange}
     onBlur={handleBlur}
     maxLength={1000}
   />
</InputGroup>
);
};

export default SingleCommandIPAddressInput;