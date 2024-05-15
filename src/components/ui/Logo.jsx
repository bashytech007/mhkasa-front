import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.webp";

export const Logo = ({
  stack = "horizontal",
  textColor = "red",
  textFooterColor="white",
  backGroundColor="black",
  size = "md",
}) => {
  return (
    <Link to="/" aria-label="Navigate to home page">
      <div
        className={`flex gap-x-2 gap-y-3 ${
          stack === "horizontal" ? "flow-row items-center " : "flex-col"
        }`}
      >
        <img
          src={logoImg}
          alt=""
          className={`aspect-[40/37] hidden ${
            size === "sm" ? "w-12" : size === "lg" ? "w-20" : "w-14"
          } sm:block`}
        />
        <p
          className={`font-Fa font-bold tracking-tighter  ${
            backGroundColor==="black"? textFooterColor === "white":textColor==="red"
          } ${
            size === "sm" ? "text-md" : size === "lg" ? "text-4xl" : "text-xl"
          } sm:mt-2`}
        >
          mkhasa
        </p>
      </div>
    </Link>
  );
};
