import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const Button = ({ variant, className, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva("py-2 px-5", {
  variants: {
    variant: {
      pill: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "pill",
  },
});
