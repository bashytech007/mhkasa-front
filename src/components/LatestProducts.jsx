import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";

export const LatestProducts = () => {
  const { featuredProducts } = useLoaderData();

  return (
    <section className="py-8">
      <SectionHeader header="Latest Products" />
      <ListGrid>
        {featuredProducts.map(
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
      </ListGrid>
    </section>
  );
};
