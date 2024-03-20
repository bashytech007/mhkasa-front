import { Icon } from "@iconify/react";
import { Fragment, useEffect } from "react";

export const Navigation = ({ location }) => {
  useEffect(() => {
    if (
      !location ||
      !Array.isArray(location) ||
      location.length === 0 ||
      !location.every((item) => typeof item === "string")
    )
      throw new Error("Invalid location");
  }, []);

  return (
    <p className="inline-flex flex-wrap items-center text-app-ash-2">
      {location.map((part, index) => {
        if (index === location.length - 1) {
          return (
            <span key={index} className="text-app-black">
              {part}
            </span>
          );
        } else {
          return (
            <Fragment key={index}>
              {part} <Icon icon="mi:chevron-double-right" />
            </Fragment>
          );
        }
      })}
    </p>
  );
};
