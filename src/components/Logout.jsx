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
      className="bg-app-ash w-full text-nowrap text-app-red font-bold"
      onClick={onClick}
    >
      Log Out
    </Button>
  );
};
