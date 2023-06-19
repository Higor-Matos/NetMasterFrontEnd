import axios from "axios";

const API_BASE_URL = "http://192.168.100.15:5018";

export const fetchUserInfo = async (computerName: string) => {
  try {
    const endpoint = `${API_BASE_URL}/system/getUsersInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchChocolateyInfo = async (computerName: string) => {
  try {
    const endpoint = `${API_BASE_URL}/system/getChocolateyInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchOsInfo = async (computerName: string) => {
  try {
    const endpoint = `${API_BASE_URL}/system/getOsVersionInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProgramsInfo = async (computerName: string) => {
  try {
    const endpoint = `${API_BASE_URL}/system/getInstalledProgramsInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
