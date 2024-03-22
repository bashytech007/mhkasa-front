import { Button } from "./ui/Button";
import heroimg from "../assets/images/_Downloader1.png";
import elipses from "../assets/images/Ellipse 28.png";

export const SwiperCard = () => {
  return (
    <div>
      <div className="min-h-[410px] w-[945px] sm:w-[w-337px] bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
        <div>
          <div className="w-full title ">
            <div className="flex flex-col gap-4 px-20 sm:gap-0 md:pt-36 sm:pt:14px">
              <h1 className="text-[#fff] lg:text-5xl sm:text-2xl sm:pt-2 md:text-3xl font-bold leading-tight md:-mt-28 ">
                Step into a world
              </h1>
              <h1 className="text-[#fff] lg:text-5xl sm:text-2xl sm:pt-2 md:text-3xl font-bold leading-tight md:-mt-8 md:pt-6">
                of scented
              </h1>
              <h1 className="text-[#fff] lg:text-5xl sm:text-2xl sm:pt-2 md:text-3xl font-bold leading-tight md:-mt-8 md:pt-8">
                seduction
              </h1>
              <p className="text-white sm:text-xs md:text-sm">
                discover your signature scent, one spritz at a time.
              </p>
            </div>
            <img
              src={elipses}
              className="absolute top-0 right-0 z-[1] md:w-[200px] sm:w-[115px]"
            />
            <img
              src={heroimg}
              className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 z-[2] md:w-[515px]  sm:w-[317px]"
            />
            <div className="px-20 pt-8 mx-auto">
              <button className="font-semibold text-black bg-white rounded-full md:px-16 md:py-2 sm:px-4 sm:py-2 ">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
