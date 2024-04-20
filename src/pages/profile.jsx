import * as yup from "yup";
import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { cn } from "../utils/cn";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/Seo";
import { useAuth } from "../hooks/utils/useAuth";
import { useState } from "react";
import { PInput } from "../components/Input";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";

export const Component = () => {
  const { getUserEmail, username, getUserId } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState(username);
  const toggle = () => {
    setEditMode((v) => !v);
  };

  const nameMutation = useMutation({
    mutationFn: (values) => {
      alert(1)
      return axios.post(`edit/user/${getUserId()}`, values, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: (response) => {
      console.log(response);
    },
    onError: () => {
      toast.error("Update attempt failed");
    },
  });

  const schema = yup.object().shape({
    new_password: yup
      .string()
      .trim()
      .required("Required field")
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
    // .matches(/(?=.*[^\w\d\s])/, "must contain special character")
    current_password: yup
      .string()
      .trim()
      .required("Required field")
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
    // .matches(/(?=.*[^\w\d\s])/, "must contain special character")
  });
  const formik = useFormik({
    initialValues: { new_password: "", current_password: "" },
    validationSchema: schema,
    onSubmit: async (values) => {
      nameMutation.mutate(values);
    },
  });
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
                  {editMode ? (
                    <>
                      <input
                        type="text"
                        value={val}
                        className="outline-noe"
                        onChange={(e) => {
                          setVal(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          nameMutation.mutate({ username: val });
                          toggle();
                        }}
                      >
                        <Icon
                          icon="mingcute:check-2-fill"
                          style={{ fontSize: 32 }}
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{username}</p>
                      <button onClick={toggle}>
                        <Icon
                          icon="lucide:edit"
                          style={{ fontSize: 32 }}
                          className="text-app-ash-2"
                        />
                      </button>
                    </>
                  )}
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
            <form onSubmit={formik.handleSubmit} className="pt-6">
              <div className="grid gap-6">
                <PInput
                  placeholder="Enter Current Password"
                  formik={formik}
                  name="current_password"
                  className="bg-app-ash-1"
                />
                <PInput
                  placeholder="Enter New Password"
                  formik={formik}
                  name="new_password"
                  className="bg-app-ash-1"
                />
              </div>
              <Button type='submit' className="bg-app-black text-white font-medium mt-6">
                Reset
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};