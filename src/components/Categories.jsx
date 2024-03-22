import { Wrapper } from "./Wrapper";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero-categories.png";
import { CategoryCard } from "./CategoryCard";
import { SectionHeader } from "./SectionHeader";
import Rollon from "../assets/images/Rollon.png";
import Humdifiers from "../assets/images/humdifiers.png";
import airfreshner from "../assets/images/AirFreshner.png";
import dropdown from "../assets/images/dropdown.svg";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Product } from "./ProductCard";
// import productImg from "../assets/images/product image.webp";
import { Icon } from "@iconify/react";
import useLongPress from "../hooks/useLongPress";
import { Sort } from "../components/Sort";

export const Categories = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const products = [
    {
      product: "Explore Man",
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

  const ref = useRef();
  useEffect(() => {
    async function fetchFeatures() {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/product/category/Body%20Spray?page=1&pageSize=10`,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      if (response.status === 200) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setFeaturedProducts(
            response.data.map((product) => {
              return {
                product: product.name,
                category: product.category,
                originalPrice: product.price,
                image: product.mainImage,
              };
            })
          );
        }
      }
    }

    fetchFeatures();
  }, []);

  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, []);
  const categories = [
    {
      image: Rollon,
      category: "Roll On",
      numberOfProducts: 108,
    },
    {
      image: Humdifiers,
      category: "Humdifiers",
      numberOfProducts: 250,
    },
    {
      image: airfreshner,
      category: "AirFreshner",
      numberOfProducts: 106,
    },
    // {
    //   image: perfumeOil,
    //   category: "Roll On",
    //   numberOfProducts: 93,
    // },
  ];

  return (
    <main className="py-4">
      <div className="w-full">
        <div className="w-full">
          <img src={hero} className="w-full" />
        </div>
      </div>
      <Wrapper>
        <section className="py-8">
          <div className="flex justify-between">
            <SectionHeader
              header="Sub Categories"
              Link
              to="/Categoreis"
              className="text-black"
            />
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
          <ul className="flex gap-6 pt-8 overflow-auto no-scrollbar">
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
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex items-center gap-3 px-10 py-2 bg-white rounded-full cursor-pointer justify-items-end">
            <Sort />
          </div>
        </div>
        <section className="py-8">
          <ul className="grid justify-center grid-flow-row gap-4 pt-8 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          </ul>
          <ul className="grid justify-center grid-flow-row gap-4 pt-8 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </main>
  );
};
