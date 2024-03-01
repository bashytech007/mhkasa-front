export const Button = ({ children, onClick = () => {}, className = "" }) => {
  return (
    <button className={`rounded-full py-2 px-5 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
