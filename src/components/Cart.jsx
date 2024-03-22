import { useCartQuery } from "../hooks/query/useCart";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { status, data } = useCartQuery();
  return (
    <div className="bg-white py-6 px-4 rounded-3xl my-4">
      <div className="grid font-bold pb-4 sm:grid-cols-12">
        <p className="sm:col-span-6">Items</p>
        <p className="hidden text-center md:block sm:col-span-2">Unit Price</p>
        <p className="hidden text-center md:block sm:col-span-2">Qty</p>
        <p className="hidden text-center md:block sm:col-span-2">Total</p>
      </div>
      {status === "pending" ? (
        "Loading Cart"
      ) : !data?.items || data.items.length === 0 ? (
        <p>You have not selected any item for purchase</p>
      ) : (
        <ul>
          {data.items.map((item, i) => (
            <li key={i} className="py-2">
              <CartItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
