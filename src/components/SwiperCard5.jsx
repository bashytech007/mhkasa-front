
import ninepmimg from "../assets/images/9pm.webp";
import { Link } from "react-router-dom";
export const SwiperCard5 = () => {
  return (

    <div className="w-full max-h-screen rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <div className="bg-third-card-image h-screen">
      <div className="">
      <Link to="/products/66711ca37216bd00159220e4">
        <img
          src={ninepmimg}
          fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-0 top-0 right-0 left-0 w-full h-full"
        />
      </Link>
    </div>
      </div>
    </div>
  );
};