import { useParams } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";

export const Component = () => {
  const { category } = useParams();
  return (
    <Wrapper className="py-6">
      <Navigation location={["Home", "Category", category]} />
    </Wrapper>
  );
};
