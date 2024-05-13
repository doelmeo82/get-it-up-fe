import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SignupForm from "./SignupForm";
import image from "../../image/Login/Illustrations1.jpg";
const Signup = () => {
  return (
    <div className="pt-[100px] lg:pt-[74px] pb-[60px] grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="h-full w-full hidden lg:block">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="flex justify-center items-center flex-col text-[#1D2026] px-[18px] lg:px-0">
        <div className="w-max-[600px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">SignUp</h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <SignupForm />
          </div>
        </div>
        <div className="flex gap-x-[1px] justify-center py-5 text-[14px]">
          <span>Already have account?</span>
          <Link to="/login" className="font-semibold underline text-[#FF6636]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
