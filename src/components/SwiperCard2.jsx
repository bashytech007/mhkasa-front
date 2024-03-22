import heroimg from "../assets/images/Getpaid.png";
import elipses from "../assets/images/Rectangle7.png";

export const SwiperCard2 = () => {
  return (
    <div>
      <div className="min-h-[410px] w-[945px] sm:w-[w-337px] bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
        <div>
          <div className="w-full title ">
            <div className="flex flex-col gap-4 px-20 sm:gap-0 md:pt-36 sm:pt:14px">
              <h1 className="text-[#fff] lg:text-5xl sm:text-sm sm:pt-2 md:text-3xl font-bold leading-tight md:-mt-28 ">
                Swift & Fast
              </h1>
              <h1 className="text-[#fff] lg:text-5xl sm:text-sm sm:pt-2 md:text-3xl font-bold leading-tight md:-mt-8 md:pt-6">
                Delivery
              </h1>
              <p className="text-white sm:text-xs md:text-sm z-[5]">
                swift delivery,seamless service, bringing convenience to your
              </p>
              <p className="text-white sm:text-xs md:text-sm z-[5]">
                doorstep.
              </p>
            </div>
            <img
              src={elipses}
              className="absolute top-0 right-0 z-[1] md:w-[200px] sm:w-[200px]"
            />
            <img
              src={heroimg}
              className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 z-[2] md:w-[357px]  sm:w-[317px]"
            />
            <div className="px-20 pt-8 mx-auto">
              <button className="md:px-16 md:py-2 sm:px-4 sm:py-2  font-semibold text-white bg-[#A40001] shadow-2xl  rounded-full ">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
