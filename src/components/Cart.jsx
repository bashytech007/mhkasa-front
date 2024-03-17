import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="bg-white py-6 px-4 rounded-3xl my-4">
      <div className="grid font-bold pb-4 sm:grid-cols-12">
        <p className="sm:col-span-6">Items</p>
        <p className="hidden text-center md:block sm:col-span-2">Unit Price</p>
        <p className="hidden text-center md:block sm:col-span-2">Qty</p>
        <p className="hidden text-center md:block sm:col-span-2">Total</p>
      </div>
      {!cart || cart.length === 0 ? (
        <p>You have not selected any item for purchase</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
