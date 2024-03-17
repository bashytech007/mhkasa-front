// import { Icon } from "@iconify/react";

// export const CategoryPanel = () => {
//   return (
//     <div>
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="gravity-ui:droplet" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//       <Icon icon="solar:perfume-outline" />
//     </div>
//   );
// };

import rollon from "../assets/images/rollon.svg";
import humidifier from "../assets/images/humidifier.svg";
import solar_perfumeoutline from "../assets/images/solar_perfume-outline.svg";
import ph_drop from "../assets/images/ph_drop.svg";
import aroma from "../assets/images/aroma.svg";
import freshner from "../assets/images/freshener.svg";
import deodorant from "../assets/images/deodorant.png";
import { Link } from "react-router-dom";

export const CategoryPanel = () => {
  const categories = [
    {
      category: "Perfume",
      icon: solar_perfumeoutline,
    },
    {
      category: "Perfume Oil",
      icon: ph_drop,
    },
    {
      category: "Body Spray",
      icon: deodorant,
    },
    {
      category: "Reed Diffuser",
      icon: aroma,
    },
    {
      category: "Roll On",
      icon: rollon,
    },
    {
      category: "Humidifier",
      icon: humidifier,
    },
    {
      category: "Air Freshner",
      icon: freshner,
    },
    {
      category: "Body Mist",
      icon: deodorant,
    },
  ];
  return (
    <div className="rounded-2xl overflow-hidden hidden min-w-[260px] w-fit md:block">
      <nav className="">
        <div className="py-3 bg-app-red">
          <h2 className="font-bold text-2xl text-white pl-8">Categories</h2>
        </div>
        <ul>
          {categories.map(({ category, icon }, index) => (
            <li key={index} className="first:pt-2 last:pb-2 group">
              <Link
                to={`/categories/${encodeURIComponent(category.toLowerCase())}`}
                className="flex items-center gap-3 py-2 pl-8 group-hover:text-app-red"
              >
                <div className="w-8">
                  <img src={icon} alt="" />
                </div>
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-4 bg-app-red" />
      </nav>
    </div>
  );
};
