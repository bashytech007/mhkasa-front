import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const Navigation = ({
  location,
  className = "",
  iconClassName = "",
  currentLocationClassName = "",
}) => {
  useEffect(() => {
    if (
      !location ||
      !Array.isArray(location) ||
      location.length === 0 ||
      location.every((item) => Object.entries(item).length < 2)
    )
      throw new Error("Invalid location");
  }, []);

  return (
    <p
      className={cn(
        `inline-flex flex-wrap items-center text-[#ffffff96] font-medium`,
        className
      )}
    >
      {location.map((part, index) => {
        if (index === location.length - 1) {
          return (
            <Link
              to={part.to}
              key={index}
              title={part?.title || ""}
              className={cn(currentLocationClassName)}
            >
              {part.description}
            </Link>
          );
        } else {
          return (
            <Link
              to={part.to}
              key={index}
              className="inline-flex items-center"
              title={part?.title || ""}
            >
              {part.description}{" "}
              <Icon
                icon="mi:chevron-double-right"
                className={cn("text-white", iconClassName)}
              />
            </Link>
          );
        }
      })}
    </p>
  );
};
