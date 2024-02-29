import authkey from "../assets/images/lockkey.svg";
const PhoneOtpPage = () => {
  return (
    <div className="bg-[#c4c4c4]">
      <div className="w-full py-32 px-28">
        <div className="grid max-w-4xl md:grid-cols-[40%,60%] md:gap-x-60 sm:grid-rows-1  place-content-between">
          <div>
            <img src={authkey} className="w-full max-w-md mx-auto" />
          </div>
          <form className="max-w-md">
            <div className="mr-11">
              <h1 className="font-bold text-4xl text-[#a40001]">
                AUTHENTICATION
              </h1>
              <p className="text-lg text-[#000000] mt-2">
                Enter the verification Code sent to
              </p>
              <span className="text-lg text-[#a40001] mt-2">
                +23491*******9
              </span>
            </div>
            <div className="flex items-center w-full space-x-4 mt-4">
              <input
                type="text"
                className="px-5 py-2 w-8  bg-transparent appearance-none focus:#A40001 rounded-lg border-2  border-[#A40001]"
              />
              <input
                type="text"
                className="px-5 py-2 w-8  bg-transparent appearance-none  rounded-lg border-2  border-[#A40001]"
              />
              <input
                type="text"
                className="px-5 py-2 w-8  bg-transparent appearance-none  rounded-lg border-2  border-[#A40001]"
              />
              <input
                type="text"
                className="px-5 py-2 w-8  bg-transparent appearance-none  rounded-lg border-2  border-[#A40001]"
              />
              <input
                type="text"
                className="px-5 py-2 w-8  bg-transparent appearance-none  rounded-lg border-2  border-[#A40001]"
              />
              <input
                type="text"
                className="px-5 py-2 w-8  bg-transparent appearance-none  rounded-lg border-2  border-[#A40001]"
              />
            </div>
            <button className="bg-[#000000] flex items-center px-24 py-2 text-white mx-auto mt-6 ml-4 rounded-full">
              Verify Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneOtpPage;
