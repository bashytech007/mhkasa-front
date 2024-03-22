import { Button } from "./ui/Button";
import dolceimg from "../assets/images/dolceonly.png";

export const SwiperCard1 = () => {
  return (
    <div>
      <div className="bg-image min-h-[410px] w-full object-contain rounded-3xl  md:pt-4 md:h-[460px]">
        <div>
          <div className="w-full title ">
            <div className="flex flex-col gap-4 px-20 ">
              <h1 className="text-[#000] lg:text-5xl sm:-mt-4 sm:pt-8 sm:text-2xl md:text-3xl font-bold leading-tight md:-mt-2 md:pt-2">
                scented dreams,
              </h1>
              <h1 className="text-[#000] lg:text-5xl sm:-mt-4 sm:pt-3 sm:text-2xl md:text-3xl font-bold leading-tight md:-mt-4 md:pt-2">
                bottled just for
              </h1>
              <h1 className="text-[#000] lg:text-5xl sm:-mt-4 sm:pt-3 sm:text-2xl md:text-3xl font-bold leading-tight md:-mt-2 md:pt-2">
                You
              </h1>
              <p className="text-sm md:pt-2 text-[#323232] sm:text-xs">
                Eleveate your senses with our enchating Fragnances
              </p>
            </div>
            <img
              src={dolceimg}
              className="absolute bottom-0 top-0 right-0  sm:bottom-2 sm:right-2 z-[2] md:w-[1050px]  sm:w-[400px] sm:h-[300px]"
            />
            <div className="px-20 pt-2 mx-auto">
              <button className="md:px-16 md:py-2 sm:px-4 sm:py-2  font-semibold text-white bg-[#A40001] rounded-full ">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
