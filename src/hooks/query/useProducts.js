import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";

export const useInfiniteProducts = (url, ...key) => {
  const fetchProducts = async (url, pageParam) => {
    console.log(url)
    const res = await axios.get(`${url}?page=` + pageParam);
    return res.data;
  };

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["product", ...key],
    queryFn: async ({ pageParam }) => await fetchProducts(url, pageParam),
    getNextPageParam: ({ currentPage, totalPages }) =>
      currentPage < totalPages ? currentPage + 1 : undefined,
  });
};