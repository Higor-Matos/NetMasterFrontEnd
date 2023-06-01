// services/systemService.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:5018";

export const fetchUserInfo = async (computerName: string) => {
  const endpoint = `${API_BASE_URL}/system/getUsersInfo/${computerName}`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const fetchChocolateyInfo = async (computerName: string) => {
  const endpoint = `${API_BASE_URL}/system/getChocolateyInfo/${computerName}`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const fetchOsInfo = async (computerName: string) => {
  const endpoint = `${API_BASE_URL}/system/getOsVersionInfo/${computerName}`;
  const response = await axios.get(endpoint);
  return response.data;
};

export const fetchProgramsInfo = async (computerName: string) => {
  const endpoint = `${API_BASE_URL}/system/getInstalledProgramsInfo/${computerName}`;
  const response = await axios.get(endpoint);
  return response.data;
};
