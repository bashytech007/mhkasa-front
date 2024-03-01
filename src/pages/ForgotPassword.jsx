import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const ForgotPassword = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (values, {}) => {
      console.log(values);
    },
  });

  return (
    <Wrapper className="max-w-lg flex flex-col items-center py-12">
      <Heading>Password Reset</Heading>
      <p className="pt-4 text-[#666666]">
        Password reset link will be sent to your email address,
      </p>
      <p className="text-[#666666] pb-4">
        know your password?
        <Link to="/login" className="text-app-ash-2 ml-2">
          Login Here
        </Link>
      </p>

      <form className="w-full max-w-lg bg-white rounded-3xl p-4">
        <Input
          name="email"
          formik={formik}
          className="bg-app-ash-1"
          placeholder="Email"
        />

        <Button className="w-full bg-app-black text-sm hover:bg-black text-white font-bold mt-4">
          Reset Password
        </Button>
      </form>
    </Wrapper>
  );
};
