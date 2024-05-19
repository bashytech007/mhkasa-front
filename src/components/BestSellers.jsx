import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";
import useLongPress from "../hooks/utils/useLongPress";
import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";

export const BestSellers = () => {
  const { bestsellers } = useLoaderData();

  const ref = useRef();

  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, []);
  return (
    <section className="py-8 md:block">
      <div className="flex items-center justify-between">
        <SectionHeader header="Best Sellers" />

        <div className="flex gap-4">
          <button
            {...getHandlers("backward")}
            className="h-10 w-10 bg-white rounded-full grid place-items-center hover:scale-105"
          >
            <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
          </button>
          <button
            {...getHandlers("forward")}
            className="h-10 w-10 bg-white rounded-full grid place-items-center hover:scale-105"
          >
            <Icon icon="fa6-solid:angle-left" hFlip style={{ fontSize: 28 }} />
          </button>
        </div>
      </div>

      <ul className="pt-8 flex gap-6 overflow-auto no-scrollbar" ref={ref}>
        {bestsellers.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
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
                className="min-w-52"
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};
