import { createContext, useState } from "react";
import { prefix } from "../utils/lib";
export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const username = "Mhkasa User";
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(prefix("user")))
  );

  const getAccessToken = () => user?.token;
  const getUserId = () => user?.id;
  const getUserEmail = () => user?.email;

  return (
    <AuthContext.Provider
      value={{
        user,
        getAccessToken,
        setUser,
        getUserId,
        getUserEmail,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
