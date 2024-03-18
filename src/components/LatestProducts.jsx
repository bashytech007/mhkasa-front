import axios from "axios";
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

export const LatestProducts = () => {
  const fetchLatestProducts = async () => {
    try {
      const response = await axios.get(
        `https://gifted-plum-salmon.cyclic.app/api/v1/latest/product`,
        { headers: { "Content-Type": "application/json" } }
      );
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

  const {
    data: latestProducts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["latest", "products"],
    queryFn: fetchLatestProducts,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="py-8">
      <SectionHeader header="Latest Products" />
      <ul className="pt-8 grid gap-4 justify-center grid-flow-row auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {latestProducts.map(
          (
            { product, category, originalPrice, discountedPrice, image },
            index
          ) => (
            <li key={index}>
              <Product
                product={product}
                category={category}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
                image={image}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};
