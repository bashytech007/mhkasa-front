import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const Button = ({ variant, className, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva("py-2 px-4 font-Farfetch", {
  variants: {
    variant: {
      pill: "rounded-full font-Farfetch",
      rectangle:"rounded-lg bg-app-black text-center  text-white font-Farfetch"
    },
  },
  defaultVariants: {
    variant: "pill",
  },
});
