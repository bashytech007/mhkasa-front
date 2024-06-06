// import { Wrapper } from "../components/ui/Wrapper";
// import { Navigation } from "../components/ui/Navigation";
// import { SectionHeader } from "../components/ui/SectionHeader";
// import { useInfiniteProducts } from "../hooks/query/useProducts";
// import { Product } from "../components/ProductCard";
// import banner from "../assets/images/banner.png";
// import { Sort } from "../components/Sort";
// import { Seo } from "../components/Seo";
// import { useSearchParams } from "react-router-dom/dist";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { Fragment } from "react";

// export const Component = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortBy = searchParams.get("sort") || "";
//   const search = searchParams.get("s") || "";

//   const {
//     data,
//     status,
//     error,
//     fetchNextPage,
//     isFetchingNextPage,
//     isFetching,
//     hasNextPage,
//   } = useInfiniteProducts(`search?name=${search}&sort=${sortBy}`, "search");
//   const onClick = (term) => {
//     if (typeof term !== "string") return;
//     if (!term) {
//       searchParams.delete("sort");
//       return setSearchParams(searchParams);
//     }
//     setSearchParams({ ...searchParams, sort: term });
//   };

//   return (
//     <>
//       <Seo
//         title={`Mkhasa | Search`}
//         type="webapp"
//         description={`Search For Perfumes On Mkhasa Store`}
//         name=""
//       />
//       <section>
//         <div className="relative">
//           <div className="absolute right-0 left-0 top-0 bottom-0 bg-[#3333]" />
//           <div className="absolute left-0 w-full top-1/3">
//             <Wrapper>
//               <Navigation
//                 location={[
//                   { description: "Home", to: "/", title: "Go to Home Page" },
//                   {
//                     description: "Search",
//                     to: `${location.pathname}${location.search}`,
//                   },
//                 ]}
//                 className="text-xl py-4"
//                 iconClassName="text-2xl"
//                 currentLocationClassName="text-white"
//               />
//               <h2 className="text-3xl font-bold tracking-tighter text-white md:tracking-normal">
//                 Search Results for "{search}"
//               </h2>
//             </Wrapper>
//           </div>
//           <img
//             src={banner}
//             alt=""
//             className="object-cover object-center w-full min-h-48 max-h-60"
//           />
//         </div>
//         <Wrapper className="py-6">
//           <div className="flex items-center justify-between py-4">
//             <SectionHeader header="Search" />
//             <Sort onclick={onClick} sort={sortBy} />
//           </div>
//           {status === "pending" ? (
//             "Loading..."
//           ) : status === "error" ? (
//             `An error has occurred ${error.message}`
//           ) : (
//             <>
//               <ul className="grid justify-center grid-flow-row grid-cols-2 gap-4 pt-8 auto-rows-fr sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//                 {data.pages.map((group, i) => (
//                   <Fragment key={i}>
//                     {group.products.map((product) => (
//                       <li key={product._id}>
//                         <Product
//                           product={product.name}
//                           category={product.category}
//                           originalPrice={product.price}
//                           discountedPrice={product?.discountedPrice}
//                           image={product.mainImage}
//                           id={product._id}
//                         />
//                       </li>
//                     ))}
//                   </Fragment>
//                 ))}
//               </ul>
//               <div>
//                 <button
//                   onClick={() => fetchNextPage()}
//                   disabled={isFetchingNextPage}
//                   className={`${!hasNextPage ? "hidden" : ""}`}
//                 >
//                   {isFetchingNextPage ? "Loading more..." : "Load More"}
//                 </button>
//               </div>
//               <div className="flex justify-center">
//                 {isFetching && !isFetchingNextPage ? (
//                   <Icon
//                     icon="svg-spinners:3-dots-bounce"
//                     className="text-4xl"
//                   />
//                 ) : null}
//               </div>
//             </>
//           )}
//         </Wrapper>
//       </section>
//     </>
//   );
// };
// import { Wrapper } from "../components/ui/Wrapper";
// import { Navigation } from "../components/ui/Navigation";
// import { SectionHeader } from "../components/ui/SectionHeader";
// import { useInfiniteProducts } from "../hooks/query/useProducts";
// import { Product } from "../components/ProductCard";
// import banner from "../assets/images/banner.png";
// import { Sort } from "../components/Sort";
// import { Seo } from "../components/Seo";
// import { useSearchParams } from "react-router-dom/dist";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { Fragment } from "react";

// export const Component = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const sortBy = searchParams.get("sort") || "";
//   const search = searchParams.get("s") || "";

//   const {
//     data,
//     status,
//     error,
//     fetchNextPage,
//     isFetchingNextPage,
//     isFetching,
//     hasNextPage,
//   } = useInfiniteProducts(`search?name=${search}&sort=${sortBy}`, "search");
  
//   const onClick = (term) => {
//     if (typeof term !== "string") return;
//     if (!term) {
//       searchParams.delete("sort");
//       return setSearchParams(searchParams);
//     }
//     setSearchParams({ ...searchParams, sort: term });
//   };

//   const isEmpty = data?.pages?.[0]?.products.length === 0;

//   return (
//     <>
//       <Seo
//         title={`Mkhasa | Search`}
//         type="webapp"
//         description={`Search For Perfumes On Mkhasa Store`}
//         name=""
//       />
//       <section>
//         <div className="relative">
//           <div className="absolute right-0 left-0 top-0 bottom-0 bg-[#3333]" />
//           <div className="absolute left-0 w-full top-1/3">
//             <Wrapper>
//               <Navigation
//                 location={[
//                   { description: "Home", to: "/", title: "Go to Home Page" },
//                   {
//                     description: "Search",
//                     to: `${location.pathname}${location.search}`,
//                   },
//                 ]}
//                 className="text-xl py-4"
//                 iconClassName="text-2xl"
//                 currentLocationClassName="text-white"
//               />
//               <h2 className="text-3xl font-bold tracking-tighter text-white md:tracking-normal">
//                 Search Results for "{search}"
//               </h2>
//             </Wrapper>
//           </div>
//           <img
//             src={banner}
//             alt=""
//             className="object-cover object-center w-full min-h-48 max-h-60"
//           />
//         </div>
//         <Wrapper className="py-6">
//           <div className="flex items-center justify-between py-4">
//             <SectionHeader header="Search" />
//             <Sort onclick={onClick} sort={sortBy} />
//           </div>
//           {status === "pending" ? (
//             "Loading..."
//           ) : status === "error" ? (
//             `An error has occurred ${error.message}`
//           ) : (
//             <>
//               {isEmpty ? (
//                 <div className="text-center">
//                   <p className="md:text-3xl text-2xl font-bold font-Farfetch">We don't have what you're looking for this time, but why not take recommendations made for you. Alternatively, shop by category.</p>
//                   {/* Add your recommendations and categories here */}
//                 </div>
//               ) : (
//                 <>
//                   <ul className="grid justify-center grid-flow-row grid-cols-2 gap-4 pt-8 auto-rows-fr sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//                     {data.pages.map((group, i) => (
//                       <Fragment key={i}>
//                         {group.products.map((product) => (
//                           <li key={product._id}>
//                             <Product
//                               product={product.name}
//                               category={product.category}
//                               originalPrice={product.price}
//                               discountedPrice={product?.discountedPrice}
//                               image={product.mainImage}
//                               id={product._id}
//                             />
//                           </li>
//                         ))}
//                       </Fragment>
//                     ))}
//                   </ul>
//                   <div>
//                     <button
//                       onClick={() => fetchNextPage()}
//                       disabled={isFetchingNextPage}
//                       className={`${!hasNextPage ? "hidden" : ""}`}
//                     >
//                       {isFetchingNextPage ? "Loading more..." : "Load More"}
//                     </button>
//                   </div>
//                   <div className="flex justify-center">
//                     {isFetching && !isFetchingNextPage ? (
//                       <Icon
//                         icon="svg-spinners:3-dots-bounce"
//                         className="text-4xl"
//                       />
//                     ) : null}
//                   </div>
//                 </>
//               )}
//             </>
//           )}
//         </Wrapper>
//       </section>
//     </>
//   );
// };
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { SectionHeader } from "../components/ui/SectionHeader";
import { useInfiniteProducts } from "../hooks/query/useProducts";
import { Product } from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { Sort } from "../components/Sort";
import { Seo } from "../components/Seo";
import { useSearchParams } from "react-router-dom/dist";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Fragment, useEffect } from "react";

export const Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "";
  const search = searchParams.get("s") || "";

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    hasNextPage,
    refetch,
  } = useInfiniteProducts(`search?name=${search}&sort=${sortBy}`, "search");
  
  const onClick = (term) => {
    if (typeof term !== "string") return;
    if (!term) {
      searchParams.delete("sort");
      return setSearchParams(searchParams);
    }
    setSearchParams({ ...searchParams, sort: term });
  };

  useEffect(() => {
    // Refetch data whenever search parameters change
    refetch();
  }, [search, sortBy, refetch]);

  const isEmpty = data?.pages?.[0]?.products.length === 0;

  return (
    <>
      <Seo
        title={`Mkhasa | Search`}
        type="webapp"
        description={`Search For Perfumes On Mkhasa Store`}
        name=""
      />
      <section>
        <div className="relative">
          <div className="absolute right-0 left-0 top-0 bottom-0 bg-[#3333]" />
          <div className="absolute left-0 w-full top-1/3">
            <Wrapper>
              <Navigation
                location={[
                  { description: "Home", to: "/", title: "Go to Home Page" },
                  {
                    description: "Search",
                    to: `${location.pathname}${location.search}`,
                  },
                ]}
                className="text-xl py-4"
                iconClassName="text-2xl"
                currentLocationClassName="text-white"
              />
              <h2 className="text-3xl font-bold tracking-tighter text-white md:tracking-normal">
                Search Results for "{search}"
              </h2>
            </Wrapper>
          </div>
          <img
            // src={banner}
            alt=""
            className="object-cover object-center w-full min-h-48 max-h-60"
          />
        </div>
        <Wrapper className="py-6">
          <div className="flex items-center justify-between py-4">
            <SectionHeader header="Search" />
            <Sort onclick={onClick} sort={sortBy} />
          </div>
          {status === "pending" ? (
            "Loading..."
          ) : status === "error" ? (
            `An error has occurred ${error.message}`
          ) : (
            <>
              {isEmpty ? (
                <div className="text-center">
                  <p className="md:text-3xl text-xl font-bold font-Farfetch">We don't have what you're looking for this time, but why not take recommendations made for you. Alternatively, shop by category.</p>
                  {/* Add your recommendations and categories here */}
                </div>
              ) : (
                <>
                  <ul className="grid justify-center grid-flow-row grid-cols-2 gap-4 pt-8 auto-rows-fr sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {data.pages.map((group, i) => (
                      <Fragment key={i}>
                        {group.products.map((product) => (
                          <li key={product._id}>
                            <Product
                              product={product.name}
                              category={product.category}
                              originalPrice={product.price}
                              discountedPrice={product?.discountedPrice}
                              image={product.mainImage}
                              id={product._id}
                            />
                          </li>
                        ))}
                      </Fragment>
                    ))}
                  </ul>
                  <div>
                    <button
                      onClick={() => fetchNextPage()}
                      disabled={isFetchingNextPage}
                      className={`${!hasNextPage ? "hidden" : ""}`}
                    >
                      {isFetchingNextPage ? "Loading more..." : "Load More"}
                    </button>
                  </div>
                  <div className="flex justify-center">
                    {isFetching && !isFetchingNextPage ? (
                      <Icon
                        icon="svg-spinners:3-dots-bounce"
                        className="text-4xl"
                      />
                    ) : null}
                  </div>
                </>
              )}
            </>
          )}
        </Wrapper>
      </section>
    </>
  );
};
