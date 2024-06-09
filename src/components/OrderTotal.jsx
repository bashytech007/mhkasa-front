import { useEffect, useState } from "react";
import { formatCurrency, getUserCountry } from "../utils/lib";
import { Button } from "./ui/Button";
import { useCartQuery } from "../hooks/query/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";

export const OrderTotal = ({}) => {
  const { data } = useCartQuery();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const [deliveryFee,SetDeliveryFee]=useState(()=>{
  //   console.log(deliveryFee)
  //   return (
  //     data.subTotal > 100_000? 0: state && state === "lagos" ? 2500 : 5000
  //   )
  // });
  // useEffect(()=>{
  //   console.log({deliveryFee})
  // },[])
// console.log(deliveryFee)
  const proceed = async () => {
    queryClient.fetchQuery({
      queryKey: ["cart"],
      exact: true,
    });
    navigate("/checkout");
  };

  return (
    <div className="py-4 md:flex md:justify-between">
      <div>
        <CouponCode />
      </div>
      <div>
        <OrderSummary alignToEnd />

        <div className="pt-6">
          {!data?.items || data.items.length === 0 ? null : (
            <Button
              onClick={proceed}
              variant="rectangle"
              className="bg-app-red font-medium w-full text-white md:bg-app-black"
            >
              Proceed To Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const OrderSummary = ({ alignToEnd, state }) => {
  const [userCurrency, setUserCurrency] = useState();

  const { status, data } = useCartQuery();

  useEffect(() => {
    setUserCurrency(getUserCountry());
  }, []);

  return (
    <>
      {status === "pending" ? (
        "Loading ..."
      ) : !data?.items || data.items.length === 0 ? null : (
        <div className="font-medium pt-6 md:p-0">
          <div
            className={cn(
              `flex items-center justify-between py-1`,
              alignToEnd ? "md:justify-end gap-3" : ""
            )}
          >
            <h2>Subtotal:</h2>
            <p>{formatCurrency(data.subTotal, userCurrency)}</p>
          </div>
          <div
            className={cn(
              `flex items-center justify-between py-1`,
              alignToEnd ? "md:justify-end gap-3" : ""
            )}
          >
            <h2>Discount:</h2>
            <p>{formatCurrency(data?.discount || "", userCurrency)}</p>
          </div>
          <div
            className={cn(
              `flex items-center justify-between py-1`,
              alignToEnd ? "md:justify-end gap-3" : ""
            )}
          >
            <h2 className="text-blue-400">Delivery Fee:</h2>
            <p>
              {data.subTotal > 100_000
                ? formatCurrency(0, userCurrency)
                : formatCurrency(
                    state && state === "lagos" ? 2500 : 5000,
                    userCurrency
                  )}
            </p>
          </div>
          <div
            className={cn(
              `flex items-center justify-between py-1 text-app-red`,
              alignToEnd ? "md:justify-end gap-3" : ""
            )}
          >
            <h2>7.5% VAT Inclusive</h2>
          </div>
          <div
            className={cn(
              "flex items-center justify-between pb-1 pt-2 font-bold",
              alignToEnd ? "md:justify-end gap-3" : ""
            )}
          >
            <h2>Total:</h2>
            <p>
              {formatCurrency(
                data.subTotal - (data?.discount ?? 0),
                userCurrency
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const CouponCode = () => {
  return (
    <div className="bg-red-100 rounded-full overflow-hidden relative max-w-lg md:w-[480px]">
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

// // import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import { formatCurrency, getUserCountry } from "../utils/lib"; // Ensure this formats in Naira by default
// import { Button } from "./ui/Button";
// import { useCartQuery } from "../hooks/query/useCart";
// import { useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { cn } from "../utils/cn";

// export const OrderTotal = ({ state, showDeliveryFee = false }) => {
//   const { data } = useCartQuery();
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [userCurrency, setUserCurrency] = useState('NGN');

//   useEffect(() => {
//     if (data) {
//       const fee = data.subTotal > 100_000 ? 0 : state && state === "lagos" ? 2500 : 5000;
//       setDeliveryFee(fee);
//       setTotal(data.subTotal - (data?.discount ?? 0) + (showDeliveryFee ? fee : 0));
//     }
//   }, [data, state, showDeliveryFee]);

//   const proceed = async () => {
//     queryClient.fetchQuery({
//       queryKey: ["cart"],
//       exact: true,
//     });
//     navigate("/checkout");
//   };

//   return (
//     <div className="py-4 md:flex md:justify-between">
//       <div>
//         <div className="bg-red-100 rounded-full overflow-hidden relative max-w-lg md:w-[480px]">
//           <input
//             type="text"
//             className="py-2 w-full pl-4 pr-32 outline-none"
//             placeholder="Enter Discount Code"
//           />
//           <button className="bg-app-black absolute right-0 top-0 bottom-0 w-28 text-white">
//             Apply
//           </button>
//         </div>
//       </div>
//       <div>
//         <OrderSummary alignToEnd state={state} showDeliveryFee={showDeliveryFee} />

//         <div className="pt-6">
//           {data?.items && data.items.length > 0 && (
//             <Button
//               onClick={proceed}
//               variant="rectangle"
//               className="bg-app-red font-medium w-full text-white md:bg-app-black"
//             >
//               Proceed To Checkout
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export const OrderSummary = ({ alignToEnd, state, showDeliveryFee }) => {
//   const [userCurrency, setUserCurrency] = useState('NGN');
//   const { status, data } = useCartQuery();
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     setUserCurrency(getUserCountry());
//   }, []);

//   useEffect(() => {
//     if (data) {
//       const fee = data.subTotal > 100_000 ? 0 : state && state === "lagos" ? 2500 : 5000;
//       setDeliveryFee(fee);
//       setTotal(data.subTotal - (data?.discount ?? 0) + (showDeliveryFee ? fee : 0));
//     }
//   }, [data, state, showDeliveryFee]);

//   return (
//     <>
//       {status === "pending" ? (
//         "Loading ..."
//       ) : !data?.items || data.items.length === 0 ? null : (
//         <div className="font-medium pt-6 md:p-0">
//           <div
//             className={cn(
//               `flex items-center justify-between py-1`,
//               alignToEnd ? "md:justify-end gap-3" : ""
//             )}
//           >
//             <h2>Subtotal:</h2>
//             <p>{formatCurrency(data.subTotal, userCurrency)}</p>
//           </div>
//           <div
//             className={cn(
//               `flex items-center justify-between py-1`,
//               alignToEnd ? "md:justify-end gap-3" : ""
//             )}
//           >
//             <h2>Discount:</h2>
//             <p>{formatCurrency(data?.discount || 0, userCurrency)}</p>
//           </div>
//           {showDeliveryFee && (
//             <div
//               className={cn(
//                 `flex items-center justify-between py-1`,
//                 alignToEnd ? "md:justify-end gap-3" : ""
//               )}
//             >
//               <h2 className="text-blue-400">Delivery Fee:</h2>
//               <p>{formatCurrency(deliveryFee, userCurrency)}</p>
//             </div>
//           )}
//           <div
//             className={cn(
//               `flex items-center justify-between py-1 text-app-red`,
//               alignToEnd ? "md:justify-end gap-3" : ""
//             )}
//           >
//             <h2>7.5% VAT Inclusive</h2>
//           </div>
//           <div
//             className={cn(
//               "flex items-center justify-between pb-1 pt-2 font-bold",
//               alignToEnd ? "md:justify-end gap-3" : ""
//             )}
//           >
//             <h2>Total:</h2>
//             <p>{formatCurrency(total, userCurrency)}</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
