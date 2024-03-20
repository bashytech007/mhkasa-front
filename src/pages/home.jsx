import { Wrapper } from "../components/ui/Wrapper";
import { Features } from "../components/Features";
import { SwiperElem } from "../components/Swiper";
import { CategoryPanel } from "../components/CategoryPanel";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { LatestProducts } from "../components/LatestProducts";
import { TopCategories } from "../components/TopCategories";

export const Component = () => {


  return (
    <main>
      <Wrapper>
        <div className="flex gap-8 py-10">
          <CategoryPanel fixedHeight/>
          <SwiperElem />
        </div>
        
        <FeaturedProducts />
        <TopCategories />
        <LatestProducts />
      </Wrapper>
      <div className="pt-6">
        <Features />
      </div>
    </main>
  );
};
