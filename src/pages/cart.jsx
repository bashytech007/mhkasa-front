import { Cart } from "../components/Cart";
import { Heading } from "../components/Heading";
import { Navigation } from "../components/ui/Navigation";
import { Wrapper } from "../components/ui/Wrapper";

export const Component = () => {
  return (
    <main>
      <Wrapper className="py-4">
        <Navigation location={["Home", "Cart"]} />
        <Heading className="pt-2">Your Shopping Cart</Heading>

        <Cart
          items={[
            {
              quantity: 1,
              unitPrice: 124,
              description: "Product 1",
              id: 1234,
            },
            {
              quantity: 1,
              unitPrice: 3290,
              description: "Product Category 1",
              id: 1234,
            },
            {
              quantity: 1,
              unitPrice: 123909,
              description: "Category Product 1",
              id: 1234,
            },
          ]}
        />

        <div className="py-4">
          <CouponCode />
        </div>
      </Wrapper>
    </main>
  );
};

const CouponCode = () => {
  return (
    <div className="bg-red-100 rounded-full overflow-hidden relative">
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
