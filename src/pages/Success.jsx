import success from "../assets/images/success_check.webp";
import { Wrapper } from "../components/Wrapper";
import { Link } from "react-router-dom";

export const Component = () => {
  return (
    <Wrapper className="py-8">
      <div className="mx-auto w-fit flex flex-col items-center my-10">
        <img src={success} alt="" />
        <h2 className="font-bold text-xl mt-6">Successfully</h2>
        <p>your account has been created</p>
        <Link
          to="/"
          className="bg-app-black px-[120px] text-white mt-6 font-bold text-xl rounded-full py-2"
          replace
        >
          Okay
        </Link>
      </div>
    </Wrapper>
  );
};
