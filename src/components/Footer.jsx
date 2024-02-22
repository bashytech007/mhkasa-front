import footerlogo from "../assets/images/footerlogo.svg";
const Footer = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center px-10 py-8 bg-[#000]">
        <div className="w-full ">
          <a href="#">
            <img src={footerlogo} alt="" className="w-28" />
          </a>
        </div>
        <div className="flex flex-col items-end justify-between w-full px-8 text-right text-white gap-11 text-md">
          <div className="flex flex-col items-end justify-between gap-3">
            <h5 className="text-lg font-bold">Important Links</h5>
            <a href="#" className="text-[#A0A0A0]">
              About Us
            </a>
            <a href="#" className="text-[#A0A0A0]">
              Contact US
            </a>
            <a href="#" className="text-[#A0A0A0]">
              Privacy Policy
            </a>
            <a href="#" className="text-[#A0A0A0]">
              Terms & Conditions
            </a>
            <a href="#" className="text-[#A0A0A0]">
              Terms of service
            </a>
          </div>

          <small className="text-white ">&copy; 2024 All Rights reserved</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
