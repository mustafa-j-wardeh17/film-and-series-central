'use client'
import React from 'react'

const ScrollButtons = ({ type }: { type: string }) => {

    const scrollLeft = () => {
        const scrollContainer = document.querySelector(`.${type}`) as HTMLElement | null;
        if (scrollContainer && scrollContainer.scrollLeft !== undefined) {
            scrollContainer.scrollLeft -= 300;
        }
    }
    const scrollRight = () => {
        const scrollContainer = document.querySelector(`.${type}`) as HTMLElement | null;
        if (scrollContainer && scrollContainer.scrollLeft !== undefined) {
            scrollContainer.scrollLeft += 300

        }
    }
    return (
        <div className='flex relative'>
            <button
                onClick={scrollLeft}
                className='absolute left-0 top-0 py-[4px] px-[20px] border-[2px] border-solid border-[#ff0000b4] bg-transparent outline-none text-white w-[120px] rounded-[20px] font-sans font-semibold text-[20px] cursor-pointer transition-all duration-200 hover:bg-neutral-900 hover:border-[2px] hover:border-[#ff000054]'
            >
                &#8592;
            </button>
            <button
                onClick={scrollRight}
                className='absolute right-0 top-0 py-[4px] px-[20px] border-[2px] border-solid border-[#ff0000b4] bg-transparent outline-none text-white w-[120px] rounded-[20px] font-sans font-semibold text-[20px] cursor-pointer transition-all duration-200 hover:bg-neutral-900 hover:border-[2px] hover:border-[#ff000054]'
            >
                &#8594;
            </button>
        </div>
    )
}

export default ScrollButtons