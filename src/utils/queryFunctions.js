import axios from "./axios";

export async function getProducts(url) {
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
}

export async function getCategories() {
  const response = await axios.get(`all/category`);
  return response.data;
}

export const fetchProducts = async (url, pageParam) => {
  const res = await axios.get(`${url}?page=` + pageParam);
  return res.data;
};
