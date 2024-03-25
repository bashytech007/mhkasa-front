import { useQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";
import { useAuth } from "../utils/useAuth";

export const useCartQuery = () => {
  const { getUserId } = useAuth();
  const userId = getUserId();
  async function getCart() {
    if (!userId)
      return {
        items: [],
      };
    const response = await axios.get(`cart/${userId}`);
    return response.data;
  }
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};
