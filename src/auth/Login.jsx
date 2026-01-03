import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [ph, setPh] = useState("");

  const navigate = useNavigate();

  const handleRequestOTP = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("phone", ph);
      formData.append("dial_code", "+91");

      const response = await axios.post(
        "https://staging.fastor.ai/v1/pwa/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data?.status === "Success") {
        navigate("/otp");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className=" h-8.5 text-[26px] font-bold leading-[130%] tracking-[-0.01em]  text-[#1E232C]">
          Enter Your Mobile Number
        </div>
        <div
          className="
          text-[#8391A1] w-82.75 h-6 text-[16px] font-medium leading-[150%] tracking-[0] 
  "
        >
          We will send you the 4 digit verification code
        </div>
        <input
          type="tel"
          value={ph}
          onChange={(e) => setPh(e.target.value)}
          placeholder="Enter mobile number"
          className="  text-[#8391A1]  mt-12  bg-[#F7F8F9]  w-82.5 h-14 rounded-lg border border-[#DADADA] px-4  text-[16px] outline-none
  "
        />
        <div>
          <button
            onClick={handleRequestOTP}
            className="  mt-8  bg-[#FF6D6A]  text-white  w-82.5  h-14  rounded-lg  border  border-none  px-4    text-[16px]  outline-none
  "
          >
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
