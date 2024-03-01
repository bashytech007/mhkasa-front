import authimg from "../assets/images/authkeyimage.svg";
import naija from "../assets/images/twemoji_flag-nigeria.svg";
import group from "../assets/images/Group.svg";
import { Link } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

export const PhoneRegistrationPage = () => {
  return (
    <Wrapper className="py-8">
      <div className="grid items-center md:grid-cols-[40%,60%] sm:grid-rows-1">
        <div>
          <img src={authimg} className="w-full" />
        </div>

        <form className="flex">
          <div className="w-fi ml-auto">
            <Heading className="font-bold text-3xl lg:text-5xl text-[#a40001]">
              Enter Your Phone<br></br>Number
            </Heading>
            <p className="text-lg mt-2">We Will Send You a Confirmation Code</p>
            <div className="flex items-center border-b-2 border-black mt-4">
              <div className="flex items-center p-2 bg-white rounded-md">
                <img src={naija} className="w-full object-cover" />
                <img src={group} className="w-full object-cover" />
              </div>

              <input
                type="number"
                placeholder="+23480*************"
                className="px-4 py-2 bg-transparent outline-none placeholder-black"
              />
            </div>
            <Button className="bg-app-black px-[96px] text-white mt-6">
              Verify Now
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
