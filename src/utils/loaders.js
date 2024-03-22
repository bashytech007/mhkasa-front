import { fetchProducts, getCategories, getProducts } from "./queryFunctions";

export const homeLoader = (queryClient) => async () => {
  const featuredProductQuery = {
    queryKey: ["product", "featured"],
    queryFn: async () => await getProducts("featured/product"),
  };

  const latestProductQuery = {
    queryKey: ["product", "latest"],
    queryFn: async () => await getProducts("latest/product"),
  };

  const categoriesQuery = {
    queryKey: ["categories"],
    queryFn: getCategories,
  };

  const featuredProducts = await queryClient.ensureQueryData(
    featuredProductQuery
  );

  const latestProducts = await queryClient.ensureQueryData(latestProductQuery);

  const categories = await queryClient.ensureQueryData(categoriesQuery);

  return {
    featuredProducts,
    latestProducts,
    categories,
  };
};

export const categoriesLoader =
  (queryClient) =>
  async ({ params: { category }, request }) => {
    const url = new URL(request.url);
    const sortBy = url.searchParams.get("sort") || "";
    const query = {
      initialPageParam: 1,
      queryKey: ["product", "category", category, sortBy],
      queryFn: async ({ pageParam }) =>
        await fetchProducts(
          `product/category/${category}?sort=${sortBy}`,
          pageParam
        ),
      getNextPageParam: ({ currentPage, totalPages }) =>
        currentPage < totalPages ? currentPage + 1 : undefined,
    };

    const categories =
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchInfiniteQuery(query));

    return {
      categories,
    };
  };
