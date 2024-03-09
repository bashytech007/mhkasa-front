import { useState } from "react";
import userIcon from "../assets/images/accounticon.webp";
import angleDownIcon from "../assets/images/accounttoggleicon.webp";
import { Button } from "./Button";
import { Logout } from "./Logout";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const User = () => {
  const { user } = useAuth();
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand((v) => !v);
  };

  return (
    <div className="relative">
      <Button
        className="bg-app-ash text-nowrap"
        onClick={toggle}
        aria-label="Profile drop down"
      >
        <div className="flex items-center gap-4">
          <img src={userIcon} alt="" className="h-6 w-6" />
          <p className="leading-none hidden md:block">My Account</p>
          <img
            src={angleDownIcon}
            alt=""
            className={`h-6 w-6 ${expand ? "rotate-180" : ""}`}
          />
        </div>
      </Button>
      <div
        className={`absolute min-w-full right-0 pb-6 pt-3 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] ${
          expand ? "" : "hidden"
        }`}
      >
        {user ? (
          <>
            <h2 className="pb-4 font-bold font-fuzzy text-xl tracking-tight capitalize">
              {user?.username}
            </h2>
            <p className="text-app-ash-2 pb-4">{user?.email}</p>
            <Logout toggle={toggle} />
          </>
        ) : (
          <Link to="/login">
            <Button
              className="text-app-red font-bold bg-app-ash w-full text-nowrap"
              onClick={toggle}
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
