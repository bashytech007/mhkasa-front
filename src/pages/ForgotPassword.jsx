import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
// import { useState } from "react";

export const ForgotPassword = () => {
  // const [canSubmit, setCanSubmit] = useState(() =>
  //   otp.every((letter) => letter !== "")
  // );
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
  const navigate = useNavigate();

  const forgetPassword = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/forget/password`,
        values,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        console.log(response.data);
        navigate(
          `/reset-password?email=${values.email}&otp=${response.data.otp}`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    onSubmit: async (values, {}) => {
      await forgetPassword(values);
      console.log(values);
    },
  });

  return (
    <Wrapper className="flex flex-col items-center max-w-lg py-12">
      <Heading>Password Reset</Heading>
      <p className="pt-4 text-[#666666]">
        Password reset link will be sent to your email address,
      </p>
      <p className="text-[#666666] pb-4">
        know your password?
        <Link to="/login" className="ml-2 text-app-ash-2">
          Login Here
        </Link>
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg p-4 bg-white rounded-3xl"
      >
        <Input
          name="email"
          formik={formik}
          className="bg-app-ash-1"
          placeholder="Email"
        />

        <Button
          className="w-full mt-4 text-sm font-bold text-white bg-app-black hover:bg-black"
          type="submit"
        >
          Reset Password
        </Button>
      </form>
    </Wrapper>
  );
};
