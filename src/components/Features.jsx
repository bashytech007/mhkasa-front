import cycle from "../assets/images/cycle.svg";
import bus from "../assets/images/bus.svg";
import pointer from "../assets/images/mouse-pointer.svg";
import { Wrapper } from "./Wrapper";

export const Features = () => {
  return (
    <div className="bg-white">
      <Wrapper className="grid py-6 justify-center min-[520px]:py-12 min-[520px]:grid-cols-3">
        <div className="py-7 flex justify-center items-center gap-2 text-[#323232] font-bold min-[520px]:py-2 min-[520px]:flex-col">
          <img src={pointer} alt="" className="h-12 aspect-square" />
          <p>
            <span>One Click</span> <span>Checkout</span>
          </p>
        </div>
        <div className="py-7 flex justify-center items-center gap-2 text-[#323232] font-bold min-[520px]:py-2 border-b-2 border-app-red border-t-2 min-[520px]:flex-col min-[520px]:border-r-2 min-[520px]:border-l-2 min-[520px]:border-t-0 min-[520px]:border-b-0">
          <img src={bus} alt="" className="h-12 aspect-square" />
          <p>
            <span>Same Day</span> <span>Delivery</span>
          </p>
        </div>
        <div className="py-7 flex  justify-center items-center gap-2 text-[#323232] font-bold min-[520px]:py-2 min-[520px]:flex-col">
          <img src={cycle} alt="" className="h-12 aspect-square" />
          <p>
            <span>7 Days Return</span> <span>Policy</span>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
