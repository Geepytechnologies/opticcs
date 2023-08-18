import React, { useEffect, useState } from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2'

const Pagination = ({ currentpage, setCurrentpage, pages }) => {
    const [initialPage, setInitialPage] = useState(0)
    const [finalPage, setFinalPage] = useState(10)
    const [showarrow, setShowarrow] = useState(true)
    const numOfPages = Array.from({ length: (pages > 1) ? (pages + 1) : pages }).map((_, index) => index + 1);
    const pageleft = () => {
        if (currentpage !== 1) {
            setCurrentpage(currentpage - 1)
        }
    }
    const pageright = () => {
        if ((currentpage <= pages)) {
            setCurrentpage(currentpage + 1)
        }
        if (finalPage == currentpage && currentpage !== pages) {
            setFinalPage(finalPage * 2)
            setInitialPage(initialPage + 10)
            setCurrentpage(currentpage + 1)
        }
    }
    useEffect(() => {
        if (pages < 1) {
            setShowarrow(false)
        } else {
            setShowarrow(true)
        }
    }, [pages, currentpage])
    return (
        <div className='flex items-center justify-center mt-9'>
            <div className="flex items-center gap-3">
                {showarrow && <HiChevronDoubleLeft onClick={() => pageleft()} className='font-[600] cursor-pointer' />}
                <div className='mx-3 flex items-center justify-center gap-3'>
                    {numOfPages.slice(initialPage, finalPage).map((item, index) => (
                        <div key={index} className=''>
                            <div onClick={() => setCurrentpage(item)} className={`w-7 h-7 cursor-pointer flex items-center justify-center ${currentpage == item && 'bg-primary90 rounded-full text-white'}`}>{item}</div>
                        </div>
                    ))}

                </div>
                {showarrow && <HiChevronDoubleRight onClick={pageright} className='font-[600] cursor-pointer' />}
            </div>
        </div>)
}

export default Pagination