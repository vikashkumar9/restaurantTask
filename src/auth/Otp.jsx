import React, { useRef, useState } from "react";
import back from "../../src/assets/icons/back.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleFocus = (index) => {
    inputRefs.current.forEach((ref) => ref.classList.remove("active"));
    inputRefs.current[index].classList.add("active");
  };

  const confirmOtp = async () => {
    const otpValue = otp.join("");
    const phone = "9818979450";
    const dial_code = "+91";

    try {
      // Axios POST request
      const response = await axios.post(
        "https://staging.fastor.ai/v1/pwa/user/login",
        new URLSearchParams({
          phone,
          otp: otpValue,
          dial_code,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const data = response.data;
      console.log("Login Response:", data);

      if (data.status_code === 200) {
        const token = data.data.token;
        console.log("JWT Token:", token);
        localStorage.setItem("token", token);
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid OTP, try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Try again later.");
    }
  };
  const navToLogin = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div
        onClick={navToLogin}
        className="absolute top-4 left-4 flex justify-center items-center w-[41px] h-[41px] border rounded-[12px] border-[#E8ECF4]"
      >
        <img
          src={back}
          alt="backtoLogin"
          className="w-[19px] h-[19px] cursor-pointer"
        />
      </div>
      <div className="flex px-5 justify-center items-center h-screen">
        <div className="flex flex-col">
          <div className=" h-[34px] text-[26px] font-bold leading-[130%] tracking-[-0.01em]  text-[#1E232C]">
            OTP Verification
          </div>
          <div className="mt-1 text-[16px] font-medium leading-[150%]  text-[#8391A1]">
            Enter the verification code we just sent on your Mobile Number.
          </div>
          <div className="mt-4 flex gap-[12px]">
            {otp.map((value, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={value}
                onFocus={() => handleFocus(i)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                inputMode="numeric"
                pattern="[0-9]*"
                ref={(el) => (inputRefs.current[i] = el)}
                className="
                  w-[49px]
                  h-[60px]
                  rounded-[8px]
                  border
                  border-[#DADADA]
                  bg-[#F7F8F9]
                  text-center
                  text-[16px]
                  
                  text-[#1E232C]
                  outline-none
                  focus:border-blue-600
                "
              />
            ))}
          </div>

          <button
            onClick={confirmOtp}
            className="mt-8  h-[56px] rounded-[8px] bg-[#FF6D6A] text-white text-[16px] "
          >
            Verify
          </button>

          <div className="mt-6 w-[200px] m-auto text-center text-[15px] leading-[140%] tracking-[0.01em] ">
            <span className="font-medium text-[#1E232C]">
              Didn’t receive code?
            </span>
            <span className="ml-1 font-bold text-[#6A88FF] cursor-pointer">
              Resend
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
