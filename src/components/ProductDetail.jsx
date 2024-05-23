import { Icon } from "@iconify/react";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/utils/useAuth";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "../utils/axios";
import { Input } from "./Input";
import { useCanSubmitForm } from "../hooks/utils/useCanSubmitFormik";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { SectionHeader } from "./ui/SectionHeader";
import { CategoryPanel } from "./CategoryPanel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/ToolTip";

export const ProductDetail = ({ productId }) => {
  const { getUserId } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().trim().required(),
    review: yup.string().trim().required(),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: "",
      email: "",
      review: "",
    },
    onSubmit: handleSubmitReview,
  });

  const mutation = useMutation({
    mutationFn: (values) => {
      return axios.post(`/add/review/${getUserId()}/${productId}`, values, {
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  const [reviews, setReviews] = useState([]);

  const [rating, setRating] = useState(0);
  const onClick = (rate) => {
    setRating(rate);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "reviews");
  const onTabClick = (tab) => {
    if (!tab) return;
    setSearchParams({ tab });
    setTab(tab);
  };

  const canSubmit = useCanSubmitForm(formik, rating > 0);

  async function handleSubmitReview(values, { resetForm }) {
    if (rating < 1) {
      return alert("Please select rating");
    }
    mutation.mutate(
      { rating, ...values },
      {
        onSuccess: () => {
          resetForm();
          setRating(0);
        },
        onError: () => {
          toast.error("Review submission attempt failed");
        },
      }
    );
  }

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/review/${productId}`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <div className="bg-white px-6 py-4 rounded-3xl mb-6">
      <CategoryPanel />
      <div className="grid grid-cols-2 border-b-2 md:grid-cols-4">
        <button
          className={`-mb-[2px] pb-4 ${
            tab === "description" ? "border-b-black border-b-2 font-bold" : ""
          }`}
          onClick={() => onTabClick("description")}
        >
          Description
        </button>
        <button
          className={`-mb-[2px] pb-4 ${
            tab === "reviews" ? "border-b-black border-b-2 font-bold" : ""
          }`}
          onClick={() => onTabClick("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className="grid gap-6 pt-5 md:grid-cols-2">
        {tab === "description" ? (
          <div>a good perfume</div>
        ) : (
          <div>
            <div className="flex gap-4 items-end">
              <p className="font-medium text-4xl">4.5</p>
              <p>Average Ratings</p>
            </div>
            <ul className="grid gap-2 pt-4 max-h-[480px] overflow-y-auto">
              {reviews.map(({ review, name, rating }, i) => (
                <li key={i}>
                  <Review review={review} reviewer={name} rating={rating} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {getUserId() ? (
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p>Your Rating</p>
                  <Rating rating={rating} onClick={onClick} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Select your rating for this product</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <form onSubmit={formik.handleSubmit} className="grid gap-4">
              <div className="grid gap-4 grid-cols-2">
                <Input
                  className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full col-span-2"
                  placeholder="Name"
                  formik={formik}
                  name={"name"}
                />
                <Input
                  className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full col-span-2"
                  placeholder="Email"
                  formik={formik}
                  name={"email"}
                />
              </div>
              <div className="py-2 w-full">
                <textarea
                  cols="30"
                  rows="6"
                  placeholder="Your Review"
                  className="rounded-3xl py-4 px-4 outline-none bg-app-ash-1 w-full"
                  {...formik.getFieldProps("review")}
                ></textarea>
                {formik.errors["review"] && (
                  <p className="text-app-red"> {formik.errors["review"]}</p>
                )}
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-fit">
                    <Button
                      type="submit"
                      className="bg-app-black text-white font-medium w-fit hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999]"
                      disabled={!canSubmit}
                    >
                      Submit Review
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className={rating > 0 ? "hidden" : ""}>
                    <p>You must select rating to proceed</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </form>
          </div>
        ) : (
          <>
            <p>You Need To be logged in to Give a Review</p>
          </>
        )}
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
const LayerWith = () => {
  return (
    <div className="">
      <SectionHeader header="ProductsYoulayerWith" />
      <div className="flex items-center justify between">
        <div>the card</div>
        <ProductCard />
      </div>
    </div>
  );
};
