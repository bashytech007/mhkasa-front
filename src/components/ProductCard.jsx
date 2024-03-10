import { Button } from "./Button";

export const Product = ({
  product,
  category,
  originalPrice,
  discountedPrice,
  image,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden min-w-[220px] h-full">
      <div className="h-36">
        <img
          src={image}
          alt=""
          className="h-full  w-full"
          width={295}
          height={170}
        />
      </div>

      <div className="px-4 py-6 flex flex-col h-[calc(100%-9rem)] bg-blak">
        <p className="text-app-ash-2">{category}</p>
        <h2 className="text-app-black font-bold text-xl pt-2">{product}</h2>
        <div className="flex items-center justify-between pt-3 mt-auto0 gap-y-4 gap-x-3">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-3">
                <p className="line-through text-app-ash-1">#{originalPrice}</p>
                <p>#{discountedPrice}</p>
              </div>
            ) : (
              <p>#{originalPrice}</p>
            )}
          </div>

          <Button className="bg-app-black text-app-ash font-medium text-nowrap text-sm">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};
