import { Link, useSearchParams } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Success } from "../components/Success";
import { Seo } from "../components/Seo";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Error } from "../components/Error";

export const Component = () => {
  const [searchParams] = useSearchParams();
  const provider = searchParams.get("provider");
  const [verification, setVerification] = useState("pending");

  const status = searchParams.get("status");

  const tx_ref =
    provider === "paystack"
      ? searchParams.get("txref")
      : provider === "flutterwave"
      ? searchParams.get("tx_ref")
      : "";

  const transaction_id =
    provider === "paystack"
      ? searchParams.get("reference")
      : provider === "flutterwave"
      ? searchParams.get("transaction_id")
      : "";
  // const transaction_id = provider === "paystack"? searchParams.get("transaction_id");

  useEffect(() => {
    const verifyFlutterwavePayment = async () => {
      try {
        const res = await axios.post(
          `/verify/payment/${tx_ref}/${transaction_id}`
        );

        if (res.status === 200) {
          setVerification(res.data ? "successful" : "failed");
        }
      } catch (error) {
        setVerification("failed");
      }
    };

    const verifyPaystackPayment = async () => {
      try {
        const res = await axios.post(
          `/verify/paystack/payment/${transaction_id}`
        );

        if (res.status === 200) {
          setVerification(res.data ? "successful" : "failed");
        }
      } catch (error) {
        setVerification("failed");
      }
    };

    if (provider === "flutterwave" && status === "successful")
      verifyFlutterwavePayment();
    else verifyPaystackPayment();
  }, []);

  return (
    <>
      <Seo
        title="Mkhasa | Checkout Complete"
        description="Complete Transaction"
        type="webapp"
        name=""
      />
      <Wrapper className="py-8 ">
        {verification === "pending" ? (
          <>Your Payment is being Processed ...</>
        ) : verification === "successful" ? (
          <Success>
            <h2 className="mt-6 text-xl font-bold">Success</h2>
            <p className="mx-auto max-w-lg text-center">
              You have successfully placed your order, you can track your order
              status
              <Link to="/account/order-history" className="text-app-red">
                here
              </Link>
              , below are related products that go with what you just purchased.
            </p>
          </Success>
        ) : verification === "failed" ? (
          <Error>
            <h2 className="mt-6 text-xl font-bold">Failed</h2>
            <p className="mx-auto max-w-lg text-center ">
              Sorry, your transaction failed. Please check that you have not
              been debited and contact your bank. Click
              <Link to="/" className="text-app-red px-2">
                here
              </Link>
              to return to home.
            </p>
          </Error>
        ) : (
          <Icon
            icon="svg-spinners:6-dots-rotate"
            style={{ fontSize: 100, display: "grid", placeItems: "center" }}
            className="text-center"
          />
        )}
      </Wrapper>
    </>
  );
};
