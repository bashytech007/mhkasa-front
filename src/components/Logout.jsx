import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../hooks/utils/useAuth";
import { Button } from "./ui/Button";
export const Logout = ({ toggle }) => {
  const { setUser } = useAuth();
  const queryClient = useQueryClient();

  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(undefined);
  };

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toggle();
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const onClick = async () => {
    mutation.mutate();
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
