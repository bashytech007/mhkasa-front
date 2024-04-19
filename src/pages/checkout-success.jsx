import { Link, useSearchParams } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Success } from "../components/Success";
import { Seo } from "../components/Seo";
import { useEffect, useState } from "react";
import axios from "../utils/axios";

export const Component = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const [verification, setVerification] = useState("pending");

  useEffect(() => {
    const verifyPayment = async () => {
      const res = await axios.post(
        `/verify/payment/${tx_ref}/${transaction_id}`
      );
      if (res.status == 200) {
        setVerification(res.data ? "successful" : "failed");
      }
    };
     status === 'successful' && verifyPayment();
  }, []);

  return (
    <>
      <Seo
        title="Mhkasa | Checkout Complete"
        description="Complete Transcation"
        type="webapp"
        name=""
      />
      <Wrapper className="py-8">
        {status !== "successful" ? (
          <>Your transaction has failed Pls try again</>
        ) : verification === "pending" ? (
          <>Your Payment is being Processed ...</>
        ) : verification === 'successful' ? (
          <Success>
            <h2 className="mt-6 text-xl font-bold">Success</h2>
            <p className="mx-auto max-w-lg text-center">
              You have successfully placed your order, you can track your order
              status{" "}
              <Link to="/account/order-history" className="text-app-red">
                here
              </Link>
              , below are related products that goes with what you just
              purchased.
            </p>
          </Success>
        ) : <>Show failed transaction UI</>}
      </Wrapper>
    </>
  );
};