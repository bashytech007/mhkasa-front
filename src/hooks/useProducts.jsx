import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "../utils/axios";

const getProducts = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.map((x) => {
      return {
        product: x.name,
        category: x.category,
        originalPrice: x.price,
        image: x.mainImage,
      };
    });
  } catch (error) {
    throw new Error("Failed to get featured products");
  }
};

export const useProducts = (url, ...key) => {
  const { data, error, status } = useQuery({
    queryKey: ["product", ...key],
    queryFn: async () => await getProducts(url),
  });

  return {
    data,
    error,
    status,
  };
};

export const useInfiniteProducts = (url, ...key) => {
  const fetchProducts = async (url, pageParam) => {
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
