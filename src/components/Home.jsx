import { SectionHeader } from "./SectionHeader";
import { Wrapper } from "./Wrapper";
import productImg from "../assets/images/product image.png";
import perfume from "../assets/images/perfume.png";
import perfumeOil from "../assets/images/perfume-oil.png";
import { Product } from "./ProductCard";
import { CategoryCard } from "./CategoryCard";
import { Features } from "./Features";
import { useAxiosPrivate } from "../hooks/useAxiosPrivate";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export const Home = () => {
  const { accessToken } = useAuth();
  const [employees, setEmployees] = useState([]);
  const axiosPrivate = useAxiosPrivate();
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

  const onClick = async () => {
    try {
      const res = await axiosPrivate.get("/employees", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setEmployees(res?.data?.employees);
    } catch (error) {
      console.log(error?.response?.data.messaeg);
    }
  };
  return (
    <main className="py-4">
      <Wrapper>
        <section className="py-8">
          <SectionHeader header="Featured Products" />
          <ul className="pt-8 grid gap-4 justify-center grid-flow-row auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          <SectionHeader header="Top Categories" />
          <ul className="pt-8 flex gap-6 overflow-auto no-scrollbar">
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
      <button onClick={() => onClick()}>Get Employees</button>
      <ul>
        {employees.map((employee, i) => (
          <li key={i}>
            {employee.name} - {employee.age} Yrs
          </li>
        ))}
      </ul>
    </main>
  );
};
