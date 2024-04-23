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
const [status,setStatus] =useState(searchParams.get("status")) ;
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const [verification, setVerification] = useState("pending");
console.log(verification)
  useEffect(() => {
    const verifyPayment = async () => {

    try {
      const res = await axios.post(
        `/verify/payment/${tx_ref}/${transaction_id}`
      );
      if (res.status == 200) {
        console.log("succesfull")
        setVerification(res.data ? "successful" : "failed");
      }
    } catch (error) {
      console.log("failed")
      setVerification("failed")
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
      <Wrapper className="py-8 ">
        {  status !== "successful" ? (
          <>Your transaction has failed Pls try again</>
        ) : verification === "pending" ? (
          <>Your Payment is being Processed ...</>
        ) : verification === 'successful' ? (
          <Icon
          icon="svg-spinners:6-dots-rotate"
          style={{ fontSize: 100,display:"grid",placeItems:"center" }}
          className="text-center"
        />        ) : verification === 'successful' ? (
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
        ) :  verification === 'failed' ?(
          <Error>
          <h2 className="mt-6 text-xl font-bold">Failed</h2>
              <p className="mx-auto max-w-lg text-center">
                Sorry Your transaction Failed , Pls Check that you have not been debited and contact your bank
                 Click
                <Link to="/" className="text-app-red">
                  here
                </Link>
                to return to home
              </p>
            </Error>
          
        ):""
          }
      </Wrapper>
    </>
  );
};