import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import { downloadTable } from "../../../utils/helpers";
import Csvbutton from "../../../components/Csvbutton";
import { useGetEnumerationData } from "../queries/enumeration";
import ModalPopup from "./ui/ModalPopup";
import SubmissionView from "./ui/view/SubmissionView";

const EnumerationSubmissions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [currentpage, setCurrentpage] = useState(1);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const tableRef = useRef();

  const { data: submissions, isLoading } = useGetEnumerationData();
  const handleOpen = (item) => {
    setModalItem(item);
    openModal();
  };
  return (
    <div className="min-w-[1000px] w-full mt-9 ">
      {/* patients table */}
      <div className="w-full flex items-center justify-center font-inter">
        <ModalPopup
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          onClose={closeModal}
        >
          <SubmissionView item={modalItem} />
        </ModalPopup>
        <div className=" w-[95%] flex flex-col items-center justify-start pl-6 py-4">
          <table ref={tableRef} className="cursor-default mt-7 w-full">
            <thead>
              <tr>
                <th>SN</th>
                <th>Client Name</th>
                <th>Client Number</th>
                <th>State</th>
                <th>LGA</th>
                <th>No. of ANC</th>
                <th>Date Created</th>
                <th>Phone Number</th>
                <th>LMP</th>
              </tr>
            </thead>
            <tbody>
              {submissions.data?.map((item, index) => (
                <tr
                  onClick={() => handleOpen(item)}
                  key={index}
                  className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                >
                  <td>{item.id}</td>
                  <td>{item.firstName + " " + item.surName}</td>
                  <td>{item.clientNumber}</td>
                  <td>{item.state}</td>
                  <td>{item.lga}</td>
                  <td>{item.numberOfAncVisits}</td>
                  <td>{moment(item.createdAt).fromNow()}</td>
                  <td className="">{item.phone}</td>
                  <td className="">{item.lmp}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* pagination */}
          <Pagination
            currentpage={currentpage}
            setCurrentpage={setCurrentpage}
            pages={
              submissions.pagination?.totalCount /
              submissions.pagination?.pageSize
            }
            displaynum={submissions.pagination?.pageSize}
          />
        </div>
      </div>
    </div>
  );
};

export default EnumerationSubmissions;
