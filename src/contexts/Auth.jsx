import { createContext, useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { useRefreshToken } from "../hooks/useRefreshToken";
import { detectIncognito } from "../utils/detectIncognito";
export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const axios = useAxios();
  const refresh = useRefreshToken();
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const [accessToken, setAccessToken] = useState(undefined);

  useEffect(() => {
    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        if (err?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const accessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          setAccessToken(accessToken);
          return axios(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    const abortController = new AbortController();
    const getUser = async () => {
      try {
        const response = await axios.get(`/user-info`);
        setUser(response?.data);
        sessionStorage.setItem("user", JSON.stringify(response?.data));
      } catch (error) {
        console.error(error);
      }
    };

    detectIncognito().then(({ isPrivate }) => {
      const __user = JSON.parse(sessionStorage.getItem("user"));
      if (!__user || Object.keys(__user).length === 0) {
        !isPrivate && getUser();
      }
    });

    return () => {
      abortController.abort();
      axios.interceptors.request.eject(responseIntercept);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, accessToken, setAccessToken, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
