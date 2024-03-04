import axios from "../utils/axios";

export const useRefreshToken = () => {
  return async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    return response.data.accessToken;
  };
};
