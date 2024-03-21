import { Button } from "./ui/Button";
import heroimg from "../assets/images/_Downloader1.png";
import elipses from "../assets/images/Ellipse 28.png";

export const SwiperCard = () => {
  return (
    <div className="title w-full text-white  bg-app-red">
      <div className="flex flex-col gap-4 px-20">
        <h1 className="lg:text-5xl sm:text-2xl font-bold leading-tight">
          Step into a world of scented seduction
        </h1>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          dolor.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          nostrum.
        </p>
      </div>
      <img src={elipses} className="absolute top-0 right-0 z-[1]" />
      <img src={heroimg} className="absolute bottom-0 right-0 z-[2]" />
      <div className="mx-auto px-20 pt-8">
        <Button className="text-black bg-white px-16 font-bold">
          Explore Collection
        </Button>
      </div>
    </div>
  );
};
