// import * as yup from "yup";
// import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import { Heading } from "../components/Heading";
// import { Wrapper } from "../components/Wrapper";
// import { Button } from "../components/Button";
// import { Input, PInput } from "../components/Input";
// import axios from "axios";

// export const ResetPassword = () => {
//   const schema = yup.object().shape({
//     email: yup.string().email().required(),
//   });
//   const navigate = useNavigate();

//   const resetPassword = async (values) => {
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/user/forget/password`,
//         values,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       if (response.status === 200) {
//         console.log(response.data);
//         navigate(`/confirm-otp?email=${values.email}&otp=${response.data.otp}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const formik = useFormik({
//     initialValues: { email: "" },
//     validationSchema: schema,
//     onSubmit: async (values, {}) => {
//       await resetPassword(values);
//       console.log(values);
//     },
//   });

//   return (
//     <Wrapper className="flex flex-col items-center max-w-lg py-12">
//       <Heading>Password Reset</Heading>
//       <p className="pt-4 text-[#666666]">
//         Reset Password if you have forgotten your Password,
//       </p>
//       <p className="text-[#666666] pb-4">
//         know your password?
//         <Link to="/login" className="ml-2 text-app-ash-2">
//           Login Here
//         </Link>
//       </p>

//       <form
//         onSubmit={formik.handleSubmit}
//         className="w-full max-w-lg p-4 bg-white rounded-3xl"
//       >
//         <Input
//           name="email"
//           formik={formik}
//           className="bg-app-ash-1"
//           placeholder="Email"
//         />
//         <PInput name="password" formik={formik} placeholder="Password" />

//         <Button
//           className="w-full mt-4 text-sm font-bold text-white bg-app-black hover:bg-black"
//           type="submit"
//         >
//           Reset Password
//         </Button>
//       </form>
//     </Wrapper>
//   );
// };
import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Input, PInput } from "../components/Input";
// import axios from "../utils/axios";
import { useCanSubmitForm } from "../hooks/useCanSubmitForm";
import axios from "axios";

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

  const formik = useFormik({
    initialValues: { password: "", otp: "", confirm_password: "" },
    validationSchema: schema,
    onSubmit: async ({ password, otp }, {}) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/reset/password`,
          { email, token: otp, password },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response);
        if (response.status === 200) {
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const canSubmit = useCanSubmitForm(formik);

  return (
    <Wrapper className="flex flex-col items-center max-w-lg py-12">
      <Heading>Password Reset</Heading>
      <p className="pt-4 text-[#666666] text-center">
        Enter new password and otp sent to{" "}
        <span className="font-medium text-app-red">{email}</span> email address.
      </p>
      <p className="text-[#666666] pb-4 text-center">
        Remember your password?
        <Link to="/login" className="ml-2 text-app-ash-2">
          Login Here
        </Link>
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-lg p-4 bg-white rounded-3xl"
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
            className="w-full bg-app-ash-1 grow"
            placeholder="OTP"
          />
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
