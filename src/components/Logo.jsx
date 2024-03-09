import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.webp";

export const Logo = ({
  stack = "horizontal",
  textColor = "red",
  size = "md",
  collapse,
}) => {
  return (
    <Link to="/" aria-label="Navigate to home page">
      <div
        className={`text-[30px] flex gap-x-4 gap-y-3 ${
          stack === "horizontal" ? "flow-row items-center " : "flex-col"
        }`}
      >
        <img
          src={logoImg}
          alt=""
          className={`aspect-[40/37] ${
            size === "sm" ? "w-14" : size === "lg" ? "w-20" : "w-16"
          }`}
        />
        <p
          className={`font-fuzzy font-bold tracking-tighter ${
            stack === "horizontal" ? "mt-3" : ""
          } ${textColor === "red" ? "text-app-red" : "text-white"} ${
            size === "sm" ? "text-md" : size === "lg" ? "text-4xl" : "text-lg"
          } ${collapse ? "hidden sm:block" : ""}`}
        >
          mhkasa
        </p>
      </div>
    </Link>
  );
};
