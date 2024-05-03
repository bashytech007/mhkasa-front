import { useParams } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Fragment } from "react";
import { useInfiniteProducts } from "../hooks/query/useProducts";
import { Product } from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import { Icon } from "@iconify/react";
import { Sort } from "../components/Sort";
import { Seo } from "../components/Seo";
import { useLoaderData, useSearchParams } from "react-router-dom/dist";
import { TopCategories } from "../components/TopCategories";

export const Component = () => {
  const { category } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  if (!category) throw new Error("Invalid category");
  const { categories } = useLoaderData();
  const sortBy = searchParams.get("sort") || "";
 const url=sortBy?`product/category/${sortBy}/${category}`:`product/category/${category}`


  const { fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, } =
    useInfiniteProducts(
      url,
      "category",
      category,
      sortBy
    );

  const onClick = (term) => {
    if (typeof term !== "string") return;
    if (!term) {
      searchParams.delete("sort");
      return setSearchParams(searchParams);
    }
    setSearchParams({ ...searchParams, sort: term });
  };

  return (
    <>
      <Seo
        title={`Mkhasa | ${category}`}
        type="webapp"
        description={`Get the best ${category} from Mkhasa Store`}
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
                  { description: category, to: "/" },
                ]}
                className="text-xl py-4"
                iconClassName="text-2xl"
                currentLocationClassName="text-white"
              />
              <h2 className="text-3xl font-bold tracking-tighter text-white md:tracking-normal">
                {category}
              </h2>
            </Wrapper>
          </div>
          <img
            src={banner}
            alt=""
            className="object-cover object-center w-full min-h-48 max-h-60"
          />
        </div>
        <Wrapper className="py-6">
          <TopCategories />
          <div className="flex items-center justify-between py-4">
            <SectionHeader header={category} />
            <Sort onClick={onClick} sort={sortBy} />
          </div>
          {status === "pending" ? (
            "Loading..."
          ) : status === "error" ? (
            `An error has occurred`
          ) : (
            <>
              <ul className="grid justify-center grid-flow-row grid-cols-2 gap-4 pt-8 auto-rows-fr sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
        </Wrapper>
      </section>
    </>
  );
};
