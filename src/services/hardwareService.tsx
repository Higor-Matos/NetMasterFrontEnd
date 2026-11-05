// services/hardwareService.ts
import axios from "axios";

import { requireApiBaseUrl } from "./apiConfig";

export const fetchRamInfo = async (computerName: string) => {
  try {
    const endpoint = `${requireApiBaseUrl()}/hardware/getInfo/ram/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStorageInfo = async (computerName: string) => {
  try {
    const endpoint = `${requireApiBaseUrl()}/hardware/getInfo/storage/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
