import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const Button = ({ variant, className, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva("py-2 px-4", {
  variants: {
    variant: {
      pill: "rounded-full",
      rectangle:"rounded-lg bg-app-black text-center  text-white "
    },
  },
  defaultVariants: {
    variant: "pill",
  },
});
