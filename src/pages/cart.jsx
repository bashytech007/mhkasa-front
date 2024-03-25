import { useState } from "react";
import { Cart } from "../components/Cart";
import { Heading } from "../components/Heading";
import { Modal } from "../components/Modal";
import { Button } from "../components/ui/Button";
import { Navigation } from "../components/ui/Navigation";
import { Wrapper } from "../components/ui/Wrapper";
import { useCartQuery } from "../hooks/query/useCart";
import { Seo } from "../components/Seo";
import { useCartContext } from "../hooks/utils/useCart";

export const Component = () => {
  const [showModal, setShowModal] = useState(false);
  const { status, data } = useCartQuery();
  const { clearCart } = useCartContext();
  return (
    <main>
      <Seo
        title="Mhkasa | Cart"
        description="Your Mhkasa shopping Cart"
        type="webapp"
        name=""
      />
      <Wrapper className="py-4">
        <Navigation location={["Home", "Cart"]} />
        <div className="flex items-center justify-between">
          <Heading className="pt-2">Your Shopping Cart</Heading>
          {status === "success" && data.items.length > 0 && (
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              Clear All
            </button>
          )}
        </div>

        <Cart />

        <div className="py-4">
          <CouponCode />
        </div>
      </Wrapper>
      {showModal && (
        <Modal title="Clear All Items?">
          <p>
            Are you sure you want to clear cart? Click "
            <span className="text-app-red">CANCEL</span>" to cancel or "CLEAR"
            if you will love to clear your cart
          </p>
          <div className="flex gap-12 justify-center items-center pt-8">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              CANCEL
            </button>
            <Button
              className="bg-app-black text-white font-bold"
              onClick={() => {
                clearCart();
                setShowModal(false);
              }}
            >
              CLEAR
            </Button>
          </div>
        </Modal>
      )}
    </main>
  );
};

const CouponCode = () => {
  return (
    <div className="bg-red-100 rounded-full overflow-hidden relative max-w-lg">
      <input
        type="text"
        className="py-2 w-full pl-4 pr-32 outline-none"
        placeholder="Enter Discount Code"
      />
      <button className="bg-app-black absolute right-0 top-0 bottom-0 w-28 text-white">
        Apply
      </button>
    </div>
  );
};
