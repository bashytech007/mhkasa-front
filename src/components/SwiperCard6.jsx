import armafimg from "../assets/images/armaf2.jpeg";
import { Link } from "react-router-dom";
export const SwiperCard6 = () => {
  return (

    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <div className="bg-fourth-card-image h-screen">
      <div className="">
      <Link to="/products/66711ca37216bd00159220e4">
        <img
          src={armafimg}
          fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-0 -top-12 right-0 sm:bottom-2 sm:right-2 w-[400px]"
        />
      </Link>
    </div>
      </div>
    </div>
  );
};