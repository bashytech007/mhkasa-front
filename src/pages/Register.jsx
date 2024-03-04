import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Input, PInput } from "../components/Input";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required().min(3, "must be at least 3 characters"),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .trim()
      .required()
      .matches(/(?=.*[A-Z])/, "must contain capital letter")
      .min(3, "must be at least 3 characters"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", name: "", phone: "" },
    validationSchema: schema,
    onSubmit: async (values, {}) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/send/verification`,
        {
          email: values.email,
          password: values.password,
          address: values.name,
          phone: values.phone,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        navigate(`/confirm-otp?email=${values.email}&otp=${response.data.otp}`);
      }
    },
  });

  return (
    <Wrapper className="max-w-xl flex flex-col items-center py-12">
      <Heading>Register</Heading>
      <p className="text-[#666666] py-4">
        Create Your account, Already have an account?
        <Link to="/login" className="text-app-ash-2 ml-2">
          Login Here
        </Link>
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-xl bg-white rounded-3xl p-4"
      >
        <div className="grid gap-x-4 sm:grid-cols-2">
          <Input
            name="name"
            formik={formik}
            className="bg-app-ash-1"
            placeholder="Full Name"
          />
          <Input
            name="phone"
            formik={formik}
            className="bg-app-ash-1"
            placeholder="Phone Number"
          />
          <Input
            name="email"
            formik={formik}
            className="bg-app-ash-1"
            placeholder="Email Address"
          />
          <PInput
            name="password"
            formik={formik}
            className="bg-app-ash-1"
            placeholder="Password"
          />
        </div>

        <Button
          className="w-full bg-app-black text-sm hover:bg-black text-white font-bold mt-4"
          type="submit"
        >
          Register
        </Button>
      </form>
    </Wrapper>
  );
};
