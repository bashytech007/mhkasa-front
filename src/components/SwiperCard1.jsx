import { Button } from "./ui/Button";
import dolceimg from "../assets/images/dolceonly.png";

export const SwiperCard1 = () => {
  return (
    <div>
      <div className="bg-image min-h-[400px] md:w-full rounded-3xl md:h-[420px]">
        <div>
          <div className="w-full title ">
            <div className="flex flex-col gap-4 px-4 md:pt-10">
              <h1 className="text-[#000] lg:text-5xl  text-base md:text-3xl font-bold leading-tight md:-mt-2 md:pt-4">
                scented dreams,
              </h1>
              <h1 className="text-[#000] lg:text-5xl   text-base md:text-3xl font-bold leading-tight md:-mt-6 md:pt-2">
                bottled just for
              </h1>
              <h1 className="text-[#000] lg:text-5xl text-base md:text-3xl font-bold leading-tight md:-mt-4 md:pt-2">
                You
              </h1>
              <p className="text-sm -mt-2 text-[#323232] sm:text-xs">
                Eleveate your senses with our enchating Fragnances
              </p>
            </div>
            <img
              src={dolceimg}
              className="absolute bottom-0 top-0 right-0  sm:bottom-2 sm:right-2 z-[2] w-[400px]"
            />
            <div className="px-2 pt-2 mx-auto">
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
