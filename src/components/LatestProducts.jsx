import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";

export const LatestProducts = () => {
  const { latestProducts } = useLoaderData();

  return (
    <section className="py-8 font-FarfetchRegular">
      <SectionHeader header="New In" />
      <ListGrid>
        {latestProducts.map(
          (
            { id, product, category, originalPrice, discountedPrice, image },
            index
          ) => (
            <li key={index}>
              <Product
                product={product}
                category={category}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
                image={image}
                id={id}
              />
            </li>
          )
        )}
      </ListGrid>
    </section>
  );
};
