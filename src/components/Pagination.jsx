import React, { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

const Pagination = ({ currentpage, setCurrentpage, pages }) => {
  const [initialPage, setInitialPage] = useState(0);
  const [finalPage, setFinalPage] = useState(10);
  const [showarrow, setShowarrow] = useState(true);
  const numOfPages = Array.from({ length: pages > 1 ? pages + 1 : pages }).map(
    (_, index) => index + 1
  );
  const pageleft = () => {
    if (currentpage !== 1) {
      setCurrentpage({ value: currentpage - 1, isPagination: true });
    }
    if (currentpage == 1) {
      return null;
    }
  };
  const pageright = () => {
    if (currentpage <= pages) {
      setCurrentpage({ value: currentpage + 1, isPagination: true });
    }
    if (finalPage == currentpage && currentpage !== pages) {
      setFinalPage(finalPage * 2);
      setInitialPage(initialPage + 10);
      setCurrentpage({ value: currentpage + 1, isPagination: true });
    }
  };
  useEffect(() => {
    if (pages < 1) {
      setShowarrow(false);
    } else {
      setShowarrow(true);
    }
    if (currentpage <= initialPage && currentpage > 1) {
      setInitialPage(finalPage / 10 - 1);
      setFinalPage(finalPage / 10 - 1 + 10);
    }
    if (currentpage <= initialPage && currentpage == 1) {
      setInitialPage(0);
      setFinalPage(10);
    }
  }, [pages, currentpage]);
  // console.log({ cp: currentpage, ip: initialPage, fp: finalPage });
  return (
    <div className="flex items-center justify-center mt-9">
      <div className="flex items-center gap-3">
        {showarrow && currentpage > 1 ? (
          <div
            onClick={() => pageleft()}
            className={` font-[600] bg-primary50 text-white px-3 py-2 cursor-pointer`}
          >
            Previous
          </div>
        ) : null}
        <div className="mx-3 flex items-center justify-center gap-3">
          {numOfPages.slice(initialPage, finalPage).map((item, index) => (
            <div key={index} className="">
              <div
                onClick={() =>
                  setCurrentpage({ value: item, isPagination: true })
                }
                className={`w-7 h-7 cursor-pointer border-2 border-gray-400 flex items-center justify-center ${
                  currentpage == item && "bg-primary90 text-white"
                }`}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
        {showarrow && (
          <div
            onClick={() => pageright()}
            className="font-[600] bg-primary50 text-white px-3 py-2 cursor-pointer"
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
