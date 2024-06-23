import { useEffect, useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import axios from "../utils/axios";

export const Recommended = () => {
  const [recommend, setRecommended] = useState([]);
  const [err, setErr] = useState(null);

  async function getRecommended() {
    try {
      const response = await axios.get("recommend");
      setRecommended(() =>
        response.data.map(({ product }) => {
          return {
            id: product?._id || 0,
            product: product.name,
            category: product.category,
            price: product.price,
            image:
              product.mainImage || product.firstImage || product.secondImage,
          };
        })
      );
    } catch (error) {
      setErr(error?.message ?? "Error fetching data");
    }
  }

  useEffect(() => {
    getRecommended();
  }, []);

  return (
    <section className="py-8">
      <SectionHeader header="Recommended" />

      {err ? (
        <p>{err}</p>
      ) : recommend.length > 0 ? (
        <ul className="pt-6 grid gap-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {recommend.map(({ product, category, price, image, id }, index) => (
            <li key={index} className="md:flex-shrink-0 grow">
              <Product
                product={product}
                category={category}
                price={price}
                image={image}
                id={id}
                className="min-w-[10rem]"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data</p>
      )}
    </section>
  );
};