import { Link } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Success } from "../components/Success";
import { Seo } from "../components/Seo";

export const Component = () => {
  return (
    <>
      <Seo
        title="Mhkasa | Checkout Complete"
        description="Complete Transcation"
        type="webapp"
        name=""
      />
      <Wrapper className="py-8">
        <Success>
          <h2 className="mt-6 text-xl font-bold">Success</h2>
          <p className="mx-auto max-w-lg text-center">
            You have successfully placed your order, you can track your order
            status{" "}
            <Link to="/account/order-history" className="text-app-red">
              here
            </Link>
            , below are related products that goes with what you just purchased.
          </p>
        </Success>
      </Wrapper>
    </>
  );
};
