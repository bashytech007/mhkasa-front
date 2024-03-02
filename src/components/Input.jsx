import { useState } from "react";

export const Input = ({
  type = "text",
  name,
  formik,
  className = "",
  ...rest
}) => {
  return (
    <div className="py-2">
      <input
        type={type}
        className={`rounded-full w-full py-2 px-6 outline-none ${className}`}
        {...formik.getFieldProps(name)}
        {...rest}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-app-red"> {formik.errors[name]}</p>
      )}
    </div>
  );
};

export const PInput = ({ name, formik, className = "", ...rest }) => {
  const [seePassword, setSeePassword] = useState(false);
  const toggleVisibility = () => {
    setSeePassword((v) => !v);
  };
  return (
    <div className="py-2">
      <div className="relative">
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 "
        >
          {seePassword ? "Hide" : "Show"}
        </button>
        <input
          type={seePassword ? "text" : "password"}
          className={`rounded-full w-full py-2 px-6 outline-none ${className}`}
          {...formik.getFieldProps(name)}
          {...rest}
        />
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-app-red"> {formik.errors[name]}</p>
      )}
    </div>
  );
};
