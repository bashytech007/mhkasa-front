import { useQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";

export const useCategory = () => {
  async function getCategories() {
    const response = await axios.get(`all/category`);
    // console.log(response)
    return response.data;
  }
  const {
    data: categories,
    error,
    status,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    categories,
    error,
    status,
  };
};
