import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/ui/Button";
import { Input, PInput } from "../components/Input";
import { useCanSubmitForm } from "../hooks/useCanSubmitFormik";
import { Wrapper } from "../components/ui/Wrapper";
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "../utils/axios";

export const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const request = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`user/forget/password`, values, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setIsSubmitting(false);
        navigate(`/reset-password?email=${encodeURIComponent(values.email)}`);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error?.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: schema,
    onSubmit: async (values, {}) => {
      await request(values);
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  return (
    <Wrapper className="max-w-lg flex flex-col items-center py-12">
      <Heading>Forgot Password</Heading>
      <p className="pt-4 text-[#666666] text-center pb-6">
        Password reset link will be sent to your email address, know your
        password?
        <Link to="/login" className="text-app-ash-2 ml-2">
          Login Here
        </Link>
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl p-4"
      >
        <Input
          name="email"
          formik={formik}
          className="bg-app-ash-1"
          placeholder="Email"
        />

        <Button
          className="w-full flex justify-center bg-app-red hover:bg-red-500 text-sm  text-white font-bold mt-4 sm:hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999] sm:bg-app-black"
          type="submit"
          disabled={!canSubmit}
        >
          {isSubmitting ? (
            <Icon icon="svg-spinners:6-dots-rotate" style={{ fontSize: 20 }} />
          ) : (
            "Restet Password"
          )}
        </Button>
      </form>
    </Wrapper>
  );
};

export const ResetPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = decodeURIComponent(searchParams.get("email") || "");
  const schema = yup.object().shape({
    otp: yup
      .string()
      .required()
      .matches(/^[0-9]{4}$/, "must be 4 digit"),
    password: yup
      .string()
      .trim()
      .required()
      .matches(/(?=.*[A-Z])/, "must contain uppercase")
      .matches(/^(?=.*[a-z])/, "Must contain lowercase")
      .min(6, "must be at least 6 characters long")
      .max(50, "must be at most 50 characters long"),
    confirm_password: yup
      .string()
      .trim()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Password Mismatch!"),
  });

  const formik = useFormik({
    initialValues: { password: "", otp: "", confirm_password: "" },
    validationSchema: schema,
    onSubmit: async ({ password, otp }, {}) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `user/reset/password`,
          { email, token: otp, password },
          { headers: { "Content-Type": "application/json" } }
        );
        if (response.status === 200) {
          setIsSubmitting(false);
          navigate(`/login`);
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error(error);
      }
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  const resendOtp = async () => {
    setIsRequestingOtp(true);
    try {
      const response = await axios.post(
        "resend-otp",
        { email, actionType: 2 },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        setIsRequestingOtp(false);
        console.log(response);
      }
    } catch (error) {
      setIsRequestingOtp(false);
      console.error(error);
    }
  };

  return (
    <Wrapper className="max-w-lg flex flex-col items-center py-12">
      <Heading>Password Reset</Heading>
      <p className="pt-4 text-[#666666] text-center">
        Enter new password and otp sent to{" "}
        <span className="text-app-red font-medium">{email}</span> email address.
      </p>
      <p className="text-[#666666] pb-4 text-center">
        Remember your password?
        <Link to="/login" className="text-app-black ml-2">
          Login Here
        </Link>
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl p-4"
      >
        <PInput
          name="password"
          formik={formik}
          className="bg-app-ash-1"
          placeholder="New password"
        />
        <PInput
          name="confirm_password"
          formik={formik}
          className="bg-app-ash-1"
          placeholder="Confirm password"
        />
        <div className="flex items-center gap-4">
          <Input
            name="otp"
            formik={formik}
            className="bg-app-ash-1 grow w-full"
            placeholder="OTP"
          />

          {isRequestingOtp ? (
            <div className="w-28 flex justify-center">
              <Icon
                icon="svg-spinners:6-dots-rotate"
                style={{ fontSize: 20 }}
              />
            </div>
          ) : (
            <button
              onClick={resendOtp}
              className="w-28 py-2 rounded hover:bg-app-ash-1"
              type="button"
            >
              Resend
            </button>
          )}
        </div>

        <Button
          className="w-full flex justify-center bg-app-red hover:bg-red-500 text-sm  text-white font-bold mt-4 sm:hover:bg-black disabled:bg-[#999999] hover:disabled:bg-[#999999] sm:bg-app-black"
          type="submit"
          disabled={!canSubmit}
        >
          {isSubmitting ? (
            <Icon icon="svg-spinners:6-dots-rotate" style={{ fontSize: 20 }} />
          ) : (
            "Restet Password"
          )}
        </Button>
      </form>
    </Wrapper>
  );
};
