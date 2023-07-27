import React, { useEffect, useState } from 'react'
import stateLocalGovts from '../../../utils/stateandlgas';
import { useAuth } from '../hooks/useAuth';
import axiosInstance from '../../../utils/axios';

const CreateStateUserAccount = () => {
    const [localGovts, setLocalGovts] = useState([]);
    const { stateAuth } = useAuth()
    const state = stateAuth.others.state;
    const [loading, setLoading] = useState()


    const [values, setValues] = useState({ lga: "", staffname: "", staffid: "", gender: "male", phone: "", email: "", userid: "", password: "", cadre: "", accountType: "National" });
    const [phoneError, setPhoneError] = useState({ status: false, message: "" })
    const [emailError, setEmailError] = useState({ status: false, message: "" })
    const [lgaError, setlgaError] = useState({ status: false, message: "" })
    const [staffnameError, setstaffnameError] = useState({ status: false, message: "" })
    const [staffidError, setstaffidError] = useState({ status: false, message: "" })
    const [genderError, setgenderError] = useState({ status: false, message: "" })
    const [useridError, setUseridError] = useState({ status: false, message: "" })
    const [passwordError, setPasswordError] = useState({ status: false, message: "" })
    const [cadreError, setCadreError] = useState({ status: false, message: "" })
    const [accountTypeError, setAccountTypeError] = useState({ status: false, message: "" })
    const handleChange2 = (event) => {
        const { name, value } = event.target;
        name == "gender" && setgenderError({ status: false, message: "" })
        name == "lga" && setlgaError({ status: false, message: "" })
        name == "staffname" && setstaffnameError({ status: false, message: "" })
        name == "staffid" && setstaffidError({ status: false, message: "" })
        name == "phone" && setPhoneError({ status: false, message: "" })
        name == "userid" && setUseridError({ status: false, message: "" })
        name == "email" && setEmailError({ status: false, message: "" })
        name == "password" && setPasswordError({ status: false, message: "" })
        name == "cadre" && setPasswordError({ status: false, message: "" })
        name == "accountType" && setAccountTypeError({ status: false, message: "" })
        setValues({ ...values, [name]: value });
    };
    const validateValues = () => {
        let noErrors = true;

        if (values.lga === "") {
            setlgaError({ status: true, message: "This field is required" });
            noErrors = false;
        }

        if (values.staffname === "") {
            setstaffnameError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.staffid === "") {
            setstaffidError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.gender === "") {
            setgenderError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.phone === "") {
            setPhoneError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.email === "") {
            setEmailError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.userid === "") {
            setUseridError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.password === "") {
            setPasswordError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.cadre === "") {
            setCadreError({ status: true, message: "This field is required" });
            noErrors = false;
        }
        if (values.accountType === "") {
            setAccountTypeError({ status: true, message: "This field is required" });
            noErrors = false;
        }


        return noErrors;
    };
    const handleEmailBlur = () => {
        if (values.email === '') {
            setEmailError({ status: true, message: 'This field is required' });
        }
    };
    const handlePhoneBlur = () => {
        if (values.phone === '') {
            setPhoneError({ status: true, message: 'This field is required' });
        }
    };
    const handleUseridBlur = () => {
        if (values.userid === '') {
            setUseridError({ status: true, message: 'This field is required' });
        }
    };
    const handleStateBlur = () => {
        if (values.lga === '') {
            setlgaError({ status: true, message: 'This field is required' });
        }
    };
    const handlestaffnameBlur = () => {
        if (values.staffname === '') {
            setstaffnameError({ status: true, message: 'This field is required' });
        }
    };
    const handlestaffidBlur = () => {
        if (values.staffid === '') {
            setstaffidError({ status: true, message: 'This field is required' });
        }
    };
    const handleGenderBlur = () => {
        if (values.gender === '') {
            setgenderError({ status: true, message: 'This field is required' });
        }
    };
    const handlePasswordBlur = () => {
        if (values.password === '') {
            setPasswordError({ status: true, message: 'This field is required' });
        }
    };
    const handleCadreBlur = () => {
        if (values.cadre === '') {
            setCadreError({ status: true, message: 'This field is required' });
        }
    };
    const handleAccountTypeBlur = () => {
        if (values.accountType === '') {
            setAccountTypeError({ status: true, message: 'This field is required' });
        }
    };
    const createAccount = async (e) => {
        e.preventDefault()
        validateValues()
        try {
            setLoading(true)
            const res = await axiosInstance.post("/admin/lga/users", {
                lga: values.lga,
                staffname: values.staffname,
                staffid: values.staffid,
                gender: values.gender,
                cadre: values.cadre,
                phone: values.phone,
                email: values.email,
                accountType: values.accountType,
                userid: values.userid,
                password: values.password
            })
            if (res.data) {
                alert("LGA User account has been created")
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    useEffect(() => {
        setLocalGovts(stateLocalGovts[capitalizeFirstLetter(state)]);
    }, [])
    return (
        <div>
            <form onSubmit={createAccount} className="mt-12">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-4 mt-4">
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Select LGA<span className="ml-2 text-red-500">*</span>
                            </label>
                            {lgaError.status && <span className='text-[12px] font-[500] italic text-red-500'>{lgaError.message}</span>}
                        </div>
                        <select name="lga" onChange={handleChange2} onBlur={handleStateBlur} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                            <option value="" >
                                Choose LGA
                            </option>
                            {localGovts?.map((localGovt) => (
                                <option key={localGovt} value={localGovt}>{localGovt}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Staff Name<span className="ml-2 text-red-500">*</span>
                            </label>
                            {staffnameError.status && <span className='text-[12px] font-[500] italic text-red-500'>{staffnameError.message}</span>}
                        </div>
                        <input type='text' name="staffname" onBlur={handlestaffnameBlur} onChange={handleChange2}
                            className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                            placeholder="Enter staff name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Staff ID<span className="ml-2 text-red-500">*</span>
                            </label>
                            {staffidError.status && <span className='text-[12px] font-[500] italic text-red-500'>{staffidError.message}</span>}
                        </div>
                        <input type='text' name="staffid" onBlur={handlestaffidBlur} onChange={handleChange2}
                            className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                            placeholder="Enter Staff ID"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Gender<span className="ml-2 text-red-500">*</span>
                            </label>
                            {genderError.status && <span className='text-[12px] font-[500] italic text-red-500'>{genderError.message}</span>}
                        </div>
                        <select name="gender" value={values.gender} onChange={handleChange2} onBlur={handleGenderBlur} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                            <option value="" disabled >
                                Choose a value
                            </option>
                            <option className=' ' value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Phone Number<span className="ml-2 text-red-500">*</span>
                            </label>
                            {phoneError.status && <span className='text-[12px] font-[500] italic text-red-500'>{phoneError.message}</span>}
                        </div>
                        <input type="text" onChange={handleChange2}
                            name="phone" onBlur={handlePhoneBlur}
                            className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Email address<span className="ml-2 text-red-500">*</span>
                            </label>
                            {emailError.status && <span className='text-[12px] font-[500] italic text-red-500'>{emailError.message}</span>}
                        </div>
                        <input type="email" onChange={handleChange2}
                            name="email" onBlur={handleEmailBlur}
                            className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Cadre<span className="ml-2 text-red-500">*</span>
                            </label>
                            {cadreError.status && <span className='text-[12px] font-[500] italic text-red-500'>{cadreError.message}</span>}
                        </div>
                        <input type='text' name="cadre" onBlur={handleCadreBlur} onChange={handleChange2}
                            className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                            placeholder="Enter Cadre"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className='flex gap-3 items-center'>
                            <label className="text-[16px] font-[500] text-dark90">
                                Account Type<span className="ml-2 text-red-500">*</span>
                            </label>
                            {accountTypeError.status && <span className='text-[12px] font-[500] italic text-red-500'>{accountTypeError.message}</span>}
                        </div>
                        <select name="accountType" value={values.accountType} onChange={handleChange2} onBlur={handleAccountTypeBlur} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                            <option value="" disabled >
                                Choose a value
                            </option>
                            <option className='' value="national">National</option>
                            <option value="state">State</option>
                            <option value="lga">LGA</option>
                            <option value="health Facility">Health Facility</option>
                        </select>
                    </div>

                </div>
                <div className='flex flex-col'>

                    <div className='text-primary90 cursor-pointer font-[500] text-[16px]'>Click to Generate User ID and Password</div>
                    <div className='flex items-center gap-5 my-4'>
                        <div className="flex flex-col">
                            <div className='flex gap-3 items-center'>
                                <label className="text-[16px] font-[500] text-dark90">
                                    User ID<span className="ml-2 text-red-500">*</span>
                                </label>
                                {useridError.status && <span className='text-[12px] font-[500] italic text-red-500'>{useridError.message}</span>}
                            </div>
                            <input type="text" onChange={handleChange2}
                                name="userid" onBlur={handleUseridBlur}
                                className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className='flex gap-3 items-center'>
                                <label className="text-[16px] font-[500] text-dark90">
                                    Enter Password<span className="ml-2 text-red-500">*</span>
                                </label>
                                {passwordError.status && <span className='text-[12px] font-[500] italic text-red-500'>{passwordError.message}</span>}
                            </div>
                            <input type="password" onChange={handleChange2}
                                name="password" onBlur={handlePasswordBlur}
                                className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-[#C6C7C8]"
                                placeholder="XXXX XXXX X4380"
                            />
                        </div>

                    </div>
                    <div className='flex items-center justify-center mt-8 w-full '>
                        {!loading ? <button type="submit" className="text-[#fff] w-[300px] font-[500] font-popp text-[16px] flex items-center justify-center min-w-[200px] bg-primary90 createbtn">
                            Create
                        </button> : <LoaderSmall />}

                    </div>
                </div>
            </form></div>
    )
}

export default CreateStateUserAccount