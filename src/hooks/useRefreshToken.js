import axios from "../utils/axios";

export const useRefreshToken = () => {
  return async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });
      return response.data.accessToken;
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
};
