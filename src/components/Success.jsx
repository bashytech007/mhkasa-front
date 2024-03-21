import success from "../assets/images/success_check.webp";

export const Success = ({ children }) => {
  return (
    <div className="mx-auto w-fit flex flex-col items-center my-10">
      <img src={success} alt="" />
      {children}
    </div>
  );
};
