import axios from "axios";

import { requireApiBaseUrl } from "./apiConfig";

export const fetchUserInfo = async (computerName: string) => {
  try {
    const endpoint = `${requireApiBaseUrl()}/system/getUsersInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchChocolateyInfo = async (computerName: string) => {
  try {
    const endpoint = `${requireApiBaseUrl()}/system/getChocolateyInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOsInfo = async (computerName: string) => {
  try {
    const endpoint = `${requireApiBaseUrl()}/system/getOsVersionInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProgramsInfo = async (computerName: string) => {
  try {
    const endpoint = `${requireApiBaseUrl()}/system/getInstalledProgramsInfo/${computerName}`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
