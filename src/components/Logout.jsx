import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/Button";
export const Logout = ({ toggle }) => {
  const { setUser } = useAuth();
  const onClick = async () => {
    setUser(undefined);
    sessionStorage.removeItem("user");
    toggle();
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
