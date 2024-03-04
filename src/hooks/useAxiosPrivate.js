import { useEffect } from "react";
import { axiosPrivate } from "../utils/axios";
import { useRefreshToken } from "./useRefreshToken";
import { useAuth } from "./useAuth";

export const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { accessToken, setAccessToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        if (err?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          setAccessToken(newAccessToken);
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    // clean up
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, accessToken, setAccessToken]);

  return axiosPrivate;
};
