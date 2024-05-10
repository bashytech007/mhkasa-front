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

export const Sort = ({ onClick, sort }) => {
  const [show, setShow] = useState(false);
  const list = [
    {
      term: "",
      display: "None",
    },
    {
      term: "sort-latest",
      display: " New Arrival",
    },
    {
      term: "sort-lowestPrice",
      display: "Price: Low - High",
    },
    {
      term: "sort-highestPrice",
      display: "Price: High - Low",
    },
    {
      term: "filter-unisex",
      display: "Unisex",
    },
    {
      term: "filter-men",
      display: "Men",
    },
    {
      term: "filter-women",
      display: "Women",
    },
  ];

  const onSortClick = (sortBy) => {
    setShow(false);
    return onClick(sortBy);
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
            onClick={onSortClick}
          />
        ))}
      </ul>
    </div>
  );
};
