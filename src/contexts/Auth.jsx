import { createContext, useState } from "react";
export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const getAccessToken = () => user?.token;
  const getUserId = () => user?.id;

  return (
    <AuthContext.Provider value={{ user, getAccessToken, setUser, getUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
