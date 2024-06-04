import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { Link, useLoaderData ,useNavigate} from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";
import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Button } from "../components/ui/Button";
import { useCartContext } from "../hooks/utils/useCart";
import { useState,useRef,useEffect } from "react";
import { useCartQuery } from "../hooks/query/useCart";
import toast from "react-hot-toast";
import { format } from "../utils/lib";
import { Seo } from "../components/Seo";
import { Product } from "../components/ProductCard";
import { ListGrid } from "../components/ui/ListGrid";
import useLongPress from "../hooks/utils/useLongPress";
import  {LatestProducts } from "../components/LatestProducts";
// import { SectionHeader } from "./ui/SectionHeader";


export const Component = () => {
  const { product } = useLoaderData();
  console.log(product)
  const { decreaseItem, increaseItem, addToCart } = useCartContext();
  const [count, setCount] = useState(1);
  const { data } = useCartQuery();
 const navigate=useNavigate()
 const { bestsellers } = useLoaderData();
 const ref = useRef();

 const { getHandlers, setElement } = useLongPress(ref.current);

 useEffect(() => {
   setElement(ref.current);
 }, [setElement]);
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
  const onClickCheckout=()=>{
  
    addToCart({ itemId: product._id, quantity: count||1 });
   navigate("/checkout")
  }

  return (
    <>
      <Seo
        title={`Mkhasa | ${product.name || ""}`}
        description="Complete Transcation"
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
            <div className="relative min-w-[350px]">
              <div className="rounded-2xl overflow-hidden  aspect-square @[460px]:aspect-video">
                <img
                  src={product.mainImage}
                  alt=""
                  className="w-full h-full  object-cover md:object-cover"
                />
              </div>
              <div className="flex gap-4 absolute top-6 right-6 z-50">
                {/* <button className="bg-white rounded-md h-11 grid place-items-center aspect-square">
                  <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
                </button> */}
                {/* <button className="bg-white h-11 rounded-md grid place-items-center aspect-square">
                  <Icon
                    icon="fa6-solid:angle-left"
                    hFlip
                    style={{ fontSize: 28 }}
                  />
                </button> */}
              </div>
              <div className="flex gap-4 overflow-x-auto pt-6 md:object-cover object-contain">
                
                {!!product.mainImage ?  <img
                  src={product.mainImage}
                  alt="mainImage"
                  className="w-28 aspect-square "
                />:null}
                {!!product.firstImage ?  <img
                  src={product.firstImage}
                  alt="firstImage"
                  className="w-28 aspect-square "
                />:null}
                 {!!product.secondImage ?  <img
                  src={product.secondImage}
                  alt="secondImage"
                  className="w-28 aspect-square "
                />:null}
              {!!product.thirdImage ?  <img
                  src={product.thirdImage}
                  alt="thirdImage"
                  className="w-28 aspect-square "
                />:null}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-app-red font-medium sm:text-xl">
                  {product.name}
                </p>
                {/* <Button className="bg-white text-sm sm:text-[16px] md:bg-app-ash-2">
                  7 Days Return Policy
                </Button> */}
              </div>
              <p className="font-medium text-xl py-2">{product.category}</p>
              <p className="font-bold text-xl">₦{format(product.price)}</p>
             
              {/* <p className="py-1">{product.description.topnote}</p> */}
              <p></p>
              <p className="py-1">
                <span className="font-bold">sku:{product.sku}</span>
              </p>
              <div className="py-1"></div>
              <div className="flex gap-x-12 flex-wrap justify-between pb-4">
                {/* <div className="py-2"></div> */}
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
             <div className="flex flex-col md:flex-row gap-8 md:space-x-4 mt-4 "> 

             {!(
                data &&
                data.items.find((item) => item.productId._id === product._id)
              ) ? (
            
                 <Button
                  disabled={!count}
                  onClick={onClick}
                  className="bg-app-black text-white font-medium md:px-14  py-2 w-full  disabled:bg-[#848484]"
                >
                  Add to Cart
                </Button>
               
           
              ) : (
                
                <Link to="/cart" className="w-full md:flex-1">
                  <Button className="bg-app-black md:px-14  py-2 w-full  text-white focus:outline-none font-medium">
                    Go to Cart
                  </Button>
                </Link>
              )}
                <Button
                 
                 onClick={onClickCheckout}
                 className="bg-green-500 text-white font-medium md:px-14  py-2 w-full  disabled:bg-[#848484]"
               >
                 Buy Now
               </Button>
              </div>
             
            </div>
          </div>
        </div>

         {/* STYLE THE UI APPROPRAITELY */}
         <div className="flex justify-between gap-2">
        <Heading>We Also Recommend</Heading>
          <div>
          
          <ListGrid>
          {product.layerWith.map((product) => (
            <Product
              id={product._id}
              product={product.name}
              category={product.category}
              originalPrice={product.price}
              image={product.productImage || product.mainImage}
            />
          ))}
        </ListGrid>
         
          </div>
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
          {/* <LatestProducts/> */}
        </div>
         <div className="flex justify-between gap-2">
        <Heading className="text-nowrap md:text-wrap">Products You Can Layer With</Heading>
        <ul
        className="pt-8 grid grid-cols-2 gap-4 md:flex md:flex-row md:overflow-auto md:no-scrollbar"
        ref={ref}
      >
        <ListGrid>
          {product.layerWith.map((product) => (
            <Product
              id={product._id}
              product={product.name}
              category={product.category}
              originalPrice={product.price}
              image={product.productImage || product.mainImage}
            />
          ))}
        </ListGrid>
      </ul>
          <button
            {...getHandlers("backward")}
            className="h-8 w-8 bg-white rounded-full grid place-items-center hover:scale-105"
          >
            <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
          </button>
         
          <button
            {...getHandlers("forward")}
            className="h-8 w-8 bg-white rounded-full grid place-items-center hover:scale-105"
          >
            <Icon icon="fa6-solid:angle-left" hFlip style={{ fontSize: 28 }} />
          </button>
        </div>
       

        <ProductDetail productId={product._id} />

       
      </Wrapper>
    </>
  );
};
