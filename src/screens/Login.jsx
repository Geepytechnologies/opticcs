import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col h-screen font-popp">
      {/* Navbar */}
      <div className="flex flex-row w-full px-[65px] py-[28px]">
        <div className="flex flex-row items-center justify-center gap-[21px]">
          <img src="/images/ED-(1).png" />
          <span className="text-[#027D52] font-popp text-[43.441px] font-[700]">
            OptiCCS
          </span>
        </div>
        {/* register button */}
        <div className="px-[26px] py-[16px] ml-auto text-light10 text-[16px] font-popp font-[500] tracking-[0.16px] bg-primary90 rounded-[8px] border border-primary70">
          <p>Register to OptiCCS</p>
        </div>
      </div>
      {/* form */}
      <div className="relative flex flex-1 ">
        <div className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
        <div className="absolute top-0 inset-0 gradientbg opacity-20"></div>
        <div className="absolute top-0 inset-0">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-row gap-[9px]">
              <p className="text-[64px] font-popp font-[600] tracking-[0.64px] text-light10">
                Welcome back
              </p>
              <img src="/images/handemoji.png" />
            </div>
            <div className="text-center text-[24px] font-popp font-[500] tracking-[0.24px] text-primary10">
              Please enter details to sign in
            </div>
            <form className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-[16px] font-[500] text-[#fff]">
                  Email address<span className="ml-2 text-red-500">*</span>
                </label>
                <input
                  className="p-[16px] text-primary10 bg-transparent outline-none rounded-[8px] border border-primary10"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-[500] text-[#fff]">
                  I.D Password<span className="ml-2 text-red-500">*</span>
                </label>
                <input
                  className="p-[16px] bg-transparent text-primary10 outline-none rounded-[8px] border border-primary10"
                  placeholder="XXXX XXXX X4380"
                />
              </div>
              <button className="text-primary90 font-[500] font-popp text-[16px] w-[380px] flex items-center justify-center rounded-[8px] bg-primary10 py-[16px]">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
