import { useState } from "react";
import userIcon from "../assets/images/accounticon.svg";
import angleDownIcon from "../assets/images/accounttoggleicon.svg";
import { Button } from "./Button";
import { Logout } from "./Logout";

export const User = ({ user }) => {
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand((v) => !v);
  };
  return (
    <div className="relative">
      <Button className="bg-app-ash text-nowrap" onClick={toggle}>
        <div className="flex items-center gap-4">
          <img src={userIcon} alt="" />
          <p className="leading-none hidden md:block">
            {user?.username ? user.username : "My Account"}
          </p>
          <img
            src={angleDownIcon}
            alt=""
            className={`${expand ? "rotate-180" : ""}`}
          />
        </div>
      </Button>
      <div
        className={`absolute min-w-full right-0 py-6 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] ${
          expand ? "" : "hidden"
        }`}
      >
        <Logout />
      </div>
    </div>
  );
};
