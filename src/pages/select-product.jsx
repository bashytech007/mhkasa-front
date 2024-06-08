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
import axios from "axios";
// import  {LatestProducts } from "../components/LatestProducts";
// import { SectionHeader } from "./ui/SectionHeader";


export const Component = () => {
  const { product } = useLoaderData();
  // console.log(product)
  const { decreaseItem, increaseItem, addToCart } = useCartContext();
  const [count, setCount] = useState(1);
  const [recommend , setRecommend] = useState([])
  const { data } = useCartQuery();
 const navigate=useNavigate()
//  const { bestsellers } = useLoaderData();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mkhasa-bfdb6fabd978.herokuapp.com/api/v1/recommend');
        console.log({response})
        setRecommend(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

        <div className="@container pb-8 font-FarfetchRegular bg-white px-2">
          <div className="grid gap-8 @4xl:grid-cols-2">
            <div className="relative min-w-[350px] md:min-w-[550px]">
              <div className="rounded-2xl overflow-hidden w-full aspect-square md:@[460px]:aspect-video">
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
              <div className="flex justify-between items-center flex-wrap gap-2 font-FarfetchRegular">
                <p className="text-xl font-bold text-[#A40001] font-FarfetchRegular">{product.category}</p>
                  {/* <Button className="bg-white text-sm sm:text-[16px] md:bg-app-ash-2">
                  7 Days Return Policy
                </Button> */}
               
              
              </div>
             <div className="mt-5 -md:mt-6 font-FarfetchRegular"> 
             <h3  className="text-[#555] font-bold md:text-4xl text-3xl font-FarfetchRegular">
                  {product.name}
                </h3>
             </div>
        
              <div className="mt-5 md:mt-2 font-FarfetchRegular">
              <p className="md:text-5xl text-5xl font-FarfetchRegular">₦<span>{format(product.price)}</span></p>
              </div>
             
             
              <div className="mt-5 md:mt-2 font-FarfetchRegular">
              <p className="font-FarfetchRegular mt-2"><strong className="text-black font-FarfetchRegular Basis font-bold">SKU</strong>: <span className="font-FarfetchRegular text-[#555]">{product.sku}</span></p>
              <p className="font-FarfetchRegular mt-2"><strong className="text-black font-FarfetchRegular font-bold">Brand</strong>: <span className="font-FarfetchRegular text-[#555]">{product.brand}</span></p>
               <p className="font-FarfetchRegular mt-2"><strong className="text-black font-FarfetchRegular font-bold">Manufacturer</strong>: <span className="font-FarfetchRegular text-[#555]">{product.manufacturer}</span></p>

              {/* <p className="text-xl text-[#555] font-FarfetchRegular">Brand <span className="font-bold text-xl text-[#555] font-FarfetchRegular"> : {product.brand}</span></p>
              <p className="text-xl text-[#555] font-FarfetchRegular">Manufacturer <span className="font-FarfetchRegular font-bold text-xl text-[#555]"> : {product.manufacturer}</span></p> */}
                
              </div>
              <div className="py-2"></div>
              <div className="flex gap-x-12 flex-wrap justify-between pb-2 font-FarfetchRegular">
                {/* <div className="py-2"></div> */}
                <div className="py-3">
                  <p className="text-[#555] text-xl font-bold mt-1 pb-2 font-FarfetchRegular">Qty</p>
                  <div className="flex gap-4 pt-2 items-center font-FarfetchRegular">
                    <button
                      onClick={decrease}
                      className="h-10 font-FarfetchRegular aspect-square rounded-full bg-white grid place-items-center font-medium"
                    >
                      <Icon icon="ic:round-minus" style={{ fontSize: 30 }} />
                    </button>
                    <p className="text-3xl font-NimbusSan font-normal">
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
                      className="h-10 font-FarfetchRegular aspect-square rounded-full bg-white grid place-items-center font-medium"
                    >
                      <Icon icon="ph:plus-bold" style={{ fontSize: 25 }} />
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
                  variant="rectangle"
                  onClick={onClick}
                  className="  bg-app-black md:px-8 w-full px-10 disabled:bg-[#848484]"
                >
                  Add to Cart
                </Button>
               
           
              ) : (
                
                <Button variant="rectangle"  className=" bg-app-black md:px-8 px-10 w-full focus:outline-none font-medium">
                  <Link to='/cart'>
                  Go to Cart
                  </Link>
                 
                  </Button>
                  

               
              )}
                <Button
                 variant="rectangle"
                 onClick={onClickCheckout}
                 className="bg-[#27D34C] text-white  md:px-8 w-full px-10 focus:outline-none font-medium  disabled:bg-[#848484]"
               >
                 Buy Now
               </Button>
              </div>
             
            </div>
          </div>
        </div>

         {/* STYLE THE UI APPROPRAITELY */}
         <div className="">
         {/* {Array.isArray(product.layerWith) && product.layerWith.length > 0 && (
  <div className="md:flex md:flex-col font-FarfetchRegular">
    <Heading>You can layer with</Heading>
    <ListGrid>
      {product.layerWith.map((product) => (
        <Product
          key={product._id}
          id={product._id}
          product={product.name}
          category={product.category}
          originalPrice={product.price}
          image={product.productImage || product.mainImage}
        />
      ))}
    </ListGrid>
  </div>
)} */}

{Array.isArray(recommend) &&recommend.length > 0 && (
  <div className="mb-4">
  <div className="flex justify-between gap-2 mt-8">
  <Heading className="mt-3 mb-[-10px] font-FarfetchBold font-bold text-app-black">We also Recommend</Heading>
    <div className="hidden md:flex gap-2" >
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
  
      {/* <h2>The cards for We Also Recommend</h2> */}
      
      <ul
        className="pt-8 w-full  gap-6 flex  sm:flex-nowrap overflow-auto sm:no-scrollbar"
        ref={ref}
      >
       

        
      {recommend.map((product) => (
        <li  className="md:flex-shrink-0 grow" key={product._id}>
 <Product
 
          key={product.product._id}
          id={product.product._id}
          product={product.product.name}
          category={product.product.category}
          originalPrice={product.product.price}
          image={product.product.productImage || product.product.mainImage}
          className="min-w-[11rem]"
        />
        </li>
       
      ))}
      
    
    </ul>
  </div>
)}
 
{Array.isArray(product.layerWith) && product.layerWith.length > 0 && (
  <div className="mb-4">
 <div className="flex justify-between gap-2 mt-8">
  <Heading className="mt-3 mb-[-10px] font-FarfetchBold font-bold text-app-black">Product you can Layer With  </Heading>
    <div className="hidden md:flex gap-2" >
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
  
      {/* <h2>The cards for We Also Recommend</h2> */}
      
      <ul
        className="pt-8 w-full  gap-6 flex  sm:flex-nowrap overflow-auto sm:no-scrollbar"
        ref={ref}
      >
   {product.layerWith.map((product) => (
        <li  className="md:flex-shrink-0 grow" key={product._id}>
        <Product
          key={product._id}
          id={product._id}
          product={product.name}
          category={product.category}
          originalPrice={product.price}
          image={product.productImage || product.mainImage}
           className="min-w-[11rem]"
        />
        </li>
      ))}
      
    
    </ul>
  </div>
)}
         </div>



        <ProductDetail productId={product._id} />
      </Wrapper>
    </>
  );
};
