import { cn } from "../utils/cn";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
import { format } from "../utils/lib";
export const Product = ({
  product,
  category,
  originalPrice,
  discountedPrice,
  image,
  id,
  className,
}) => {
  return (
    <Link to={`/products/${id}`}>
    <div
      className={cn(
        "bg-white rounded-2xl overflow-hidden  h-full @container font-FarfetchRegular",
        className
      )}
    >
      <div className="w-full aspect-[1.25] relative">
        <img
          src={image}
          alt=""
          className="h-full w-full absolute object-cover "
        />
      </div>

      <div className="px-4 pt-2 pb-4 flex text-sm flex-col h-[calc(100%-6rem)]">
        <p className="text-[#555] font-medium @[240px]:text-app-ash-2 font-FarfetchRegular">
          {category}
        </p>
        <h2 className="text-app-black font-bold text-[16px] text-nowrap pt-1 line-clamp-2 font-FarfetchRegular">
          {product}
        </h2>
        <div className="flex pt-2 gap-y-4 gap-x-3 flex-col @[240px]:flex-row @[240px]:items-center @[240px]:justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-3 font-NimbusSan">
                <p className="line-through font-NimbusSan text-app-ash-1 text-xs">
                  ₦{format(originalPrice)}
                </p>
                <p>₦{format(discountedPrice)}</p>
              </div>
            ) : (
              <p>₦{format(originalPrice)}</p>
            )}
          </div>
          
            <Button variant="rectangle" className="md:hidden font-FarfetchRegular block bg-app-black  md:w-full px-8 text-center text-app-ash font-medium text-nowrap text-sm mt-auto @[240px]:bg-app-black">
              Buy Now
            </Button>
            <Button variant="rectangle" className="hidden md:block font-FarfetchRegular">
              Add To Cart
            </Button>
        </div>
      </div>
    </div>
          </Link>
  );
};
