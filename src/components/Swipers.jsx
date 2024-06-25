import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

export const SwiperElem = () => {
  const ref = useRef();

  useEffect(() => {
    register();
    const swiperEl = ref.current;
    const swiperParams = {
      loop: true,
      speed: 200,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          const arr = [];
          for (let i = 0; i < total; i++) {
            arr.push(i + 1);
          }
          const elem = arr.map((val) => {
            return `<li style="background-color:white;height:${
              val == current ? "14px" : "8px"
            };width:64px;border-radius:20px"/>`;
          });
          return elem.join("");
        },
      },
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }, []);

  return (
    <div className="relative w-full md:w-[calc(100%-292px)]">
      <swiper-container
        ref={ref}
        slides-per-view="1"
        navigation="true"
        init="false"
        a11y-prev-slide-message="Previous slide"
        a11y-next-slide-message="Next slide"
        autoplay="true"
        autoplay-delay="5000"
      >
        <swiper-slide
          style={{
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          {/* <div className="min-h-[240px] h-[40vw] bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
            <div>
              <div className="title w-full  bg-[#A40001]">
                <div className="flex flex-col gap-4 px-20 pt-32">
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    Step into a world
                  </h1>
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    of scented
                  </h1>
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    seduction
                  </h1>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, dolor.
                  </p>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, nostrum.
                  </p>
                </div>
                <img src={elipses} className="absolute top-0 right-0 z-[1]" />
                <img
                  src={heroimg}
                  className="absolute bottom-0 right-0 z-[2]"
                />
                <div className="px-20 pt-8 mx-auto">
                  <button className="px-16 py-2 font-semibold text-black bg-white rounded-full ">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </swiper-slide>
        {/* <swiper-slide
          style={{
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div className="min-h-[240px] h-[40vw] bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
            <div>
              <div className="title w-full  bg-[#A40001]">
                <div className="flex flex-col gap-4 px-20 pt-32">
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    Step into a world
                  </h1>
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    of scented
                  </h1>
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    seduction
                  </h1>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, dolor.
                  </p>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, nostrum.
                  </p>
                </div>
                <img src={elipses} className="absolute top-0 right-0 z-[1]" />
                <img
                  src={heroimg}
                  className="absolute bottom-0 right-0 z-[2]"
                />
                <div className="px-20 pt-8 mx-auto">
                  <button className="px-16 py-2 font-semibold text-black bg-white rounded-full ">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style={{
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div className="min-h-[240px] h-[40vw] bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
            <div>
              <div className="title w-full  bg-[#A40001]">
                <div className="flex flex-col gap-4 px-20 pt-32">
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    Step into a world
                  </h1>
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    of scented
                  </h1>
                  <h1 className="text-[#fff] lg:text-5xl sm:text-2xl font-bold leading-tight -mt-7">
                    seduction
                  </h1>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum, dolor.
                  </p>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, nostrum.
                  </p>
                </div>
                <img src={elipses} className="absolute top-0 right-0 z-[1]" />
                <img
                  src={heroimg}
                  className="absolute bottom-0 right-0 z-[2]"
                />
                <div className="px-20 pt-8 mx-auto">
                  <button className="px-16 py-2 font-semibold text-black bg-white rounded-full ">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide> */}
      </swiper-container>

      <button className="swiper-button-prev flex absolute bg-[#3333] w-12 h-12 z-50 left-8 top-1/2 items-center justify-center rounded-full">
        <Icon
          icon="fa6-solid:angle-right"
          style={{ fontSize: 10 }}
          color="white"
          hFlip="true"
        />
      </button>
      <button className="swiper-button-next flex absolute bg-[#3333] w-12 h-12 z-50 right-8 top-1/2 items-center justify-center rounded-full">
        <Icon
          icon="fa6-solid:angle-right"
          style={{ fontSize: 10 }}
          color="green"
        />
      </button>
      <ul className="absolute z-10 flex items-center gap-2 swiper-pagination bottom-4 left-4 md:bottom-8"></ul>
    </div>
  );
};
