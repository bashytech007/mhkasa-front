// import axios from "../utils/axios"

import axios from "axios";

export const useRefreshToken = () => {
  return async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/refresh`,
        {
          withCredentials: true,
        }
      );
      return response.data.accessToken;
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
};
