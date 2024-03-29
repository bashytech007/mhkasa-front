import { Link } from "react-router-dom";
import { Wrapper } from "../components/ui/Wrapper";
import { Success } from "../components/Success";
import { Seo } from "../components/Seo";

export const Component = () => {
  return (
    <>
      <Seo
        title="Mhkasa | Account Created"
        description="Complete TranscationF"
        type="webapp"
        name=""
      />
      <Wrapper className="py-8">
        <Success>
          <h2 className="mt-6 text-xl font-bold">Successfully</h2>
          <p>your account has been created</p>
          <Link
            to="/"
            className="bg-app-black px-[120px] text-white mt-6 font-bold text-xl rounded-full py-2"
            replace
          >
            Okay
          </Link>
        </Success>
      </Wrapper>
    </>
  );
};
