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
    <div className="overflow-hidden bg-green-400 relative z-50">
        <h2 className="text-2xl font-bold">Categories</h2>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          `An error has occurred ${error.message}`
        ) : (
          <ul className='absolute z-50'>
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
  );
};