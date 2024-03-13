import { useState } from "react";
import { Button } from "./Button";
import { Logout } from "./Logout";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const User = () => {
  const { user } = useAuth();
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand((v) => !v);
  };

  return (
    <div className="relative">
      <Button
        className="px-0 text-nowrap md:px-5 md:bg-app-ash "
        onClick={toggle}
        aria-label="Profile drop down"
      >
        <div className="flex items-center md:gap-4">
          <Icon icon="lucide:user" style={{ fontSize: 32 }} />
          <p className="leading-none mx-2 hidden min-[512px]:block">
            My Account
          </p>
          <Icon
            icon="fa6-solid:angle-down"
            style={{ fontSize: 32 }}
            className="hidden text-app-black min-[512px]:block"
          />
        </div>
      </Button>
      <div
        className={`absolute min-w-full right-0 pb-6 pt-3 bg-white px-4 rounded-md shadow-lg top-[calc(100%+1.5rem)] z-50 ${
          expand ? "" : "hidden"
        }`}
      >
        {user ? (
          <>
            <h2 className="pb-4 text-xl font-bold tracking-tight capitalize font-fuzzy">
              {user?.username}
            </h2>
            <p className="pb-4 text-app-ash-2">{user?.email}</p>
            <Logout toggle={toggle} />
          </>
        ) : (
          <Link to="/login">
            <Button
              className="w-full font-bold text-app-red bg-app-ash text-nowrap"
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
