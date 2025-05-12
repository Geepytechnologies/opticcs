import React, { useEffect, useRef, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { showError, showSuccess } from "../../../utils/Toastmessage";
import { ToastContainer } from "react-toastify";
import ToastBox from "../../../utils/ToastBox";
import {
  useGetAllLgas,
  useGetAllSettlements,
  useGetAllStates,
  useGetAllWards,
} from "../queries/enumeration";
import { IoMdCloseCircle } from "react-icons/io";

const CreateEnumeratorAccount = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");
  const [selectedward, setSelectedWard] = useState("");
  const [selectedSettlement, setSelectedSettlement] = useState([]);

  const [formData, setFormData] = useState({
    enumeratorName: "",
    phoneNumber: "",
    gender: "",
    password: "",
    state: "",
    lga: "",
    ward: "",
    settlement: [""],
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
      state: selectedState,
      lga: selectedLga,
      ward: selectedward,
      settlement: selectedSettlement,
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
          settlement: [""],
        });
      }
    } catch (error) {
      showError(error?.response?.data || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  const { states } = useGetAllStates();
  useEffect(() => {
    setSelectedState(states?.result[0]);
  }, [states]);
  const { lgas } = useGetAllLgas({
    state: selectedState,
    enabled: !!selectedState,
  });

  useEffect(() => {
    setSelectedLga(lgas?.result[0]);
  }, [lgas]);

  const { wards } = useGetAllWards({
    state: selectedState,
    lga: selectedLga,
    enabled: !!selectedLga,
  });
  useEffect(() => {
    setSelectedWard(wards?.result[0]);
  }, [wards]);

  const { settlements } = useGetAllSettlements({
    state: selectedState,
    lga: selectedLga,
    ward: selectedward,
    enabled: !!selectedward,
  });

  return (
    <div>
      <ToastBox />
      <form onSubmit={handleSubmit} className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
          {/* Enumerator Name */}
          <div className="flex flex-col min-w-[350px]">
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
            <select
              name="state"
              onChange={(e) => {
                setSelectedState(e.target.value);
              }}
              value={selectedState}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              {states?.result.map((state, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={state}>
                  {state}
                </option>
              ))}
            </select>
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
            <select
              name="lga"
              onChange={(e) => {
                setSelectedLga(e.target.value);
              }}
              value={selectedLga}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              {lgas?.result.map((lga, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={lga}>
                  {lga}
                </option>
              ))}
            </select>
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
            <select
              name="ward"
              onChange={(e) => {
                setSelectedWard(e.target.value);
              }}
              value={selectedward}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              {wards?.result.map((ward, idx) => (
                <option key={idx} data-state={""} data-lga={""} value={ward}>
                  {ward}
                </option>
              ))}
            </select>
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
            <select
              name="settlement"
              onChange={(e) => {
                const value = e.target.value;
                setSelectedSettlement((prevItems) =>
                  prevItems.includes(value) ? prevItems : [...prevItems, value]
                );
              }}
              value={""}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]"
            >
              <option value={""}>Choose Settlement</option>
              {settlements?.result.map((item, idx) => (
                <option
                  key={idx}
                  data-state={""}
                  data-lga={""}
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {selectedSettlement?.map((settlement, idx) => (
                <div
                  key={idx}
                  className="bg-primary10 flex items-center gap-3 rounded-lg p-2 text-sm text-primary90 cursor-pointer"
                >
                  {settlement}
                  <IoMdCloseCircle
                    onClick={() => {
                      setSelectedSettlement((prevItems) =>
                        prevItems.filter((item) => item !== settlement)
                      );
                    }}
                  />
                </div>
              ))}
            </div>
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
