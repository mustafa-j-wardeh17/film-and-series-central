'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Pagination = ({ totalPages }: { totalPages: number }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const page = Number(searchParams.get('page')) || 1

    const createPaginationLink = (type: "next" | "previous") => {
        const urlParam = new URLSearchParams(searchParams.toString())
        let currentPage = page

        if (type === 'next' && currentPage < totalPages) {
            currentPage = page + 1
        } else if (type === 'previous' && page > 1) {
            currentPage = page - 1
        }

        urlParam.set('page', String(currentPage))
        return `${pathname}?${urlParam.toString()}`
    }

    return (
        <div className='w-full flex items-center justify-center my-[20px]'>

            {/* Previous Page Button */}
            <a
                href={createPaginationLink('previous')}
                className={`bg-[#111010] relative text-white p-[0.35em] pr-[1.2em] rounded-[0.9em] font-semibold sm:text-[17px] text-[14px] border-none leading-[0.05em] flex items-center overflow-hidden h-[2.8em] pl-[3.3em] mr-[1em] ${page === 1 ? 'opacity-50 cursor-not-allowed hidden' : 'cssbuttons_io_button cursor-pointer'}`}
                aria-disabled={page === 1}
            >
                <div className='icon bg-[#dc1818] mr-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-pagination left-[0.3em] transition-all duration-300'>
                    <FaArrowLeft />
                </div>
                Previous Page
            </a>

            {/* Next Page Button */}
            <a
                href={createPaginationLink('next')}
                className={`bg-[#111010] relative text-white p-[0.35em] pl-[1.2em] rounded-[0.9em] font-semibold sm:text-[17px] text-[14px] border-none leading-[0.05em] flex items-center overflow-hidden h-[2.8em] pr-[3.3em] ${page === totalPages ? 'opacity-50 cursor-not-allowed hidden' : 'cssbuttons_io_button cursor-pointer'}`}
                aria-disabled={page === totalPages}
            >
                Next Page
                <div className='icon bg-[#dc1818] ml-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-pagination right-[0.3em] transition-all duration-300'>
                    <FaArrowRight />
                </div>
            </a>
        </div>
    )
}

export default Pagination
