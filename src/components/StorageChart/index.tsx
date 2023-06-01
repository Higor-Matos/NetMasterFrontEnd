import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa";

interface StorageChartProps {
  storageData: {
    deviceID: string;
    size_GB: number;
    freeSpace_GB: number;
  }[];
}

const StorageChart: React.FC<StorageChartProps> = ({ storageData }) => {
  if (storageData.length === 0) {
    return <Box p="4">Sem dados disponíveis para exibição.</Box>;
  }

  const iconColor = useColorModeValue("#283142", "#F5F5F5");
  const chartBgColor = useColorModeValue("#F5F5F5", "#283142");
  const labelColor = useColorModeValue("#283142", "#F5F5F5");
  const textColor = useColorModeValue("gray.700", "gray.300");

  const renderTooltipContent = (props: any) => {
    const { payload } = props;
    if (payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: chartBgColor,
            padding: "10px",
            border: "1px solid #ccc",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              color: "#8884d8",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >{`${data.deviceID}`}</p>
          <p style={{ color: labelColor }}>{`Tamanho: ${data.size_GB} GB`}</p>
          <p
            style={{ color: labelColor }}
          >{`Espaço livre: ${data.freeSpace_GB} GB`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Box
      boxShadow="0px 3px 6px rgba(0,0,0,0.16)"
      p="4"
      borderRadius="lg"
      backgroundColor={chartBgColor}
    >
      <Text
        mb="4"
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={textColor}
      >
        <FaDatabase style={{ marginRight: "8px", color: iconColor }} />
        Armazenamento
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={storageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="deviceID" stroke={labelColor} />
          <YAxis stroke={labelColor} />
          <Tooltip content={renderTooltipContent} />
          <Legend
            wrapperStyle={{
              marginTop: "20px",
              color: labelColor,
              fontSize: "14px",
            }}
          />
          <Bar dataKey="size_GB" fill="#E85D75" name="Total" />
          <Bar dataKey="freeSpace_GB" fill="#56B4A9" name="Livre" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StorageChart;
