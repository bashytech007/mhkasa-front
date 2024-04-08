import { Button } from "./ui/Button";
import heroimg from "../assets/images/_Downloader1.png";
import elipses from "../assets/images/Ellipse 28.png";

export const SwiperCard = () => {
  return (
    <div>
      <div className="min-h-[410px] md:w-[945px] w-full bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
        <div>
          <div className="w-full title ">
            <div className="flex flex-col gap-1 px-4 md:-mt-10 mt:32 pt:30 md:gap-2 md:px-28 md:pt-20">
              <h1 className="text-[#fff] lg:text-5xl text-base  pt-28 -mt-10 md:text-3xl font-bold leading-tight md:-mt-24 md:pt-24 ">
                Step into A world
              </h1>
              <h1 className="text-[#fff] lg:text-5xl text-base -mt-2 md:text-3xl font-bold leading-tight md:-mt-28 md:pt-24">
                of scented
              </h1>
              <h1 className="text-[#fff] lg:text-5xl text-base -mt-2  md:text-3xl font-bold leading-tight md:-mt-28 md:pt-24">
                seduction
              </h1>
              <p className="hidden text-xs text-white md:block md:text-sm">
                discover your signature scent, one spritz at a time.
              </p>
            </div>
            <img
              src={elipses}
              className="absolute top-0 right-0 z-[1] md:w-[180px] w-[105px]"
            />
            <img
              src={heroimg}
              className="absolute md:bottom-0 md:right-0 bottom-2 right-2 z-[2] md:w-[415px]  w-[314px]"
            />
            <div className="px-4 pt-2 md:px-24">
              <button className="px-1 py-1 font-semibold text-black bg-white rounded-full md:px-6 md:py-2 sm:px-3">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
