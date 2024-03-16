import { CartItem } from "./CartItem";

export const Cart = ({ items }) => {
  return (
    <div className="bg-white py-6 px-4 rounded-3xl my-4">
      <div className="grid">
        <p className="font-bold">Items</p>
        <p className="hidden sm:block">Unit Price</p>
        <p className="hidden sm:block">Qty</p>
        <p className="hidden sm:block">Total</p>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
