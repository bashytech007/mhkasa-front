export const CategoryCard = ({ category, numberOfProducts, image }) => {
  return (
    <div className="relative aspect-[5/6] w-[calc(260px+1vw)] rounded-2xl overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute h-32 z-10 bottom-0 left-0 right-0 px-4 pt-10 bg-gradient-to-t from-black">
        <h2 className="font-bold text-white">{category}</h2>
        <p className="text-app-ash">
          {numberOfProducts} Products{numberOfProducts > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};
