import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { Modal } from "./Modal";
import { Button } from "./ui/Button";
import { Icon } from "@iconify/react";

export const CartItemQuantity = ({ productId, quantity }) => {
  const { cart, setItemQuantity, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const increaseQty = () => {
    const item = cart.find((c) => c.id === productId);
    setItemQuantity(productId, item.quantity + 1);
  };
  const decreaseQty = () => {
    const item = cart.find((c) => c.id === productId);
    if (item.quantity - 1 < 1) {
      return setShowModal(true);
    }
    setItemQuantity(productId, item.quantity - 1);
  };

  return (
    <div className="grid grid-cols-12 grid-rows-6">
      <button
        className="h-8 text-2xl w-6 col-start-1 col-end-7 row-start-4 row-end-7 md:h-auto md:row-start-1 md:col-end-4"
        onClick={decreaseQty}
      >
        <Icon icon="tdesign:minus"/>
      </button>
      <input
        type="number"
        value={quantity}
        className="w-8 mx-auto h-7 text-center outline-none border-black border-2 text-lg rounded col-start-1 col-end-13 row-start-1 row-end-4 md:row-end-7 md:border-none"
        onChange={(e) => {
          const val = e.target.value;
          if (Number(val) === 0) return;
          setItemQuantity(productId, Number(val));
        }}
      />
      <button
        className="grid place-items-center h-8 text-2xl w-6 col-start-7 col-end-13 row-start-4 row-end-7 md:h-auto md:row-start-1 md:col-start-10"
        onClick={increaseQty}
      >
        <Icon icon="tdesign:plus" />
      </button>

      {showModal && (
        <Modal title="Remove Item From Cart?">
          <p>
            Are you sure you want to remove "
            <span className="text-app-red font-medium">
              {cart.find((c) => c.id === productId).description}
            </span>
            " from cart? <br /> Click "
            <span className="text-app-red">Cancel</span>" to cancel or "Remove"
            to remove item from cart
          </p>
          <div className="flex gap-12 justify-center items-center pt-8">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <Button
              className="bg-app-black text-white font-bold"
              onClick={() => {
                removeFromCart(productId);
                setShowModal(false);
              }}
            >
              Remove
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
