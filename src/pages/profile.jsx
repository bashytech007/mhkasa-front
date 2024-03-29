import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { cn } from "../utils/cn";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/Seo";
import { useAuth } from "../hooks/utils/useAuth";

export const Component = () => {
  const { getUserEmail } = useAuth();
  return (
    <>
      <Seo
        title="Mhkasa | Profile"
        type="webapp"
        description="Experience smooth shopping"
        name=""
      />
      <Wrapper className="py-4">
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "My Account", to: "/account" },
            { description: "My Profile", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />
        <Heading>My Profile</Heading>

        <div className="grid gap-6 py-6 md:grid-cols-2">
          <div className={cn("bg-white rounded-xl p-5")}>
            <div className="flex items-center gap-3 border-b-2 pb-4">
              <Heading>Personal Details</Heading>
            </div>
            <div className="pt-6">
              <div>
                <p className="font-bold">Name:</p>
                <div className="flex justify-between gap-6">
                  <input type="text" value={"Chisom"} className="outline-noe" />
                  <Icon
                    icon="lucide:edit"
                    style={{ fontSize: 32 }}
                    className="text-app-ash-2"
                  />
                </div>
              </div>
              <div className="py-4">
                <p className="font-bold">Email:</p>
                <p>{getUserEmail()}</p>
              </div>
              <div>
                <p className="font-bold">Phone:</p>
                <p>123 4567 890 78</p>
              </div>
              <div></div>
            </div>
          </div>

          <div className={cn("bg-white rounded-xl p-5")}>
            <div className="flex items-center gap-3 border-b-2 pb-4">
              <Heading>Reset Passowrd</Heading>
            </div>
            <form className="pt-6">
              <div className="grid gap-6">
                <input
                  className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full"
                  placeholder="Enter Current Password"
                />
                <input
                  className="rounded-full py-2 px-4 outline-none bg-app-ash-1 w-full"
                  placeholder="Enter New Password"
                />
              </div>
              <Button className="bg-app-black text-white font-medium mt-6">
                Reset
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
