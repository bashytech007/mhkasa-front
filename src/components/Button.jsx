export const Button = ({ children, className = "", ...rest }) => {
  return (
    <button className={`rounded-full py-2 px-5 ${className}`} {...rest}>
      {children}
    </button>
  );
};
