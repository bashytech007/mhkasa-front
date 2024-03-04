import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import { Input, PInput } from "../components/Input";
// import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import axios from "../utils/axios";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().trim().required(),
    // .matches(/(?=.*[A-Z])/, "must contain capital letter"),
  });

  const naigate = useNavigate();
  const { setAccessToken, setUser } = useAuth();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const login = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        values,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        setAccessToken(response?.data?.token);
        setUser({
          username: response.data?.username,
          email: response.data?.email,
        });
        naigate(redirect);
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      await login(values);
    },
  });

  return (
    <Wrapper className="max-w-lg flex flex-col items-center py-12">
      <Heading>Login</Heading>
      <p className="py-4 text-[#666666]">
        Your Welcome back don&rsquo;t have an account?
        <Link to="/register" className="text-app-ash-2 ml-2">
          Register Here{" "}
        </Link>
      </p>

      <form onSubmit={formik.handleSubmit} className="w-full">
        <Input name="email" formik={formik} placeholder="Email" />
        <PInput name="password" formik={formik} placeholder="Password" />

        <Link
          to={"/forgot-password"}
          className="text-app-ash-2 pb-6 text-right w-full inline-block"
        >
          Forgot Password?
        </Link>

        <Button
          className="w-full bg-app-black text-sm hover:bg-black text-white font-bold"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Wrapper>
  );
};
