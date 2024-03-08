import { useEffect } from "react";
import axios from "../utils/axios";
import { detectIncognito } from "../utils/detectIncognito";

export const useAxios = () => {
  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      async (config) => {
        const result = await detectIncognito();
        config.headers["mode"] = result.isPrivate ? "private" : "public";
        return config;
      },
      (err) => Promise.reject(err)
    );
    //

    // clean up
    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, []);

  return axios;
};
