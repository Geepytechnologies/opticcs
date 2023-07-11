import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { axiosPrivate } from '../utils/axios';
import ToastBox from '../utils/ToastBox';
import { showSuccess } from '../utils/Toastmessage';

const Registration = () => {
  const [values1, setValues1] = useState({ email: "", accountType: "", phone: "" });
  const [values2, setValues2] = useState({ firstname: "", lastname: "", accountType: "", staffid: "", password: "" });
  const [otp, setOtp] = useState("1234");
  const [stage1, setStage1] = useState(true)
  const [stage2, setStage2] = useState(false)
  const [stage3, setStage3] = useState(false)
  const [stage4, setStage4] = useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues1({ ...values1, [name]: value });
  };
  const register = async () => {
    console.log({ values1, values2, otp })
    const res = await axiosPrivate.post("/auth/signup", {
      email: values1.email,
      password: values2.password,
      accountType: values1.accountType,
      phone: values1.phone,
      firstname: values2.firstname,
      lastname: values2.lastname,
      staffid: values2.staffid,
      otp: otp
    });
    console.log(res);
    return res.data;

  };
  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setValues2({ ...values2, [name]: value });
  };
  const completeStage1 = () => {
    setStage1(false);
    setStage2(true)
  }
  const completeStage2 = () => {
    setStage2(false);
    setStage3(true)
  }
  const completeStage3 = () => {
    setStage3(false)
    setStage4(true)
  }
  const backToStage1 = () => {
    setStage2(false)
    setStage1(true)
  }
  const registerUser = async (e) => {
    e.preventDefault()
    const request = await register();
    console.log({ request: request })
    if (request) {
      showSuccess("Registration Successful")
      completeStage3()
    }
  }
  const handleOtp = (e) => {
    setOtp(e.target.value)
  }
  const LoginButton = () => (
    <Link to="/user/login" className="px-[20px] py-[10px] md:px-[26px] md:py-[16px] ml-auto text-light10 text-[16px] font-popp font-[500] tracking-[0.16px] bg-primary90 rounded-[8px] border border-primary70">
      <p>Login</p>
    </Link>
  )
  return (
    <>
      <ToastBox />
      {stage1 ?
        <div className="flex flex-col min-h-screen font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-[21px]">
              <img src="/images/ED-(1).png" className=" h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative p-5 flex flex-1 items-center justify-center ">
            <div className="absolute top-0 h-full inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
            <div className="absolute top-0 h-full inset-0 gradientbg opacity-20"></div>
            <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
              <div className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] flex items-center justify-center">
                <div className=" w-[90%]">
                  <div className="flex items-center justify-center"><img src="/images/ProgressBar.png" /></div>
                  <div className="flex flex-row items-center justify-center my-4">
                    <p className="md:text-[56px] text-[40px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                      Registration
                    </p>
                  </div>
                  <div className="text-center text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300">
                    Please enter email and select account type to proceed
                  </div>
                  <form onSubmit={completeStage1} className="flex flex-col gap-4 mt-4">
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Email address<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input onChange={handleChange} name='email' type="email"
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Account Type<span className="ml-2 text-red-500">*</span>
                      </label>
                      <select onChange={handleChange} name='accountType' defaultValue="" className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10">
                        <option value="" disabled >
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
                      <input onChange={handleChange} name='phone' type='number'
                        className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                        placeholder="XXXX XXXX X4380"
                      />
                    </div>
                    <button type='submit' className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> : stage2 ? <div className="flex flex-col min-h-screen  font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-[21px]">
              <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative p-5 flex ">
            <div className="absolute h-full top-0 inset-0 bg-cover  bg-[url('/images/Registration.png')]"></div>
            <div className="absolute h-full top-0 inset-0 gradientbg opacity-20"></div>
            <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
              <motion.div initial={{
                opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }} className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] flex items-center justify-center">
                <div className=" w-[90%]">
                  <div className="flex items-center justify-center p-2 mb-8"><img src="/images/ProgressBar2.png" /></div>
                  <form onSubmit={completeStage2} className="grid grid-cols-1 p-3 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        First Name<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input type='text' name="firstname" onChange={handleChange2}
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your First Name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Last Name<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input type='text' name="lastname" onChange={handleChange2}
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your Last Name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Staff ID<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input type='text' name="staffid" onChange={handleChange2}
                        className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your staff ID"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Account Type<span className="ml-2 text-red-500">*</span>
                      </label>
                      <select name="accountType" onChange={handleChange2} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10">
                        <option value="" disabled defaultValue>
                          Choose a value
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Create Password<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input type="password" name="password" onChange={handleChange2}
                        className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[16px] font-[500] text-dark90">
                        Confirm Password<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input type="password"
                        className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <button onClick={backToStage1} className="text-primary90 border-primary90 border-2 font-[500] font-popp text-[16px]  flex items-center justify-center rounded-[8px] backbtn">
                      Back
                    </button>
                    <button type="submit" className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                      Continue
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div> : stage3 ? <div className="flex flex-col min-h-screen font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-[21px]">
              <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative flex flex-1 items-center justify-center ">
            <div className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
            <div className="absolute top-0 inset-0 gradientbg opacity-20"></div>
            <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
              <motion.div initial={{
                opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }} className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[87%] md:w-[65%] lg:w-[55%] flex items-center justify-center">
                <div className="flex flex-col w-[90%] p-4 items-center justify-center">
                  <div className="flex items-center justify-center"><img src="/images/ProgressBar3.png" /></div>
                  <div className="flex flex-row gap-[9px] mt-3">
                    <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                      Account Verification
                    </p>
                  </div>
                  <div className="text-center mt-2 text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300 w-[300px]">
                    Please enter email and mobile number, then we will send OTP to verify
                  </div>
                  <form onSubmit={registerUser} className="flex flex-col w-full gap-4 mt-4">
                    <div className="flex flex-col my-[70px]">
                      <label className="text-[16px] font-[500] text-dark90">
                        OTP Code<span className="ml-2 text-red-500">*</span>
                      </label>
                      <input value="1234" step="any" type="number" onChange={handleOtp}
                        className="p-[16px] mt-2 text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                        placeholder="Enter OTP Code"
                      />
                    </div>

                    <button type="submit" className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                      Verify
                    </button>
                  </form>

                </div>
              </motion.div>
            </div>
          </div>
        </div> : stage4 ? <div className="flex flex-col min-h-screen font-popp">
          {/* Navbar */}
          <div className="flex flex-row w-full justify-center px-3 py-[28px]">
            <div className="flex flex-row items-center justify-center gap-[21px]">
              <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
              <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
                OptiCCS
              </span>
            </div>
            {/* login button */}
            <LoginButton />
          </div>
          {/* form */}
          <div className="relative p-5 flex-1 flex ">
            <div className="absolute top-0 h-full inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
            <div className="absolute top-0 h-full inset-0 gradientbg opacity-20"></div>
            <div className='flex items-center justify-center w-full'>
              <div className=" w-full h-[300px] z-[20] my-5 flex flex-col items-center justify-center">
                <motion.div initial={{
                  opacity: 0,
                }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }} className="bg-white h-full py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] lg:w-[55%] flex items-center justify-center">
                  <div className=" w-[90%]">
                    <div className="flex flex-col items-center justify-center gap-9">
                      <div className="flex items-center justify-center"><img src="/images/ProgressBar4.png" /></div>
                      <div className="flex flex-row gap-[9px] mt-3">
                        <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-primary70">
                          Registration  Successful
                        </p>
                      </div>


                      <Link to="/user/login" className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                        Login
                      </Link>

                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div> : null}
    </>
  );
};

export default Registration;
