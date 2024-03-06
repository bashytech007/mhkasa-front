import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Input, PInput } from "../components/Input";
import axios from "../utils/axios";
import { useCanSubmitForm } from "../hooks/useCanSubmitFormik";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const request = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/forgot-password`,
        values,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        navigate(`/reset-password?email=${encodeURIComponent(values.email)}`);
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message);
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
      <p className="pt-4 text-[#666666] text-center">
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
          className="w-full bg-app-black text-sm  text-white font-bold mt-4 hover:bg-black disabled:bg-[#999999]"
          type="submit"
          disabled={!canSubmit}
        >
          Reset Password
        </Button>
      </form>
    </Wrapper>
  );
};

export const ResetPassword = () => {
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

  const resendOtp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/resend-otp`,
        { email, actionType: 2 },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        navigate(`/login`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: { password: "", otp: "", confirm_password: "" },
    validationSchema: schema,
    onSubmit: async ({ password, otp }, {}) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/reset-password`,
          { email, otp, password },
          { headers: { "Content-Type": "application/json" } }
        );
        if (response.status === 204) {
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  return (
    <Wrapper className="max-w-lg flex flex-col items-center py-12">
      <Heading>Password Reset</Heading>
      <p className="pt-4 text-[#666666] text-center">
        Enter new password and otp sent to{" "}
        <span className="text-app-red font-medium">{email}</span> email address.
      </p>
      <p className="text-[#666666] pb-4 text-center">
        Remember your password?
        <Link to="/login" className="text-app-ash-2 ml-2">
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
          <button onClick={resendOtp} className="px-4" type="button">
            Resend
          </button>
        </div>

        <Button
          className="w-full bg-app-black text-sm  text-white font-bold mt-4 hover:bg-black disabled:bg-[#999999]"
          type="submit"
          disabled={!canSubmit}
        >
          Reset Password
        </Button>
      </form>
    </Wrapper>
  );
};
