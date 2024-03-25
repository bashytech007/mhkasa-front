import { Button } from "../components/ui/Button";
import { Navigation } from "../components/ui/Navigation";
import { Wrapper } from "../components/ui/Wrapper";
import { useCartQuery } from "../hooks/query/useCart";
import { Seo } from "../components/Seo";
import { useAuth } from "../hooks/utils/useAuth";
import { Heading } from "../components/Heading";
import { OrderSummary } from "../components/OrderTotal";
import { CartItems } from "../components/Cart";
import { cn } from "../utils/cn";
import { useRef, useState } from "react";

export const Component = () => {
  const { getUserId } = useAuth();
  const { status, data } = useCartQuery();

  return (
    <main>
      <Seo
        title="Mhkasa | Checkout"
        description="Complete TranscationF"
        type="webapp"
        name=""
      />

      <Wrapper className="py-4">
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "Cart", to: "/cart" },
            { description: "Checkout", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div className="grid gap-6 md:col-span-6 lg:col-span-7 xl:col-span-8">
            <PersonalDetails />
            <DeliveryDetails />
            <PaymentMethod />
          </div>
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <CartSummary />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const PersonalDetails = ({ className }) => {
  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          1
        </p>
        <Heading>Personal Details</Heading>
      </div>
      <div className="@container py-4 grid gap-3">
        <div>
          <Input type="text" placeholder="Your Full Name" />
        </div>

        <div className="grid w-full gap-3 @md:grid-cols-2">
          <Input type="text" placeholder="Your Email" />
          <Input type="text" placeholder="Your Phone" />
        </div>
      </div>
    </div>
  );
};

const DeliveryDetails = ({ className }) => {
  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          2
        </p>
        <Heading>Delivery Details</Heading>
      </div>
      <div className="@container py-4 grid gap-3">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-8">
            <Input type="text" placeholder="Address" />
          </div>
          <div className="col-span-12 @sm:col-span-4">
            <Input type="text" placeholder="City" />
          </div>
        </div>

        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-6">
            <Input type="text" placeholder="State" />
          </div>
          <div className="col-span-12 @sm:col-span-6">
            <Input type="text" placeholder="Country" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentMethod = ({ className }) => {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
          3
        </p>
        <Heading>Payment Method</Heading>
      </div>
      <div className="flex items-center py-4 gap-3">
        <div className="inline-flex items-center gap-2">
          <div
            className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
              paymentMethod === "online"
                ? "before:bg-current"
                : "before:bg-transparent"
            }`}
          />
          <button onClick={() => setPaymentMethod("online")}>Online</button>
        </div>
        <div className="inline-flex items-center gap-2">
          <div
            className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
              paymentMethod === "payOnDelivery"
                ? "before:bg-current"
                : "before:bg-transparent"
            }`}
          />
          <button onClick={() => setPaymentMethod("payOnDelivery")}>
            Pay On Delivery
          </button>
        </div>
      </div>

      {paymentMethod === "online" ? (
        <div className="py-2 grid gap-4">
          <div>
            <button>Flutterwave</button>
          </div>
          <div>
            <button>Paystack</button>
          </div>
        </div>
      ) : paymentMethod === "payOnDelivery" ? (
        <div className="py-2 grid gap-4">
          <p>
            Pay on Delivery not available for now, please use online payment
            option
          </p>
        </div>
      ) : null}
    </div>
  );
};

const CartSummary = ({ className }) => {
  const { data } = useCartQuery();
  return (
    <div className={cn("bg-white rounded-xl p-5", className)}>
      <div className="flex items-center gap-3 border-b-2 pb-4">
        <Heading className="text-app-black">Item(s)</Heading>
      </div>
      <div>
        <CartItems />
        <OrderSummary />

        {!data?.items || data.items.length === 0 ? null : (
          <Button className="bg-black text-white font-bold w-full mt-6">
            Pay Now
          </Button>
        )}
      </div>
    </div>
  );
};

const Input = (props) => {
  return (
    <input
      className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full"
      {...props}
    />
  );
};
