import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";
import { useState } from "react";

export const Sort = ({ onclick }) => {
  const [show, setShow] = useState(false);

  const onClick = (sortBy) => {
    setShow(false);
    return onclick(sortBy);
  };

  return (
    <div className="relative py-2 w-48 z-10">
      <Button
        className="bg-white w-full py-2 flex justify-between items-center"
        onClick={() => setShow((v) => !v)}
      >
        Sort By{" "}
        <Icon
          icon="fa6-solid:angle-down"
          vFlip={show}
          style={{ fontSize: 24 }}
          className="text-app-black"
        />
      </Button>
      <ul
        className={`bg-white absolute top-full w-full py-6 px-6 rounded-3xl ${
          show ? "" : "hidden"
        }`}
      >
        <li>
          <button className="py-1" onClick={() => onClick("")}>
            None
          </button>
        </li>
        <li>
          <button className="py-1" onClick={() => onClick("newest")}>
            New Arrival
          </button>
        </li>
        <li>
          <button className="py-1" onClick={() => onClick("priceLowest")}>
            Price: Low - High
          </button>
        </li>
        <li>
          <button className="py-1" onClick={() => onClick("priceHighest")}>
            Price: High - Low
          </button>
        </li>
      </ul>
    </div>
  );
};
