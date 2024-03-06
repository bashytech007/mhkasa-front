import { useEffect, useRef, useState } from "react";
import authkey from "../assets/images/lockkey.svg";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../utils/axios";

export const PhoneOtpPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const [canSubmit, setCanSubmit] = useState(() =>
    otp.every((letter) => letter !== "")
  );
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/confirm-otp`,
        {
          email,
          otp: otp.join(""),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        navigate(`/account-creation-success`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCanSubmit(() => otp.every((letter) => letter !== ""));
  }, [otp]);

  return (
    <Wrapper>
      <div className="py-12 grid items-center md:grid-cols-[40%,60%]">
        <div>
          <div className="max-w-[420px] mx-auto">
            <img src={authkey} className="w-full" />
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col md:items-end">
          <div>
            <Heading className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px]">
              AUTHENTICATION
            </Heading>
            <p className="text-lg text-app-black  sm:text-[18px] md:text-[20px] lg:text-[24px]">
              Enter the verification Code sent to
            </p>
            <span className="text-lg text-[#a40001] mt-2 font-medium">
              {email}
            </span>
          </div>

          <OTPInput otp={otp} setOtp={setOtp} canSubmit={canSubmit} />

          <div>
            <Button
              className="w-full bg-app-black text-sm  text-white font-bold mt-4 hover:bg-black disabled:bg-[#999999]"
              type="submit"
              disabled={!canSubmit}
            >
              Verify Now
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const OTPInput = ({ otp, setOtp, canSubmit }) => {
  const boxes = [0, 1, 2, 3];
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const onKeyUp = (index, refs) => {
    const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (e) => {
      setOtp((prev) => {
        const newArr = prev;
        if (keys.includes(Number(e.key))) {
          newArr[index] = e.key;
          refs[index + 1]?.current.focus();
        }
        if (e.key === "Backspace") {
          if (newArr[index] === "") {
            refs[index - 1]?.current.focus();
          }
          newArr[index] = "";
        }
        return [...newArr];
      });
    };
  };

  return (
    <>
      <div className="flex gap-1 py-4 sm:gap-2 md:gap-3 lg:gap-4 ">
        {boxes.map((box) => (
          <Box refs={refs} index={box} key={box} otp={otp} onKeyUp={onKeyUp} />
        ))}
      </div>
    </>
  );
};

const Box = ({ index, refs, onKeyUp, otp }) => {
  return (
    <input
      ref={refs[index]}
      type="number"
      value={otp[index]}
      onChange={() => {}}
      onKeyUp={onKeyUp(index, refs)}
      className="w-10 aspect-square outline-none text-center font-bold rounded-xl border-4 bg-transparent border-app-red sm:w-12 sm:text-lg md:text-2xl md:w-14 lg:text-4xl lg:w-16"
    />
  );
};
