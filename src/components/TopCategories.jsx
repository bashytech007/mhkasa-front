import { CategoryCard } from "./CategoryCard";
import productImg from "../assets/images/product image.webp";
import perfume from "../assets/images/perfume.webp";
import perfumeOil from "../assets/images/perfume-oil.webp";
import useLongPress from "../hooks/useLongPress";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { SectionHeader } from "./ui/SectionHeader";

export const TopCategories = () => {
  const categories = [
    {
      image: perfume,
      category: "Perfume Oil",
      numberOfProducts: 23,
    },
    {
      image: perfumeOil,
      category: "Perfume",
      numberOfProducts: 25,
    },
    {
      image: productImg,
      category: "Body Spray",
      numberOfProducts: 106,
    },
    {
      image: perfume,
      category: "Perfume Oil",
      numberOfProducts: 23,
    },
    {
      image: perfumeOil,
      category: "Perfume",
      numberOfProducts: 25,
    },
    {
      image: productImg,
      category: "Body Spray",
      numberOfProducts: 106,
    },
    {
      image: perfumeOil,
      category: "Roll On",
      numberOfProducts: 93,
    },
  ];
  
  const ref = useRef();

  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, []);

  return (
    <section className="py-8">
      <div className="flex items-center justify-between">
        <SectionHeader header="Top Categories" />

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
        {categories.map(({ numberOfProducts, image, category }, index) => (
          <li key={index} className="grow-0 shrink-0">
            <CategoryCard
              numberOfProducts={numberOfProducts}
              category={category}
              image={image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
