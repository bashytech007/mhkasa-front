// import { Link } from "react-router-dom";

// export const Register = () => {
//   return (
//     <div className="bg-[#D9D9D9] w-full h-full pt-5 flex flex-col items-center px-2 py-10 justify-between">
//       <h2 className="pt-4 text-lg font-bold text-black">Register</h2>
//       <p className="text-[#555555] mt-4">
//         Create Your account, Already have an account?
//         <span className="text-white">
//           <Link to="/login">Log in Here </Link>
//         </span>
//       </p>

//       <form className="w-full max-w-lg bg-[#FFF] overflow-hidden rounded-xl px-6 py-2 mt-4 pt-4">
//         <div className="flex flex-wrap  mb-4 px-2  py-2 -mx-3">
//           <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
//             <input
//               className="block w-full px-4 py-3  leading-tight text-xs text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
//               id="full-name"
//               type="text"
//               placeholder="Full Name"
//             />
//           </div>
//           <div className="w-full px-3 md:w-1/2">
//             <input
//               className="block w-full px-4 py-3 leading-tight text-xs text-[#555] bg-[#FFFFFF] border rounded-lg appearance-none focus:outline-none focus:bg-white focus:[#C4C4C4]"
//               id="PhoneNumber"
//               type="text"
//               placeholder="Phone Number"
//             />
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-1">
//           <div className="w-full px-3 md:w-1/2 md:mb-0">
//             <input
//               className="block w-full px-4 py-3 mb-3 leading-tight text-xs text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
//               id="Email"
//               type="email"
//               placeholder="Email Address"
//             />
//           </div>
//           <div className="w-full px-3 md:w-1/2 md:mb-0">
//             <input
//               className="block w-full px-4 py-3 mb-3 leading-tight text-xs text-[#555] bg-[#F5F5F5] border  rounded-full appearance-none focus:outline-none focus:[#C4C4C4]"
//               id="password"
//               type="password"
//               placeholder="Password"
//             />
//           </div>
//           <div className="w-full px-3 mb-4">
//             <button
//               className="shadow-sm w-full bg-[#000] hover:bg-[#000] text-sm focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded-full"
//               type="button"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { Button } from "../components/Button";
import { Input, PInput } from "../components/Input";

export const Register = () => {
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
      console.log(values);
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

      <form className="w-full max-w-xl bg-white rounded-3xl p-4">
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

        <Button className="w-full bg-app-black text-sm hover:bg-black text-white font-bold mt-4">
          Register
        </Button>
      </form>
    </Wrapper>
  );
};
