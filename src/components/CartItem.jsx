import { Icon } from "@iconify/react";
import { CartItemQuantity } from "./CartItemQuantity";
import { useCart } from "../hooks/useCart";
import { Modal } from "./Modal";
import { Button } from "./ui/Button";
import { useState } from "react";

export const CartItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const { removeFromCart } = useCart();

  return (
    <div className="text-sm sm:text-md">
      <div className="grid grid-cols-12 grid-rows-3 items-center">
        <div className="flex items-center gap-2 col-span-9 row-span-3 md:col-span-6">
          <div className="w-20 min-h-[96px] bg-app-ash-1">
            <img src="" alt="" className="w-20" />
          </div>

          <div>
            <p>{item.description}</p>
            <button
              className="inline-flex items-center gap-2 hover:bg-app-ash-1 p-1 rounded-sm"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Icon icon="uil:times" style={{ fontSize: 24 }} /> Remove
            </button>
          </div>
        </div>

        <p className="hidden md:block md:row-span-2 md:text-center md:col-span-2">
          #{item.unitPrice}
        </p>

        <div className="grid items-center justify-end col-end-13 col-start-10 row-span-2 md:justify-center md:items-start md:row-span-3 md:text-center md:col-start-9 md:col-end-11">
          <CartItemQuantity quantity={item.quantity} productId={item.id} />
        </div>
        
        <p className="col-end-13 col-start-10 text-right md:row-span-2 md:text-center md:col-start-11 md:col-end-13">
          #{item.quantity * item.unitPrice}
        </p>
      </div>
      {showModal && (
        <Modal title="Remove Item From Cart?">
          <p>
            Are you sure you want to remove "
            <span className="text-app-red font-medium">{item.description}</span>
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
                removeFromCart(item.id);
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
