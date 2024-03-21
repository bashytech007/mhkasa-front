import { Link } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";

export const CategoryPanel = ({ fixedHeight }) => {
  const { categories, error, status } = useCategory();

  return (
    <nav className="rounded-2xl overflow-hidden hidden min-w-[260px] w-fit md:flex md:flex-col">
      <div className="py-3 bg-app-red">
        <h2 className="pl-8 text-2xl font-bold text-white">Categories</h2>
      </div>
      <div
        className={`overflow-y-auto ${fixedHeight ? "h-[224px]" : "h-auto"}`}
      >
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          `An error has occurred ${error.message}`
        ) : (
          <ul>
            {categories.map(({ name, icon }, index) => (
              <li key={index} className="first:pt-2 last:pb-2 group">
                <Link
                  to={`/categories/${encodeURIComponent(name)}`}
                  className="flex items-center gap-3 py-2 pl-8 group-hover:text-app-red"
                >
                  <div className="w-8">
                    <img src={icon} alt="" />
                  </div>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="py-5 mt-auto bg-app-red" />
    </nav>
  );
};
