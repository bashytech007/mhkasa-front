import { useParams } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Fragment } from "react";
import { useInfiniteProducts } from "../hooks/query/useProducts";
import { Product } from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { Icon } from "@iconify/react";
import { TopCategories } from "../components/TopCategories";
import { Sort } from "../components/Sort";
import { Seo } from "../components/Seo";
import { useLoaderData } from "react-router-dom/dist";

export const Component = () => {
  const { category } = useParams();
  if (!category) throw new Error("Invalid category");

  const sort = [
    {
      term: "",
      url: "",
      key: [],
    },
    {
      term: "New Arrival",
      url: "",
      key: [],
    },
    {
      term: "New Arrival",
      url: "",
      key: [],
    },
    {
      term: "New Arrival",
      url: "",
      key: [],
    },
  ];

  const { fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteProducts("product/category/" + category, "category", category);

  const { categories } = useLoaderData();
  console.log(categories);

  return (
    <>
      <Seo
        title={`Mhkasa | ${category}`}
        type="webapp"
        description={`Get the best ${category} from Mhkasa Store`}
        name=""
      />
      <section>
        <div className="relative">
          <div className="absolute right-0 left-0 top-0 bottom-0 bg-[#3333]" />
          <div className="absolute w-full top-1/3 left-0">
            <Wrapper>
              <Navigation
                location={[
                  { description: "Home", to: "/", title: "Go to Home Page" },
                  { description: "Category", to: "/" },
                ]}
                className="text-xl"
              />
              <h2 className="font-bold text-white text-3xl tracking-tighter md:tracking-normal">
                {category}
              </h2>
            </Wrapper>
          </div>
          <img
            src={banner}
            alt=""
            className="min-h-48 max-h-60 w-full object-center object-cover"
          />
        </div>
        <Wrapper className="py-6">
          <TopCategories />
          <div className="flex justify-between items-center py-4">
            <SectionHeader header={category} />
            <Sort />
          </div>
          {status === "pending" ? (
            "Loading..."
          ) : status === "error" ? (
            `An error has occurred`
          ) : (
            <>
              <ul className="pt-8 grid gap-4 justify-center grid-flow-row auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {categories.pages.map((group, i) => (
                  <Fragment key={i}>
                    {group.products.map((product) => (
                      <li key={product._id}>
                        <Product
                          product={product.name}
                          category={product.category}
                          originalPrice={product.price}
                          discountedPrice={product?.discountedPrice}
                          image={product.mainImage}
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
        </Wrapper>
      </section>
    </>
  );
};

export const LatestProducts = () => {};
