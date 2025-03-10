import React, { useRef, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { showError, showSuccess } from "../../../utils/Toastmessage";
import { ToastContainer } from "react-toastify";
import ToastBox from "../../../utils/ToastBox";

const CreateEnumeratorAccount = () => {
  const [formData, setFormData] = useState({
    enumeratorName: "",
    phoneNumber: "",
    gender: "",
    password: "",
    state: "",
    lga: "",
    ward: "",
    settlement: "",
  });

  const [errors, setErrors] = useState({
    enumeratorName: "",
    phoneNumber: "",
    gender: "",
    password: "",
    state: "",
    lga: "",
    ward: "",
    settlement: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the field being updated
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate each field
    if (!formData.enumeratorName.trim()) {
      newErrors.enumeratorName = "Enumerator Name is required";
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    }
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
      isValid = false;
    }
    if (!formData.lga.trim()) {
      newErrors.lga = "LGA is required";
      isValid = false;
    }
    if (!formData.ward.trim()) {
      newErrors.ward = "Ward is required";
      isValid = false;
    }
    if (!formData.settlement.trim()) {
      newErrors.settlement = "Settlement is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showError("Please fill all required fields");
      return;
    }
    const data = {
      name: formData.enumeratorName,
      phone: formData.phoneNumber,
      gender: formData.gender,
      state: formData.state,
      lga: formData.lga,
      ward: formData.ward,
      settlement: formData.settlement,
      password: formData.password,
    };
    setLoading(true);
    try {
      const res = await axiosInstance.post("/enumeration/enumerators", data);
      if (res.data) {
        showSuccess("Enumerator account created successfully");
        setFormData({
          enumeratorName: "",
          phoneNumber: "",
          gender: "",
          password: "",
          state: "",
          lga: "",
          ward: "",
          settlement: "",
        });
      }
    } catch (error) {
      showError(error?.response?.data || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastBox />
      <form onSubmit={handleSubmit} className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
          {/* Enumerator Name */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Enumerator Name<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.enumeratorName && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.enumeratorName}
                </span>
              )}
            </div>
            <input
              type="text"
              name="enumeratorName"
              value={formData.enumeratorName}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Enumerator Name"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Phone Number<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.phoneNumber && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Gender<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.gender && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.gender}
                </span>
              )}
            </div>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Gender"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Password<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.password && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.password}
                </span>
              )}
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Password"
            />
          </div>

          {/* State */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                State<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.state && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.state}
                </span>
              )}
            </div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter State"
            />
          </div>

          {/* LGA */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                LGA<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.lga && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.lga}
                </span>
              )}
            </div>
            <input
              type="text"
              name="lga"
              value={formData.lga}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter LGA"
            />
          </div>

          {/* Ward */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Ward<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.ward && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.ward}
                </span>
              )}
            </div>
            <input
              type="text"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Ward"
            />
          </div>

          {/* Settlement */}
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <label className="text-[16px] font-[500] text-dark90">
                Settlement<span className="ml-2 text-red-500">*</span>
              </label>
              {errors.settlement && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {errors.settlement}
                </span>
              )}
            </div>
            <input
              type="text"
              name="settlement"
              value={formData.settlement}
              onChange={handleChange}
              className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              placeholder="Enter Settlement"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-8 w-full">
          <button
            type="submit"
            disabled={loading}
            className={`text-[#fff] w-[300px] font-[500] font-popp text-[16px] flex items-center justify-center min-w-[200px] bg-primary90 ${
              loading ? "opacity-30" : ""
            } createbtn`}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateEnumeratorAccount;
