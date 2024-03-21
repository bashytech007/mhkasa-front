import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import { ListGrid } from "./ui/ListGrid";

export const FeaturedProducts = () => {
  const { data, status, error } = useProducts("featured/product", "featured");

  return (
    <section className="py-8">
      <SectionHeader header="Featured Products" />
      {status === "pending" ? (
        "Loading..."
      ) : status === "error" ? (
        `An error has occurred: ${error.message}`
      ) : (
        <ListGrid>
          {data.map(
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
      )}
    </section>
  );
};
