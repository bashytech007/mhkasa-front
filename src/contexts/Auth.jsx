import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const Auth = ({ children }) => {
  const [user, setUser] = useState();
  const [accessToken, setAccessToken] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{ user, accessToken, setAccessToken, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
