import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import { downloadTable } from "../../../utils/helpers";
import Csvbutton from "../../../components/Csvbutton";
import { useGetLoginCredentials } from "../queries/enumeration";
import copyIcon from "../../../assets/copy.svg";

const EnumeratorLoginCredentials = () => {
  const [copied, setCopied] = useState(false);
  const [stateusers, setStateusers] = useState();
  const [isActive, setIsActive] = useState(1);
  //pagination
  const [currentpage, setCurrentpage] = useState(1);

  const tableRef = useRef();
  const { credentials, isLoading } = useGetLoginCredentials();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      //   setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="w-full mt-9">
      <Csvbutton tableRef={tableRef} tableName={"user list"} />
      {/* patients table */}
      <div className="w-full flex items-center justify-center font-inter my-5">
        <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
          <table ref={tableRef} className="cursor-default mt-7 w-full">
            <thead>
              <tr>
                <th>SN</th>
                <th>Enumerator Name</th>
                <th>User ID</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {credentials?.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                >
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.userID}</td>
                  <td>{item.password}</td>
                  <td onClick={handleCopy} className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <img src={copyIcon} alt="Copy Icon" className="w-5 h-5" />
                      <span>{copied ? "Copied!!!" : "Copy Login Details"}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* pagination */}
          <Pagination
            currentpage={currentpage}
            setCurrentpage={setCurrentpage}
            pages={stateusers?.length / 10}
            displaynum={10}
          />
        </div>
      </div>
    </div>
  );
};

export default EnumeratorLoginCredentials;
