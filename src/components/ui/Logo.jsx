import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.webp";

export const Logo = ({
  stack = "horizontal",
  textColor = "red",
  size = "md",
}) => {
  return (
    <Link to="/" aria-label="Navigate to home page">
      <div
        className={`hidden  text-[30px] md:flex gap-x-2 gap-y-3 ${
          stack === "horizontal" ? "flow-row items-center " : "flex-col"
        }`}
      >
        <img
          src={logoImg}
          alt=""
          className={`aspect-[40/37] ${
            size === "sm" ? "w-12" : size === "lg" ? "w-20" : "w-14"
          }`}
        />
        <p
          className={`hidden md:block font-fuzzy font-bold tracking-tighter ${
            stack === "horizontal" ? "mt-3" : ""
          } ${textColor === "red" ? "text-app-red" : "text-white"} ${
            size === "sm" ? "text-md" : size === "lg" ? "text-4xl" : "text-lg"
          }`}
        >
          mhkasa
        </p>
      </div>
    </Link>
  );
};
