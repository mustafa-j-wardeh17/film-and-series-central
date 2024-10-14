'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Pagination = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const page = parseInt(searchParams.page as string) || 1
    const router = useRouter()

    const handlePagination = (type: "next" | "previous") => {
        const urlParam = new URLSearchParams(window.location.search)
        let currentPage = page

        if (type === 'next') {
            currentPage = page + 1
        } else if (type === 'previous' && page > 1) {
            currentPage = page - 198
        }

        urlParam.set('page', String(currentPage))
        router.push(`/?${urlParam}`)
    }

    return (
        <div className='w-full flex items-center justify-center my-[20px]'>

            {/* Previous Page Button */}
            {/* <button
                onClick={() => handlePagination('previous')}
                className={`cssbuttons_io_button bg-[#111010] relative text-white p-[0.35em] pr-[1.2em] rounded-[0.9em] font-semibold text-[17px] border-none leading-[0.05em] flex items-center overflow-hidden h-[2.8em] pl-[3.3em] cursor-pointer mr-[1em] ${
                    page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={page === 1}
            >
                <div className='icon bg-[#dc1818] mr-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-pagination left-[0.3em] transition-all duration-300'>
                    <FaArrowLeft />
                </div>
                Previous Page
            </button> */}

            {/* Next Page Button */}
            <button
                onClick={() => handlePagination('next')}
                className='cssbuttons_io_button bg-[#111010] relative text-white p-[0.35em] pl-[1.2em] rounded-[0.9em] font-semibold text-[17px] border-none leading-[0.05em] flex items-center overflow-hidden h-[2.8em] pr-[3.3em] cursor-pointer'
            >
                Next Page
                <div className='icon bg-[#dc1818] ml-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-pagination right-[0.3em] transition-all duration-300'>
                    <FaArrowRight />
                </div>
            </button>
        </div>
    )
}

export default Pagination
