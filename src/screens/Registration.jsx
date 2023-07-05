import React from 'react';

const Registration = () => {
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
        {/* login button */}
        <div className="px-[26px] py-[16px] ml-auto text-light10 text-[16px] font-popp font-[500] tracking-[0.16px] bg-primary90 rounded-[8px] border border-primary70">
          <p>Login</p>
        </div>
      </div>
      {/* form */}
      <div className="relative flex flex-1 ">
        <div className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
        <div className="absolute top-0 inset-0 gradientbg opacity-20"></div>
        <div className="absolute top-0 inset-0">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white w-[580px] flex items-center justify-center">
              <div>
                <div className="flex flex-row gap-[9px]">
                  <p className="text-[56px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                    Registration
                  </p>
                </div>
                <div className="text-center text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300">
                  Please enter email and select account type to proceed
                </div>
                <form className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-col">
                    <label className="text-[16px] font-[500] text-dark90">
                      Email address<span className="ml-2 text-red-500">*</span>
                    </label>
                    <input
                      className="p-[16px] text-primary10 bg-transparent outline-none rounded-[8px] border border-primary10"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[16px] font-[500] text-dark90">
                      Account Type<span className="ml-2 text-red-500">*</span>
                    </label>
                    <select className="p-[16px] text-primary10 bg-transparent outline-none rounded-[8px] border border-primary10">
                      <option value="" disabled selected>
                        Choose a value
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[16px] font-[500] text-dark90">
                      Phone Number<span className="ml-2 text-red-500">*</span>
                    </label>
                    <input
                      className="p-[16px] bg-transparent text-primary10 outline-none rounded-[8px] border border-primary10"
                      placeholder="XXXX XXXX X4380"
                    />
                  </div>
                  <button className="text-[#fff] font-[500] font-popp text-[16px] w-[380px] flex items-center justify-center rounded-[8px] registerbtngrad">
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
