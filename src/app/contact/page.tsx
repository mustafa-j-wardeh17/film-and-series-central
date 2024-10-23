import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaArrowDown, FaFacebook } from 'react-icons/fa'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { IoLogoInstagram } from 'react-icons/io'
import { LiaLinkedin } from 'react-icons/lia'
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
                        {/* <div className='flex items-center justify-between'>
                            <HiMiniBars3BottomLeft className='text-[2.5rem]' />
                            <AiFillSetting className='text-[2rem]' />
                        </div> */}
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
                            <h1 className='font-bold sm:text-[1.65rem] text-[1.54rem]'>Mustafa Abu Wardeh</h1>
                            <h3 className='font-semibold sm:text-[1.2rem] text-[1.1rem] mb-[35px]'>Full Stack Developer</h3>
                        </div>
                        <div className='flex justify-center gap-[1rem]'>
                            <Link
                                className='hover:scale-110 hover:text-white'
                                href={'https://www.instagram.com/mustafa.j.wardeh17/'}>
                                <IoLogoInstagram className='text-[1.5rem] ' />
                            </Link>
                            <Link
                                className='hover:scale-110 hover:text-white'
                                href={'https://www.facebook.com/mustafa.j.wardeh17/'}>
                                <FaFacebook className='text-[1.5rem] ' />
                            </Link>
                            <Link
                                className='hover:scale-110 hover:text-white'
                                href={'https://t.me/KillSwitsh'}>
                                <RiTelegramLine className='text-[1.5rem] ' />
                            </Link>
                        </div>
                    </div>
                    <div className='absolute w-full h-[180px] bottom-0 bg-white rounded-[30px] flex items-center flex-col justify-center text-center'>
                        <Link
                            href={'https://www.linkedin.com/in/mustafa-abu-wardeh1720/'}
                            className='absolute flex items-center justify-center  duration-500 hover:bg-[#b43b3b] hover:text-white top-[-30px] left-1/2 transform bg-white -translate-x-1/2 shadow-red text-red-500 py-[1rem] px-[3.5rem] rounded-[30px] text-[1.3rem] font-semibold'
                        >
                            Linked<BsLinkedin />
                        </Link>
                        <div className='text-[1.2rem] text-[#777] font-semibold flex flex-col items-center'>
                            <p className='text-[14px] sm:text-[16px]'>Call Me</p>
                            <FaArrowDown className='text-[1.2rem] mt-[1rem] text-[#e74444] animate-bounce' />
                            <a href="tel:+972569470288" className=" hover:text-red-400 text-red-600 duration-300">+972 56 947 0288</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact