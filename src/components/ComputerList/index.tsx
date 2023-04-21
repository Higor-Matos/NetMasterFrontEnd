import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Props {
  options: string[];
  defaultValue?: string;
  label?: string;
}

const ComputerList = ({ options, defaultValue, label }: Props) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Select placeholder="Select a computer" defaultValue={defaultValue}>
        {Array.isArray(options) &&
          options.map((option, optionIndex) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Select>
    </FormControl>
  );
};

export default ComputerList;
