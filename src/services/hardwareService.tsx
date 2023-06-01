// services/hardwareService.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:5018";

export const fetchRamInfo = async (computerName: string) => {
  const endpoint = `${API_BASE_URL}/hardware/getInfo/ram/${computerName}`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const fetchStorageInfo = async (computerName: string) => {
  const endpoint = `${API_BASE_URL}/hardware/getInfo/storage/${computerName}`;
  const response = await axios.get(endpoint);
  return response.data;
};
