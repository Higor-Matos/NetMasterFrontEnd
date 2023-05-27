import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface RamChartProps {
  ramData: { name: string; value: number }[];
}

const RamChart: React.FC<RamChartProps> = ({ ramData }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ramData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RamChart;
