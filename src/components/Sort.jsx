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
      term: "newest",
      display: " New Arrival",
    },
    {
      term: "priceLowest",
      display: "Price: Low - High",
    },
    {
      term: "priceHighest",
      display: "Price: High - Low",
    },
  ];

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
