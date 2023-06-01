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
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

interface RamChartProps {
  ramData: { name: string; value: number }[];
}

const COLORS = ["#E85D75", "#56B4A9", "#FFA24A", "#5A77DB"];

const RamChart: React.FC<RamChartProps> = ({ ramData }) => {
  if (ramData.length === 0) {
    return <Box p="4">Sem dados disponíveis para exibição.</Box>;
  }

  const iconColor = useColorModeValue("#283142", "#F5F5F5");
  const chartBgColor = useColorModeValue("#F5F5F5", "#283142");
  const labelColor = useColorModeValue("#283142", "#F5F5F5");

  const total = ramData.reduce((sum, data) => sum + data.value, 0);
  const renderTooltipContent = (props: any) => {
    const { payload } = props;
    if (payload && payload.length > 0) {
      const data = payload[0].payload;
      const percentage = (data.value / total) * 100;
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
      borderRadius="lg"
      backgroundColor={chartBgColor}
    >
      <h2
        style={{
          color: labelColor,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "xl",
          fontWeight: "bold",
        }}
      >
        <FaMemory style={{ marginRight: "8px", color: iconColor }} />
        Uso de Memória RAM
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={ramData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={chartBgColor}
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
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RamChart;
