import { useParams } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";

export const Component = () => {
  const { product } = useParams();
  return (
    <Wrapper>
      <Navigation
        location={[
          { description: "Home", to: "/", title: "Go to Home Page" },
          { description: "Category", to: `/categories/Body Spray` },
          { description: product, to: "" },
        ]}
        className="text-[#3338] py-5"
        iconClassName="text-[#3339] text-2xl"
        currentLocationClassName="text-app-black"
      />
    </Wrapper>
  );
};
