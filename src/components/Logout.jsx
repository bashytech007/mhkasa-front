import { useAuth } from "../hooks/useAuth";
import axios from "../utils/axios";
import { Button } from "./Button";
export const Logout = () => {
  const { setUser } = useAuth();
  const onClick = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/logout`);
    if (response.status === 204) {
      sessionStorage.removeItem("user");
      setUser(null);
    }
  };
  return (
    <Button className="bg-app-ash-1 w-full text-nowrap" onClick={onClick}>
      Log Out
    </Button>
  );
};
