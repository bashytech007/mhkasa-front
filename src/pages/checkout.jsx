import { Button } from "../components/ui/Button";
import { Navigation } from "../components/ui/Navigation";
import { Wrapper } from "../components/ui/Wrapper";
import { useCartQuery } from "../hooks/query/useCart";
import { Seo } from "../components/Seo";
import { Heading } from "../components/Heading";
import { OrderSummary } from "../components/OrderTotal";
import { CartItems } from "../components/Cart";
import { cn } from "../utils/cn";
import {  useEffect, useState } from "react";
import { useAuth } from "../hooks/utils/useAuth";
import axios from "../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import * as yup from "yup";
import { Input } from "../components/Input";
import { useFormik } from "formik";

export const Component = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    name: yup.string().required(),
    address: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      mutation.mutate(values);
    },
  });

  const { getUserId } = useAuth();
  console.log(getUserId())
  const mutation = useMutation({
    mutationFn: (payload) => {
      return axios.post(`create/order/${getUserId()}`, payload);
    },
    onSuccess: (res) => {
      console.log(res);
      window.location.href = res.data.paymentLink;
    },
  });
useEffect(()=>{
 axios.get(`/get/user/${getUserId()}`).then((res)=>{
  console.log(res.data)
  formik.values.email=res.data.user.email
  formik.values.phone=res.data.user.phoneNumber
  formik.values.address=res.data.user.address
 })

},[])

  return (
    <main>
      <Seo
        title="Mkhasa | Checkout"
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
          <form
            onSubmit={formik.handleSubmit}
            id="checkout-form"
            className="grid gap-6 md:col-span-6 lg:col-span-7 xl:col-span-8"
          >
            <PersonalDetails formik={formik} />
            <DeliveryDetails formik={formik} />
            {/* <PaymentMethod /> */}
          </form>
          <div className="md:col-span-6 lg:col-span-5 xl:col-span-4">
            <CartSummary isPending={mutation.isPending} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const PersonalDetails = ({ className, formik }) => {

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
          <Input
            placeholder="Your Full Name"
            formik={formik}
            name="name"
            className="bg-app-ash-1"
          />
        </div>

        <div className="grid w-full gap-3 @md:grid-cols-2">
          <Input
            placeholder="Your Email"
            formik={formik}
            name="email"
            className="bg-app-ash-1"
          />
          <Input
            placeholder="Your Phone"
            formik={formik}
            name="phone"
            className="bg-app-ash-1"
          />
        </div>
      </div>
    </div>
  );
};

const DeliveryDetails = ({ className, formik }) => {
   
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
            <Input
              type="text"
              placeholder="Address"
              formik={formik}
              name="address"
              className="bg-app-ash-1"
            />
          </div>
          <div className="col-span-12 @sm:col-span-4">
            <Input
              type="text"
              placeholder="City"
              formik={formik}
              name="city"
              className="bg-app-ash-1"
            />
          </div>
        </div>

        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @sm:col-span-6">
            <Input
              type="text"
              placeholder="State"
              formik={formik}
              name="state"
              className="bg-app-ash-1"
            />
          </div>
          <div className="col-span-12 @sm:col-span-6">
            <Input
              type="text"
              placeholder="Country"
              formik={formik}
              name="country"
              className="bg-app-ash-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// const PaymentMethod = ({ className }) => {
//   const [paymentMethod, setPaymentMethod] = useState("online");

//   return (
//     <div className={cn("bg-white rounded-xl p-5", className)}>
//       <div className="flex items-center gap-3 border-b-2 pb-4">
//         <p className="bg-app-ash-1 w-8 aspect-square rounded-full grid place-items-center font-bold">
//           3
//         </p>
//         <Heading>Payment Method</Heading>
//       </div>
//       <div className="flex items-center py-4 gap-3">
//         <div className="inline-flex items-center gap-2">
//           <div
//             className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
//               paymentMethod === "online"
//                 ? "before:bg-current"
//                 : "before:bg-transparent"
//             }`}
//           />
//           <button type="button" onClick={() => setPaymentMethod("online")}>
//             Online
//           </button>
//         </div>
//         <div className="inline-flex items-center gap-2">
//           <div
//             className={`relative w-5 h-5 rounded-full border-[2px] border-current before:inset-[1px] before:rounded-full before:absolute ${
//               paymentMethod === "payOnDelivery"
//                 ? "before:bg-current"
//                 : "before:bg-transparent"
//             }`}
//           />
//           <button
//             type="button"
//             onClick={() => setPaymentMethod("payOnDelivery")}
//           >
//             Pay On Delivery
//           </button>
//         </div>
//       </div>

//       {paymentMethod === "online" ? (
//         <div className="py-2 grid gap-4">
//           <div>
//             <button type="button">Flutterwave</button>
//           </div>
//           <div>
//             <button type="button">Paystack</button>
//           </div>
//         </div>
//       ) : paymentMethod === "payOnDelivery" ? (
//         <div className="py-2 grid gap-4">
//           <p>
//             Pay on Delivery not available for now, please use online payment
//             option
//           </p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

const CartSummary = ({ className, isPending }) => {
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
          <Button
            type="submit"
            form="checkout-form"
            className="bg-green-500 text-white font-bold w-full mt-6"
          >
            {isPending ? (
              <Icon
                icon="svg-spinners:6-dots-rotate"
                style={{ fontSize: 20 }}
                className="text-center"
              />
            ) : (
              "Pay Now"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};