// services/hardwareService.ts
import axios from "axios";

const API_BASE_URL = "http://192.168.100.15:5018";

export const fetchRamInfo = async (computerName: string) => {
  try {
    const endpoint = `${API_BASE_URL}/hardware/getInfo/ram/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchStorageInfo = async (computerName: string) => {
  try {
    const endpoint = `${API_BASE_URL}/hardware/getInfo/storage/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
