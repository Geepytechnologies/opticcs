import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import CustomToast from "../../../components/CustomToast";
import { useAuth } from "../hooks/useAuth";
import LoaderSmall from "../../../components/LoaderSmall";

const CreateWards = () => {
  const { lgaAuth } = useAuth();
  const { lga, state } = lgaAuth.others;
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastmessage, setToastmessage] = useState("");
  const [toastStatus, setToastStatus] = useState("");
  const [wards, setWards] = useState();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const loadToast = (myMessage, status) => {
    scrollToTop();
    setToastmessage(myMessage);
    setShowToast(true);
    setToastStatus(status);
  };
  const handleToastClose = () => {
    setShowToast(false);
  };
  const getAllWards = async () => {
    try {
      const result = await axiosInstance.get(`/admin/wards/getAllWards`);
      setWards(result.data.result);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getwardsForLGA = async () => {
    try {
      const result = await axiosInstance.get(
        `/admin/healthfacility/find/lga?lga=${lga}`
      );
      setWards(result.data);
    } catch (error) {}
  };
  useEffect(() => {
    // getwardsForLGA();
    getAllWards();
  }, []);
  const [values, setValues] = useState({
    state: "",
    lga: "",
    ward: "",
  });
  const [stateError, setStateError] = useState({ status: false, message: "" });
  const [lgaError, setLgaError] = useState({ status: false, message: "" });
  const [wardError, setwardError] = useState({ status: false, message: "" });

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    name == "state" && setStateError({ status: false, message: "" });
    name == "lga" && setLgaError({ status: false, message: "" });
    name == "ward" && setwardError({ status: false, message: "" });

    setValues({ ...values, [name]: value });
  };
  const validateValues = () => {
    let noErrors = true;

    if (values.state === "") {
      setStateError({ status: true, message: "This field is required" });
      noErrors = false;
    }

    if (values.lga === "") {
      setLgaError({
        status: true,
        message: "This field is required",
      });
      noErrors = false;
    }
    if (values.ward === "") {
      setwardError({
        status: true,
        message: "This field is required",
      });
      noErrors = false;
    }

    return noErrors;
  };
  const handleStateBlur = () => {
    if (values.state === "") {
      setStateError({ status: true, message: "This field is required" });
    }
  };
  const handleLgaBlur = () => {
    if (values.lga === "") {
      setLgaError({ status: true, message: "This field is required" });
    }
  };
  const handlewardBlur = () => {
    if (values.ward === "") {
      setwardError({
        status: true,
        message: "This field is required",
      });
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    validateValues();
    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/admin/wards/create", {
        state: state,
        lga: lga,
        ward: values.ward,
      });
      if (res.data) {
        setIsLoading(false);
        loadToast("Ward created", "success");
      }
    } catch (err) {
      setIsLoading(false);
      loadToast("Something went wrong", "error");
    } finally {
      setValues({
        ward: "",
        state: "",
        lga: "",
      });
    }
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <>
      {showToast && (
        <CustomToast
          toastmessage={toastmessage}
          onClose={handleToastClose}
          status={toastStatus}
        />
      )}
      <div>
        <form autoComplete="false" onSubmit={createAccount} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
            <div className="flex flex-col">
              <div className="flex gap-3 items-center">
                <label className="text-[16px] font-[500] text-dark90">
                  Select Ward<span className="ml-2 text-red-500">*</span>
                </label>
              </div>
              <select
                name="ward"
                value={values.ward}
                onChange={handleChange2}
                onBlur={handlewardBlur}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              >
                <option value="" disabled>
                  Choose a value
                </option>
                {wards?.map((item, index) => (
                  <option key={index} value={item.healthfacilityname}>
                    {item.healthfacilityname}
                  </option>
                ))}
              </select>
              {wardError.status && (
                <span className="text-[12px] font-[500] italic text-red-500">
                  {wardError.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center mt-8 w-full ">
              {!isLoading ? (
                <button
                  type="submit"
                  className="text-[#fff] w-[300px] font-[500] font-popp text-[16px] flex items-center justify-center min-w-[200px] bg-primary90 createbtn"
                >
                  Create
                </button>
              ) : (
                <LoaderSmall />
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateWards;
