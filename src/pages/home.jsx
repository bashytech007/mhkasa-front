import { Wrapper } from "../components/ui/Wrapper";
import { Features } from "../components/Features";
import { SwiperElem } from "../components/Swiper";
// import { CategoryPanel } from "../components/CategoryPanel";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { LatestProducts } from "../components/LatestProducts";
import { TopCategories } from "../components/TopCategories";
import { Seo } from "../components/Seo";
import { Sales } from "../components/Sales";
import { NewArrivals } from "../components/NewArrivals";
import { BestSellers } from "../components/BestSellers";

export const Component = () => {
  return (
    <main>
      <Seo title="Mkhasa | Home" type="webapp" name="" />
      <Wrapper>
        <div className="flex gap-8 py-10">
          {/* <CategoryPanel fixedHeight /> */}
          <SwiperElem />
        </div>
        <LatestProducts />
        <NewArrivals/>
        <FeaturedProducts />
        <BestSellers/>
        <TopCategories />
      </Wrapper>
        <Sales />
      <div className="pt-6">
        <Features />
      </div>
    </main>
  );
};
