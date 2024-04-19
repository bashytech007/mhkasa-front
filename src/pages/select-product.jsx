import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { Link, useLoaderData } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";
import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Button } from "../components/ui/Button";
import { useCartContext } from "../hooks/utils/useCart";
import { useState } from "react";
import { useCartQuery } from "../hooks/query/useCart";
import toast from "react-hot-toast";
import { format } from "../utils/lib";
import { Seo } from "../components/Seo";

export const Component = () => {
  const { product } = useLoaderData();
  const { decreaseItem, increaseItem, addToCart } = useCartContext();
  const [count, setCount] = useState(0);
  const { data } = useCartQuery();

  const increase = () => {
    if (data.items.find((item) => item.productId._id === product._id)) {
      return increaseItem({ itemId: product._id, quantity: 1 });
    }
    setCount((v) => v + 1);
  };

  const decrease = () => {
    if (data.items.find((item) => item.productId._id === product._id)) {
      return decreaseItem({ itemId: product._id, quantity: 1 });
    }
    setCount((v) => (v <= 0 ? 0 : v - 1));
  };

  const onClick = () => {
    if (count <= 0) {
      return toast.error("Please specify quantity");
    }
    addToCart({ itemId: product._id, quantity: count });
  };

  return (
    <>
      <Seo
        title={`Mhkasa | ${product.name || ""}`}
        description="Complete TranscationF"
        type="webapp"
        name=""
      />
      <Wrapper>
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            {
              description: product.category ?? "Perfume",
              to: `/categories/${product.category ?? "Perfume"}`,
            },
            { description: product.name ?? "", to: "" },
          ]}
          className="text-[#3338] py-5"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />

        <div className="@container pb-8">
          <div className="grid gap-8 @4xl:grid-cols-2">
            <div className="relative min-w-[320px]">
              <div className="rounded-2xl overflow-hidden aspect-square @[400px]:aspect-video">
                <img
                  src={product.mainImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 absolute top-6 right-6 z-50">
                <button className="bg-white rounded-md h-11 grid place-items-center aspect-square">
                  <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
                </button>
                <button className="bg-white h-11 rounded-md grid place-items-center aspect-square">
                  <Icon
                    icon="fa6-solid:angle-left"
                    hFlip
                    style={{ fontSize: 28 }}
                  />
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto pt-6">
                <img
                  src={product.mainImage}
                  alt=""
                  className="w-28 aspect-square object-cover"
                />
                <img
                  src={product.firstImage}
                  alt=""
                  className="w-28 aspect-square object-cover"
                />
                <img
                  src={product.secondImage}
                  alt=""
                  className="w-28 aspect-square object-cover"
                />
                <img
                  src={product.thirdImage}
                  alt=""
                  className="w-28 aspect-square object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-app-red font-medium sm:text-xl">
                  {product.name}
                </p>
                <Button className="bg-white text-sm sm:text-[16px] md:bg-app-ash-2">
                  7 Days Return Policy
                </Button>
              </div>
              <p className="font-medium text-xl py-2">{product.category}</p>
              <p className="font-bold text-xl">#{format(product.price)}</p>
              <p className="py-1">{product.description}</p>
              <p>
                
              </p>
              <p className="py-1">
                <span className="font-bold">Brand:</span> Brand Name
              </p>
              <div className="py-1">
                
              </div>
              <div className="flex gap-x-12 flex-wrap justify-between pb-4">
                <div className="py-2">
                  
                </div>
                <div className="py-2">
                  <Heading className="text-app-black">Quantity</Heading>
                  <div className="flex gap-4 pt-2 items-center">
                    <button
                      onClick={decrease}
                      className="h-10 aspect-square rounded-full bg-white grid place-items-center font-medium"
                    >
                      <Icon icon="ic:round-minus" style={{ fontSize: 30 }} />
                    </button>
                    <p className="text-3xl font-medium">
                      {!data?.items
                        ? count
                        : data.items.find(
                            (item) => item.productId._id === product._id
                          )
                        ? data.items.find(
                            (item) => item.productId._id === product._id
                          )?.quantity
                        : count}
                    </p>
                    <button
                      onClick={increase}
                      className="h-10 aspect-square rounded-full bg-white grid place-items-center font-medium"
                    >
                      <Icon icon="ph:plus-bold" style={{ fontSize: 30 }} />
                    </button>
                  </div>
                </div>
              </div>

              {!(
                data &&
                data.items.find((item) => item.productId._id === product._id)
              ) ? (
                <Button
                  disabled={!count}
                  onClick={onClick}
                  className="bg-app-red text-white font-medium disabled:bg-[#848484]"
                >
                  Add to Cart
                </Button>
              ) : (
                <Link to="/cart">
                  <Button className="bg-app-red text-white font-medium">
                    Go to Cart
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <ProductDetail />
      </Wrapper>
    </>
  );
};
