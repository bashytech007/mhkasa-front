import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";
import { useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../hooks/utils/useAuth";
import * as yup from "yup";
import { useFormik } from "formik";
import { categoriesLoader } from "../utils/loaders";

export const ProductDetail = ({productId}) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .trim()
      .required()
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
    // .matches(/(?=.*[^\w\d\s])/, "must contain special character")
  });
  
  const {getUserId}=useAuth()
  const [reviews,setReviews] = useState([
    {
      review: "hiue iurhfi urefber fbuib chneroir iohf noeri hioferho hofuie rhfioer jhoif erjhof joerhjfio",
      reviewer: "John Doe",
      rating: 3,
    },
  ]);

  const [rating, setRating] = useState(0);
  const [tab, setTab] = useState("reviews");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const reviewRef = useRef(null);

  const onClick = (rate) => {
    setRating(rate);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const userReview = reviewRef.current.value;

    const userId=getUserId()
     console.log(userId)
    
    const data = {
      name,
      email,
      review: userReview,
      rating,
    };
  
    const endpoint = `/add/review/${userId}/${productId}`;

  try {
    const response = await axios.post(endpoint, data);
    console.log("Review submitted:", response.data);

    setReviews([...reviews, {
      review: userReview,
      reviewer: name, 
      rating,  
    }]);
    
    
    nameRef.current.value = '';
    emailRef.current.value = '';
    reviewRef.current.value = '';
    setRating(0);

  } catch (error) {
    console.error("Error submitting review:", error);
  }
};
  

  return (
    <div className="bg-white px-6 py-4 rounded-3xl mb-6" >
      <div className="grid grid-cols-2 border-b-2 md:grid-cols-4">
        <button
          className={`-mb-[2px] pb-4 ${tab === "description" ? "border-b-black border-b-2 font-bold" : ""}`}
          onClick={() => setTab("description")}
        >
          Description
        </button>
        <button
          className={`-mb-[2px] pb-4 ${tab === "reviews" ? "border-b-black border-b-2 font-bold" : ""}`}
          onClick={() => setTab("reviews")}
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
         {
          getUserId() ? ( <form onSubmit={handleSubmitReview}> 
            <p>Your Rating</p>
            <Rating rating={rating} onClick={onClick} />
            <div className="grid gap-4">
              <div className="grid gap-4 grid-cols-2">
                <input
                  ref={nameRef}
                  className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full col-span-2"
                  placeholder="Name"
                />
                <input
                  ref={emailRef}
                  className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full col-span-2"
                  placeholder="Email"
                />
              </div>
              <textarea
                ref={reviewRef}
                cols="30"
                rows="6"
                placeholder="Your Review"
                className="rounded-3xl py-4 px-4 outline-none bg-app-ash-1 w-full"
              ></textarea>
              <Button className="bg-app-black text-white font-medium w-fit">
                Submit Review
              </Button>
            </div>
          </form>)
     :
     <>
     <p>You Need To be logged in to Give a Review</p>
     </>  
         }
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

