// ApiService.ts
import axios from "axios";

import { requireApiBaseUrl } from "./apiConfig";

export const ApiService = {
  async installSoftware(computer: string, softwareName: string) {
    const result: { data: unknown } = await axios.post<unknown>(
      `${requireApiBaseUrl()}/software/install`,
      {
        ip: computer,
        softwareName: softwareName,
      },
    );
    return result.data;
  },

  async shutdownPc(computer: string) {
    const result: { data: unknown } = await axios.post<unknown>(
      `${requireApiBaseUrl()}/system/shutdownPc`,
      {
        ip: computer,
      },
    );
    return result.data;
  },

  async restartPc(computer: string) {
    const result: { data: unknown } = await axios.post<unknown>(
      `${requireApiBaseUrl()}/system/restartPc`,
      {
        ip: computer,
      },
    );
    return result.data;
  },

  async getChocolateyInfo(computer: string) {
    const result: { data: unknown } = await axios.get<unknown>(
      `${requireApiBaseUrl()}/system/getChocolateyInfo/${computer}`,
    );
    return result.data;
  },
};
