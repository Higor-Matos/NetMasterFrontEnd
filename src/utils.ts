import axios, { AxiosError } from "axios";

export const fetchComputers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5018/powershell/listComputersNetwork"
    );
    return response.data.success.result.computers;
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while fetching the list of computers. Please try again later."
    );
  }
};

export const handleButtonClick = async (endpoint: string, ip: string) => {
  try {
    const response = await axios.post(
      `http://localhost:5018/powershell/${endpoint}`,
      { ip }
    );
    console.log(response);
    alert(response.data);
  } catch (error) {
    console.error(error);
    let message = "An error occurred. Please try again later.";
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        message = `Error ${axiosError.response.status}: ${axiosError.response.statusText}`;
      } else if (axiosError.request) {
        message = "The request was made but no response was received.";
      }
    }
    alert(message);
  }
};
