import { useAuth } from "../hooks/useAuth";
import axios from "../utils/axios";
import { Button } from "./ui/Button";
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
      className="bg-app-ash w-full text-nowrap text-app-red font-bold"
      onClick={onClick}
    >
      Log Out
    </Button>
  );
};
