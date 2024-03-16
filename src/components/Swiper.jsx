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
              val == current ? "10px" : "7px"
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
          <div className="min-h-[240px] h-[40vw] md:h-[460px]">
            <div className="h-full bg-app-red rounded-3xl overflow-hidden">
              Render your carousel slide here
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style={{
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div className="min-h-[240px] h-[40vw] md:h-[460px]">
            <div className="h-full bg-green-600 rounded-3xl overflow-hidden">
              Render your carousel slide here
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style={{
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div className="min-h-[240px] h-[40vw] md:h-[460px]">
            <div className="h-full  bg-yellow-600 rounded-3xl overflow-hidden">
              Render your carousel slide here
            </div>
          </div>
        </swiper-slide>
      </swiper-container>

      <button className="swiper-button-prev flex absolute bg-[#3333] w-12 h-12 z-10 left-8 top-1/2 items-center justify-center rounded-full">
        <Icon
          icon="fa6-solid:angle-right"
          style={{ fontSize: 36 }}
          color="white"
          hFlip="true"
        />
      </button>
      <button className="swiper-button-next flex absolute bg-[#3333] w-12 h-12 z-10 right-8 top-1/2 items-center justify-center rounded-full">
        <Icon
          icon="fa6-solid:angle-right"
          style={{ fontSize: 36 }}
          color="white"
        />
      </button>
      <ul className="swiper-pagination flex gap-2 items-end absolute bottom-4 z-10 left-4 md:bottom-8"></ul>
    </div>
  );
};
