import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";

export const useInfiniteProducts = (url, ...key) => {
  const fetchProducts = async (url, pageParam) => {
    console.log(url);
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

export const useSearchProducts = (url, name = "") => {
  const fetchProducts = async (url) => {
    try {
      console.log({ name });
      const res = await axios.get(url, { name });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return useQuery({
    queryKey: ["product", "search"],
    queryFn: async () => await fetchProducts(url, name),
  });
};
