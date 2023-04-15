import React from "react";
import ComputerList from "../components/ComputerList";
import ControlButtons from "../components/ControlButtons";
import IPAddressInput from "../components/IPAddressInput";

interface ControlPanelProps {
  ip: string;
  onIPChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  computers: string[];
  onClick: (endpoint: string) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  ip,
  onIPChange,
  computers,
  onClick,
}) => {
  return (
    <>
      <IPAddressInput value={ip} onChange={onIPChange} />
      <ComputerList computers={computers} />
      <ControlButtons onClick={onClick} />
    </>
  );
};

export default ControlPanel;
