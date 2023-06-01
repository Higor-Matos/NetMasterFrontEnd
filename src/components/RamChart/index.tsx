import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FaMemory } from "react-icons/fa";
import { useColorModeValue, Box, Text, Spinner } from "@chakra-ui/react";

interface RamChartProps {
  ramData: { name: string; value: number }[];
  isLoading: boolean;
}

const COLORS = ["#E85D75", "#56B4A9", "#FFA24A", "#5A77DB"];

const RamChart: React.FC<RamChartProps> = ({ ramData, isLoading }) => {
  const loadingColor = useColorModeValue("blue.500", "blue.300");
  const boxBgColor = useColorModeValue("#F5F5F5", "#283142");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const labelColor = useColorModeValue("#283142", "#F5F5F5");

  if (isLoading) {
    return <Spinner size="md" color={loadingColor} />;
  }

  if (!ramData || ramData.length === 0) {
    return <Box p="4">Sem dados disponíveis para exibição.</Box>;
  }

  const total = ramData.reduce((sum, data) => sum + data.value, 0);
  const renderTooltipContent = (props: any) => {
    const { payload } = props;
    if (payload && payload.length > 0) {
      const data = payload[0].payload;
      const percentage = (data.value / total) * 100;
      return (
        <div
          style={{
            backgroundColor: boxBgColor,
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
          >{`${data.value} GB`}</p>
          <p style={{ color: labelColor }}>{`${percentage.toFixed(2)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Box
      boxShadow="0px 3px 6px rgba(0,0,0,0.16)"
      p="4"
      rounded="lg"
      bg={boxBgColor}
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
        <FaMemory style={{ marginRight: "8px" }} />
        RAM
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={ramData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={boxBgColor}
            label
          >
            {ramData.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={renderTooltipContent} />
          <Legend
            wrapperStyle={{
              marginTop: "20px",
              color: labelColor,
              fontWeight: "bold",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RamChart;
