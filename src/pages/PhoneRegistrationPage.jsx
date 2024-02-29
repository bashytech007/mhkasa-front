import authimg from "../assets/images/authkeyimage.svg";
import naija from "../assets/images/twemoji_flag-nigeria.svg";
import group from "../assets/images/Group.svg";
import { Link } from "react-router-dom";
const PhoneRegistrationPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="w-full py-32 px-36 ">
        <div className="grid max-w-4xl md:grid-cols-[40%,60%] md:gap-x-60 sm:grid-rows-1  place-content-between">
          <div>
            <img src={authimg} className="w-full max-w-md mx-auto" />
          </div>
          <form className="max-w-md">
            <h1 className="font-bold text-4xl text-[#a40001]">
              Enter Your Phone
            </h1>
            <h1 className="font-bold text-4xl text-[#a40001]">Number</h1>
            <p className="text-lg text-[#000000] mt-2">
              We Will Send You a Confirmation Code
            </p>
            <div className="flex items-center border-b-2 border-black mt-4">
              <div className="flex items-center p-2 bg-white rounded-md">
                <img src={naija} className="w-full object-cover" />
                <img src={group} className="w-full object-cover" />
              </div>
              <input
                type="text"
                placeholder="+23480*************"
                className="px-4 py-2 bg-transparent outline-none appearance-none placeholder-black"
              />
            </div>
            <Link to="/phoneotp">
              <button className="bg-[#000000] flex items-center px-24 py-2 text-white mx-auto mt-6 ml-4 rounded-full">
                Verify Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneRegistrationPage;
