import axios from "axios";

class HardwareInfoService {
  constructor(private baseURL: string) {}

  private async fetchData(endpoint: string) {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error(this.getErrorMessage(error));
    }
  }

  private getErrorMessage(error: any) {
    if (error.response) {
      return "Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.";
    } else if (error.request) {
      return "Não foi possível se conectar ao servidor. Verifique sua conexão com a internet.";
    } else {
      return "Ocorreu um erro desconhecido.";
    }
  }

  getRamInfo(computerName: string) {
    return this.fetchData(
      `${this.baseURL}/hardware/getInfo/ram/${computerName}`
    );
  }

  getStorageInfo(computerName: string) {
    return this.fetchData(
      `${this.baseURL}/hardware/getInfo/storage/${computerName}`
    );
  }
}

export default HardwareInfoService;
