import { FormControl, Select } from "@chakra-ui/react";

const ComputerList = ({ computers }) => {
  return (
    <FormControl>
      <Select placeholder="Select a computer">
        {Array.isArray(computers) &&
          computers.map((computer, index) => (
            <option key={index} value={computer}>
              {computer}
            </option>
          ))}
      </Select>
    </FormControl>
  );
};

export default ComputerList;
