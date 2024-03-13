import { SectionHeader } from "./SectionHeader";
import { Wrapper } from "./Wrapper";
import productImg from "../assets/images/product image.webp";
import perfume from "../assets/images/perfume.webp";
import perfumeOil from "../assets/images/perfume-oil.webp";
import { Product } from "./ProductCard";
import { CategoryCard } from "./CategoryCard";
import { Features } from "./Features";
import { SwiperElem } from "./Swipers";
import { CategoryPanel } from "./CategoryPanel";
import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/featured/product`,
        { headers: { "Content-Type": "application/json" } }
      );

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
  useEffect(() => {
    async function fetchLatestFeatures() {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/latest/product`,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setTopProducts(
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

    fetchLatestFeatures();
  }, []);

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
      image: perfumeOil,
      category: "Roll On",
      numberOfProducts: 93,
    },
  ];

  return (
    <main className="py-4">
      <Wrapper>
        <div className="flex gap-8">
          <CategoryPanel />
          <SwiperElem />
        </div>
        <section className="py-8">
          <SectionHeader header="Featured Products" />
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
        </section>
        <section className="py-8">
          <SectionHeader header="Top Categories" />
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
      </Wrapper>
      <div className="py-6">
        <Features />
      </div>
    </main>
  );
};
