import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom/dist";

export const CategoryPanel = ({ fixedHeight }) => {
  const { categories } = useLoaderData();

  return (
    <nav className="rounded-2xl overflow-hidden hidden min-w-[260px] w-fit md:flex md:flex-col">
      <div className="py-3 bg-app-red">
        <h2 className="pl-8 text-2xl font-bold text-white">Categories</h2>
      </div>
      <div
        className={`overflow-y-auto ${fixedHeight ? "h-[224px]" : "h-auto"}`}
      >
        <ul>
          {categories.map(({ name }, index) => (
            <li key={index} className="first:pt-2 last:pb-2 group">
              <Link
                to={`/categories/${encodeURIComponent(name)}`}
                className="flex items-center gap-3 py-2 pl-8 group-hover:text-app-red"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-5 mt-auto bg-app-red" />
    </nav>
  );
};
