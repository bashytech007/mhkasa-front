
import ninepmimg from "../assets/images/9pm2.jpeg";
import { Link } from "react-router-dom";
export const SwiperCard5 = () => {
  return (

    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <div className="bg-third-card-image h-screen">
      <div className="">
      <Link to="/products/66711ca37216bd00159220e4">
        <img
          src={ninepmimg}
          fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-28 -top-36 right-0 sm:bottom-2 sm:right-2 w-[400px]"
        />
      </Link>
    </div>
      </div>
    </div>
  );
};