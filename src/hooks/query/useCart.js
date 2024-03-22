import { useQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";

export const useCartQuery = () => {
  async function getCart() {
    const response = await axios.get(`cart/65d23b4e2a4c112f98383490`);
    return response.data;
  }
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};
