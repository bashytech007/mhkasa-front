import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";
import { useState } from "react";

export const ProductDetail = () => {
  const reviews = [
    {
      review:
        "hiueiurhfiurefberfbuib chneroir iohfnoeri hioferho hofuierhfioer jhoiferjhof joerhjfio",
      reviewer: "Bash Doe",
      rating: 5,
    },
    {
      review:
        "hiue iurhfi urefber fbuib chneroir iohf noeri hioferho hofuie rhfioer jhoif erjhof joerhjfio",
      reviewer: "John Doe",
      rating: 3,
    },
    {
      review:
        "hiueiurh fiurefber fbuib chneroir iohf noeri hioferho hofuie rhfioer jhoiferjhof joerhjfio",
      reviewer: "Chisomchris",
      rating: 4,
    },
  ];

  const [rating, setRating] = useState(0);
  const [tab, setTab] = useState("reviews");
  const onClick = (rate) => {
    setRating(rate);
  };

  return (
    <div className="bg-white px-6 py-4 rounded-3xl mb-6">
      <div className="grid grid-cols-2 border-b-2 md:grid-cols-4">
        <button
          className={`-mb-[2px] pb-4 ${
            tab === "description" ? "border-b-black border-b-2 font-bold" : ""
          }`}
          onClick={() => {
            setTab("description");
          }}
        >
          Description
        </button>
        <button
          className={`-mb-[2px] pb-4 ${
            tab === "reviews" ? "border-b-black border-b-2 font-bold" : ""
          }`}
          onClick={() => {
            setTab("reviews");
          }}
        >
          Reviews
        </button>
      </div>
      <div className="grid gap-6 pt-5 md:grid-cols-2">
        <div>
          <p className="font-medium text-4xl">4.5</p>
          <p>Average Ratings</p>

          <ul className="grid gap-2 pt-4 max-h-[480px] overflow-y-auto">
            {reviews.map(({ review, reviewer, rating }, i) => (
              <li key={i}>
                <Review review={review} reviewer={reviewer} rating={rating} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p>Your Rating</p>
          <Rating rating={rating} onClick={onClick} />

          <div className="grid gap-4">
            <div className="grid gap-4 grid-cols-2 @container">
              <input
                className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full col-span-2 @md:col-span-1"
                placeholder="Name"
              />
              <input
                className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full  col-span-2 @md:col-span-1"
                placeholder="Email"
              />
            </div>
            <textarea
              cols="30"
              rows="6"
              placeholder="Your Review"
              className="rounded-3xl py-4 px-4 outline-none bg-app-ash-1 w-full"
            ></textarea>
            <Button className="bg-app-black text-white font-medium w-fit">
              Submit Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = ({ review, reviewer, rating }) => {
  return (
    <div>
      <Rating rating={rating} />
      <h2 className="font-bold">{reviewer}</h2>
      <p>{review}</p>
    </div>
  );
};

const Rating = ({ rating = 0, onClick = () => {} }) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push("iconamoon:star-fill");
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push("lucide:star");
  }

  return (
    <div className="flex gap-[1px] py-1">
      {stars.map((icon, i) => (
        <button key={i}>
          <Icon icon={icon} onClick={() => onClick(i + 1)} />
        </button>
      ))}
    </div>
  );
};
