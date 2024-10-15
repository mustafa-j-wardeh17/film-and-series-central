import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaArrowDown, FaFacebook } from 'react-icons/fa'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTelegramLine } from 'react-icons/ri'
export const metadata: Metadata = {
    title: 'Contact'
};

const Contact = () => {
    return (
        <div className='contactpage'>
            <div className='contactcard'>
                <div className='w-full h-full relative'>
                    <div className='w-full h-full p-[2rem] bg-gradient-to-br from-[#ff0000ad] to-[#00000097]'>
                        <div className='flex items-center justify-between'>
                            <HiMiniBars3BottomLeft className='text-[2.5rem]' />
                            <AiFillSetting className='text-[2rem]' />
                        </div>
                        <div className='flex items-center justify-center w-full  mb-[20px]'>
                            <div className='relative w-[150px] h-[150px] overflow-hidden rounded-full border-[7px] border-solid border-[#fff]'>
                                <Image
                                    src={'/img/img.jpg'}
                                    alt='profile page'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>
                        <div className='w-full flex items-center flex-col text-[#fff]'>
                            <h1 className='font-bold text-[1.65rem]'>Mustafa Abu Wardeh</h1>
                            <h3 className='font-semibold text-[1.2rem] mb-[35px]'>Full Stack Developer</h3>
                        </div>
                        <div className='flex justify-center gap-[1rem]'>
                            <Link href={'www.fb.com'}>
                                <IoLogoInstagram className='text-[1.5rem] ' />
                            </Link>
                            <Link href={'www.fb.com'}>
                                <FaFacebook className='text-[1.5rem] ' />
                            </Link>
                            <Link href={'www.fb.com'}>
                                <RiTelegramLine className='text-[1.5rem] ' />
                            </Link>
                            <Link href={'www.fb.com'}>
                                <BsTwitter className='text-[1.5rem] ' />
                            </Link>
                        </div>
                    </div>
                    <div className='absolute w-full h-[180px] bottom-0 bg-white rounded-[30px] flex items-center flex-col justify-center text-center'>
                        <Link
                            href={'/'}
                            className='absolute duration-500 hover:bg-[#b43b3b] hover:text-white top-[-30px] left-1/2 transform bg-white -translate-x-1/2 shadow-red text-red-500 py-[1rem] px-[3.5rem] rounded-[30px] text-[1.3rem] font-semibold'
                        >
                            Follow
                        </Link>
                        <div className='text-[1.2rem] text-[#777] font-semibold flex flex-col items-center gap-[20px]'>
                            <p>Learn More About My Profile</p>
                            <FaArrowDown className='text-[1.2rem] mt-[1rem] text-[#e74444] animate-bounce' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact