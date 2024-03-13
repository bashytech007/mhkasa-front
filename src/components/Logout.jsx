import { useAuth } from "../hooks/useAuth";
import axios from "../utils/axios";
import { Button } from "./Button";
export const Logout = ({ toggle }) => {
  const { setUser } = useAuth();
  const onClick = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/logout`);
    if (response.status === 204) {
      setUser(undefined);
      sessionStorage.removeItem("user");
      toggle();
    }
  };
  return (
    <Button
      className="w-full font-bold bg-app-ash text-nowrap text-app-red"
      onClick={onClick}
    >
      Log Out
    </Button>
  );
};
