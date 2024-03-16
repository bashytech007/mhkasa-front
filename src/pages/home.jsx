import { SectionHeader } from "../components/ui/SectionHeader";
import { Wrapper } from "../components/ui/Wrapper";
import productImg from "../assets/images/product image.webp";
import perfume from "../assets/images/perfume.webp";
import perfumeOil from "../assets/images/perfume-oil.webp";
import { Product } from "../components/ProductCard";
import { CategoryCard } from "../components/CategoryCard";
import { Features } from "../components/Features";
import { SwiperElem } from "../components/Swiper";
import { CategoryPanel } from "../components/CategoryPanel";
import { Modal } from "../components/Modal";
import { Button } from "../components/ui/Button";
import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import useLongPress from "../hooks/useLongPress";
import { Sort } from "../components/Sort";

export const Component = () => {
  const ref = useRef();
  const products = [
    {
      product: "Explore Man hikhfik jkgbkb  kubkj hiokb ",
      category: "Body Spray",
      originalPrice: 2400,
      image: productImg,
    },
    {
      product: "Drty Man",
      category: "Body Spray",
      originalPrice: 2400,
      discountedPrice: 2100,
      image: productImg,
    },
    {
      product: "Dynamic",
      category: "Body Spray",
      originalPrice: 2400,
      discountedPrice: 2100,
      image: productImg,
    },
    {
      product: "Mousuf",
      category: "Roll On",
      originalPrice: 2400,
      image: productImg,
    },
    {
      product: "Explore Man",
      category: "Body Spray",
      originalPrice: 2400,
      discountedPrice: 2100,
      image: productImg,
    },
  ];
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

  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, []);

  return (
    <main>
      <Wrapper>
        <div className="flex gap-8 py-10">
          <CategoryPanel />
          <SwiperElem />
        </div>
        <section className="py-8">
          <SectionHeader header="Featured Products" />
          <ul className="pt-8 grid gap-4 justify-center grid-flow-row auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {products.map(
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
        <section className="py-8">
          <Sort />
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
                <Icon
                  icon="fa6-solid:angle-left"
                  hFlip
                  style={{ fontSize: 28 }}
                />
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
        <section className="py-8">
          <SectionHeader header="Products" />
          <ul className="pt-8 grid gap-4 justify-center grid-flow-row auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {products.map(
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
      </Wrapper>
      <div className="pt-6">
        <Features />
        {/* <Modal title="Proceed To Checkout">
          <p>
            Click "<span className="text-app-red">NO</span>" if you will love to
            continue shopping or "PROCEED" if you will love to complete purchase
            now
          </p>
          <div className="flex gap-12 justify-center items-center pt-8">
            <button>No</button>
            <Button className='bg-app-black text-white font-bold'>Proceed</Button>
          </div>
        </Modal> */}
      </div>
    </main>
  );
};
