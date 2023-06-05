// ApiService.ts
import axios from "axios";

const apiBase = "http://localhost:5018/";

export const ApiService = {
  async installSoftware(computer: string, softwareName: string) {
    const response = await axios.post(`${apiBase}software/install`, {
      ip: computer,
      softwareName: softwareName,
    });
    return response.data;
  },

  async shutdownPc(computer: string) {
    const response = await axios.post(`${apiBase}system/shutdownPc`, {
      ip: computer,
    });
    return response.data;
  },

  async restartPc(computer: string) {
    const response = await axios.post(`${apiBase}system/restartPc`, {
      ip: computer,
    });
    return response.data;
  },

  async getChocolateyInfo(computer: string) {
    const response = await axios.get(
      `${apiBase}system/getChocolateyInfo/${computer}`
    );
    return response.data;
  },
};
