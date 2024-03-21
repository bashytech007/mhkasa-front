import { useState } from "react";
import { cn } from "../utils/cn";
import { Icon } from "@iconify/react";

export const Input = ({
  type = "text",
  name,
  formik,
  className = "",
  ...rest
}) => {
  return (
    <div className="py-2 w-full">
      <input
        type={type}
        className={cn("rounded-full w-full py-2 px-6 outline-none", className)}
        {...formik.getFieldProps(name)}
        // autoComplete
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
        <input
          type={seePassword ? "text" : "password"}
          className={`rounded-full w-full py-2 px-6 outline-none ${className}`}
          {...formik.getFieldProps(name)}
          {...rest}
        />
        <button
          aria-label={`${seePassword ? "Hide" : "Show"} password"`}
          type="button"
          onClick={toggleVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 "
        >
          {seePassword ? (
            <Icon icon="clarity:eye-hide-line" style={{ fontSize: 32 }} />
          ) : (
            <Icon icon="clarity:eye-line" style={{ fontSize: 32 }} />
          )}
        </button>
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-app-red"> {formik.errors[name]}</p>
      )}
    </div>
  );
};
