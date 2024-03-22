import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useProducts } from "../hooks/query/useProducts";

export const LatestProducts = () => {
  const { data, status, error } = useProducts("latest/product", "latest");

  return (
    <section className="py-8">
      <SectionHeader header="Latest Products" />
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
