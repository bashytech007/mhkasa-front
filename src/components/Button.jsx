export const Button = ({
  children,
  onClick = () => {},
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`rounded-full py-2 px-5 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
