import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

export const Product = ({
  product,
  category,
  originalPrice,
  discountedPrice,
  image,
  id,
}) => {

  return (
    <div className="bg-white rounded-2xl overflow-hidden h-full @container">
      <div className="h-24">
        <img
          src={image}
          alt=""
          className="h-full w-full"
          width={295}
          height={170}
        />
      </div>

      <div className="px-4 pt-2 pb-4 flex text-sm flex-col h-[calc(100%-6rem)]">
        <p className="text-app-red font-medium @[240px]:text-app-ash-2">
          {category}
        </p>
        <h2 className="text-app-black font-bold text-[16px] pt-1 line-clamp-2">
          {product}
        </h2>
        <div className="flex pt-2 mt-auto gap-y-4 gap-x-3 flex-col @[240px]:flex-row @[240px]:items-center @[240px]:justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-3">
                <p className="line-through text-app-ash-1 text-xs">
                  #{originalPrice}
                </p>
                <p>#{discountedPrice}</p>
              </div>
            ) : (
              <p>#{originalPrice}</p>
            )}
          </div>

          <Link to={`/products/${id}`}>
            <Button className="bg-app-red text-app-ash font-medium text-nowrap text-sm mt-auto @[240px]:bg-app-black">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
