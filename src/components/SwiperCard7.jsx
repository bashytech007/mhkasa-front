import clubimg from "../assets/images/club.webp";
import { Link } from "react-router-dom";
export const SwiperCard7 = () => {
  return (

    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <div className="bg-fifth-card-image h-screen">
      <div className="">
      <Link to="/products/66711ca37216bd00159220e4">
        <img
          src={clubimg}
          fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-0 top-0 right-0 left-0 w-full h-full"
        />
      </Link>
    </div>
      </div>
    </div>
  );
};