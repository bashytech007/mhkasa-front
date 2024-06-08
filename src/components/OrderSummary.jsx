// import React, { useEffect, useState } from "react";
// import { formatCurrency, getUserCountry } from "../utils/lib";
// import { useCartQuery } from "../hooks/query/useCart";
// import { cn } from "../utils/cn";

// export const OrderSummary = ({ alignToEnd, address }) => {
//   const [userCurrency, setUserCurrency] = useState();
//   const { status, data } = useCartQuery();

//   useEffect(() => {
//     setUserCurrency(getUserCountry());
//   }, []);

//   const calculateDeliveryFee = () => {
//     const isLagos = address?.toLowerCase().includes("lagos");
//     const subTotal = data?.subTotal || 0;

//     if (subTotal >= 100000) {
//       return 0;
//     }

//     return isLagos ? 2500 : 5000;
//   };

//   const deliveryFee = calculateDeliveryFee();

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
//             <p>{formatCurrency(data?.discount || "", userCurrency)}</p>
//           </div>
//           <div
//             className={cn(
//               `flex items-center justify-between py-1`,
//               alignToEnd ? "md:justify-end gap-3" : ""
//             )}
//           >
//             <h2>Delivery Fee:</h2>
//             <p>{formatCurrency(deliveryFee, userCurrency)}</p>
//           </div>
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
//             <p>
//               {formatCurrency(
//                 data.subTotal - (data?.discount ?? 0) + deliveryFee,
//                 userCurrency
//               )}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
