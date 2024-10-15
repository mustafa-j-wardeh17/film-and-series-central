'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { FaFacebookSquare, FaInstagram, FaWhatsappSquare } from 'react-icons/fa'
import { FaShareFromSquare } from 'react-icons/fa6'

const SocialShare = () => {
    const [showShare, setShowShare] = useState(false)
    const shareRef = useRef<HTMLDivElement>(null)

    const handleShare = () => {
        setShowShare(prev => !prev)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
            setShowShare(false)
        }
    }

    useEffect(() => {
        if (showShare) {
            document.addEventListener('click', handleClickOutside)
        } else {
            document.removeEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [showShare])

    return (
        <>
            <button
                onClick={handleShare}
                className='absolute top-[30px] right-[20px] text-[25px] w-[32px] border-none bg-transparent text-[#78a6b8] cursor-pointer hover:text-[#6a7c8f]'>
                <FaShareFromSquare />
            </button>
            {showShare && (
                <div
                    ref={shareRef}
                    className='flex fixed flex-wrap rounded-[20px] items-center w-[280px] justify-between z-[9] bg-white shadow-lg transition-transform duration-300 transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-[20px]'
                >
                    <div className='flex flex-col items-center justify-center w-[80px]'>
                        <Link target='_blank' href={'/'}>
                            <FaInstagram color='purple' className='text-[40px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                        </Link>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[80px]'>
                        <Link target='_blank' href={'/'}>
                            <FaFacebookSquare color='blue' className='text-[40px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                        </Link>
                    </div>

                    <div className='flex flex-col items-center justify-center w-[80px]'>
                        <Link target='_blank' href={'/'}>
                            <FaWhatsappSquare color='green' className='text-[40px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                        </Link>
                    </div>
                </div>

            )}
        </>
    )
}

export default SocialShare
