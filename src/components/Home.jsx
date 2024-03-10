import { SectionHeader } from "./SectionHeader";
import { Wrapper } from "./Wrapper";
import productImg from "../assets/images/product image.png";
import perfume from "../assets/images/perfume.png";
import perfumeOil from "../assets/images/perfume-oil.png";
import { Product } from "./ProductCard";
import { CategoryCard } from "./CategoryCard";
import { Features } from "./Features";
import CarouselSlider from "./CarouselSlider";
import { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

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

  // CHECK YOUR BROWSER

  // const products = [
  //   {
  //     product: "Explore Man",
  //     category: "Body Spray",
  //     originalPrice: 2400,
  //     image: productImg,
  //   },
  //   {
  //     product: "Drty Man",
  //     category: "Body Spray",
  //     originalPrice: 2400,
  //     discountedPrice: 2100,
  //     image: productImg,
  //   },
  //   {
  //     product: "Dynamic",
  //     category: "Body Spray",
  //     originalPrice: 2400,
  //     discountedPrice: 2100,
  //     image: productImg,
  //   },
  //   {
  //     product: "Mousuf",
  //     category: "Roll On",
  //     originalPrice: 2400,
  //     image: productImg,
  //   },
  //   {
  //     product: "Explore Man",
  //     category: "Body Spray",
  //     originalPrice: 2400,
  //     discountedPrice: 2100,
  //     image: productImg,
  //   },
  // ];
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
      <div className="w-full">
        <div className="px-4 md:px-8 lg:px-10 xl:px:16 2xl:px-cont1300 bg-green-500 grid grid-cols-[10fr_39fr] items-center justify-between gap-8">
          <div className="h-full  bg-blue-500 rounded-md">The other div</div>
          <CarouselSlider />
        </div>
      </div>
      <Wrapper>
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
