import { Link } from "react-router-dom/dist";
import Rollon from "../assets/images/Rollon.png";

export const CategoryCard = ({ category, numberOfProducts = 1, image }) => {
  return (
    <Link to={`/categories/${category}`}>
      <div className="relative aspect-[5/7] w-[calc(220px+1vw)] rounded-2xl overflow-hidden">
        <img
          src={Rollon}
          alt=""
          className="object-cover object-center w-full h-full"
        />

        <div className="absolute bottom-0 left-0 right-0 z-10 h-32 px-4 pt-10 bg-gradient-to-t from-black">
          <h2 className="font-bold text-white">{category}</h2>
          <p className="text-app-ash">
            {numberOfProducts} Products{numberOfProducts > 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

// import { Link } from "react-router-dom";

// // Assuming you have imported your images
// import bodymist from "../assets/images/body mist.svg";
// import bodyspray from "../assets/images/BodySpray.svg";
// import perfume from "../assets/images/Perfume.svg";

// export const CategoryCard = ({
//   category,
//   numberOfProducts = 1,
//   imageIndex,
// }) => {
//   // Array of images
//   const images = [bodymist, bodyspray, perfume];

//   return (
//     <Link to={`/categories/${category}`}>
//       <div className="relative aspect-[5/7] w-[calc(220px+1vw)] rounded-2xl overflow-hidden">
//         {/* Render image based on imageIndex */}
//         <img
//           src={images[imageIndex]}
//           alt=""
//           className="object-cover object-center w-full h-full"
//         />

//         <div className="absolute bottom-0 left-0 right-0 z-10 h-32 px-4 pt-10 bg-gradient-to-t from-black">
//           <h2 className="font-bold text-white">{category}</h2>
//           <p className="text-app-ash">
//             {numberOfProducts} Product{numberOfProducts !== 1 && "s"}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };
