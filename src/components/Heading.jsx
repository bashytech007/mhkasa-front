export const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={`font-bold text-app-red text-xl ${className}`}>
      {children}
    </h2>
  );
};
