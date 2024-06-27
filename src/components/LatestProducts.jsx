// import { SectionHeader } from "./ui/SectionHeader";
// import { Product } from "./ProductCard";
// import { ListGrid } from "./ui/ListGrid";
// import { useLoaderData } from "react-router-dom/dist";

// export const LatestProducts = () => {
//   const { latestProducts } = useLoaderData();

//   return (
//     <section className="py-8    font-Helvetica">
//       <SectionHeader header="New In" />
//       <ListGrid>
//         {latestProducts.map(
//           (
//             { id, product, category, originalPrice, discountedPrice, image },
//             index
//           ) => (
//             <li key={index}>
//               <Product
//                 product={product}
//                 category={category}
//                 originalPrice={originalPrice}
//                 discountedPrice={discountedPrice}
//                 image={image}
//                 id={id}
//               />
//             </li>
//           )
//         )}
//       </ListGrid>
//     </section>
//   );
// };
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { useLoaderData } from "react-router-dom/dist";
import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";
import useLongPress from "../hooks/utils/useLongPress";

export const LatestProducts = ({ horizontalOnSmallScreens = true }) => {
  const { latestProducts } = useLoaderData();
  const ref = useRef();

  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, [setElement]);

  return (
    <section className="py-8 font-Helvetica">
      <div className="flex items-center justify-between">
        <SectionHeader header="New In" />
        <div className="hidden gap-4">
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
      <ul
        className="pt-8 w-full gap-1 flex sm:flex-nowrap overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        ref={ref}
      >
        {latestProducts.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
            index
          ) => (
            <li key={index} className="min-w-[11rem]">
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
      </ul>
    </section>
  );
};

