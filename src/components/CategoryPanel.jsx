import { Link, useLoaderData } from "react-router-dom";
import { Icon1, Icon2, Icon3, Icon4 } from "../components/Icon";
import { iconExists } from "@iconify/react";
export const CategoryPanel = ({ fixedHeight }) => {
  
  const { categories = [], status, error } = useLoaderData();
  const icons = [
    <Icon1 key={iconExists} />,
    <Icon2 key={iconExists} />,
    <Icon3 key={iconExists} />,
    <Icon4 key={iconExists} />,
  ];

  return (
    <nav className="rounded-2xl overflow-hidden hidden min-w-[260px] w-fit md:flex md:flex-col">
      <div className="py-3 bg-app-red">
        <h2 className="pl-8 text-2xl font-bold text-white">Categories</h2>
      </div>
      <div
        className={`flex items-center overflow-y-auto  ${fixedHeight ? "h-[224px]" : "h-auto"}`}
      >
        
        <div className="flex flex-col justify-start items-center gap-2 px-2">
          {icons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          `An error has occurred ${error.message}`
        ) : (
          <ul>
            {categories.map(({ name }, index) => (
              <li key={index} className="first:pt-2 last:pb-2 group">
                <Link
                  to={`/categories/${encodeURIComponent(name)}`}
                  className="flex items-center  gap-2 py-2 group-hover:text-app-red"
                >
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

