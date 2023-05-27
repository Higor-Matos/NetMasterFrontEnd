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

interface StorageChartProps {
    storageData: {
      deviceID: string;
      size_GB: number;
      freeSpace_GB: number;
    }[];
  }
  

  const StorageChart: React.FC<StorageChartProps> = ({ storageData }) => {
    return (
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={storageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="deviceID" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="size_GB" fill="#8884d8" />
            <Bar dataKey="freeSpace_GB" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  

export default StorageChart;
