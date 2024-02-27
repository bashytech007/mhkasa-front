import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="">
      <div className="bg-[#C4C4C4] w-full h-full pt-5 flex flex-col items-center px-2 py-10 justify-between">
        <h2 className="pt-4 text-lg font-bold text-[#A40001]">
          Password Reset
        </h2>
        <div className="text-[#555555] mb-4 pt-4 text-center">
          Password Reset Link will be sent to your email.{" "}
          <span className="text-[#555555] block mt-2">
            Know Your password?{" "}
            <Link to="/login" className="ml-1 text-[#A0A0A0]">
              Login Here
            </Link>
          </span>
        </div>

        <form className="w-full max-w-lg bg-[#FFF] overflow-hidden rounded-xl px-6 mt-4 pt-4">
          <div className="flex flex-wrap mb-4 -mx-3">
            <div className="w-full mb-6">
              <input
                className="block w-full px-9 py-3  leading-tight text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
                id="Email"
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="w-full px-3 mb-4">
              <button
                className="shadow-sm w-full bg-[#000] hover:bg-[#000] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-full"
                type="button"
              >
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
