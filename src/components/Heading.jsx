import { cn } from "../utils/cn";

export const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={cn("font-bold text-app-red text-xl", className)}>
      {children}
    </h2>
  );
};
