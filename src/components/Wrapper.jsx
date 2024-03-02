export const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto w-11/12 max-w-[1200px] ${className}`}>
      {children}
    </div>
  );
};
