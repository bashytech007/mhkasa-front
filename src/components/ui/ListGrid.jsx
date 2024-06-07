// export const ListGrid = ({ children }) => {
//   return (
//     <ul className="pt-8 grid gap-4 justify-center grid-flow-row auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//       {children}
//     </ul>
//   );
// };
import { cn } from "../../utils/cn";
export const ListGrid = ({ children, horizontalOnSmallScreens = false }) => {
  return (
    <ul
      className={cn(
        "pt-8 grid gap-4 justify-center",
        horizontalOnSmallScreens
          ? "grid-flow-col auto-cols-[minmax(0,_1fr)] sm:grid-flow-row max-w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          : "grid-flow-row auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      )}
    >
      {children}
    </ul>
  );
};
