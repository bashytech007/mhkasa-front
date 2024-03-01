export const SectionHeader = ({ header }) => {
  return (
    <div>
      <h2 className="text-app-red font-bold text-lg">{header}</h2>
      <div className="mt-1 rounded-full h-2 w-16 bg-app-red">
        <div className="h-full bg-black w-10/12 rounded-full" />
      </div>
    </div>
  );
};
