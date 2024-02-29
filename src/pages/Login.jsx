import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="">
      <div className="bg-[#C4C4C4] w-full h-full pt-5 flex flex-col items-center px-2 py-10 justify-between">
        <h2 className="pt-4 text-lg font-bold text-[#A40001]">Login</h2>
        <p className="text-[#000]  mb-4 pt-4">
          Your Welcome back don&rsquo;t have an account?,
          <span className="text-[#A0A0A0]">
            <Link to="/register">Register Here </Link>
          </span>
        </p>

        <form className="w-full max-w-lg overflow-hidden rounded-xl px-6 mt-4 pt-4">
          <div className="flex flex-wrap mb-4 -mx-3">
            <div className="w-full mb-6">
              <input
                className="block w-full px-9 py-3 text-xs leading-tight text-[#555] bg-[#FFFFFF] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
                id="Email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col items-center w-full mb-6">
              <input
                className="block w-full px-9 py-3 leading-tight text-xs  text-[#555] bg-[#F5F5F5] border rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
                id="Password"
                type="password"
                placeholder="Password"
              />
              <p className="text-xs  text-[#A0A0A0] ml-96 mb-2">
                <Link to={"/ForgotPassword"} className="cursor-pointer">
                  Forgot Password
                </Link>
              </p>
            </div>
            <div className="w-full px-3 mb-4">
              <button
                className="shadow-sm w-full bg-[#000] text-sm  hover:bg-[#000] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-full"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
