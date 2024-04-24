import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";
import { useState } from "react";

const ListItem = ({ sort, term, display, onClick }) => {
  return (
    <li>
      <button
        className={`py-3 w-full ${sort === term ? "bg-slate-100" : ""}`}
        onClick={() => onClick(term)}
      >
        {display}
      </button>
    </li>
  );
};

export const Sort = ({ onclick, sort }) => {
  const [show, setShow] = useState(false);
  const list = [
    {
      term: "",
      display: "None",
    },
    {
      term: "latest",
      display: " New Arrival",
    },
    {
      term: "lowestPrice",
      display: "Price: Low - High",
    },
    {
      term: "highestPrice",
      display: "Price: High - Low",
    },
  ];

  const onClick = (sortBy) => {
    setShow(false);
    return onclick(sortBy);
  };

  return (
    <div className="relative z-10 w-48 py-2">
      <Button
        className="flex items-center justify-between w-full py-2 bg-white"
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
        className={`bg-white absolute top-full w-full overflow-hidden rounded-3xl ${
          show ? "" : "hidden"
        }`}
      >
        {list.map((li) => (
          <ListItem
            key={li.display}
            display={li.display}
            term={li.term}
            sort={sort}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};
