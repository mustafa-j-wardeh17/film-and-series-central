'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import WelcomeAnimation from './WelcomeAnimation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

const MainSwiper = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <div className="w-full">
            {loading ? <WelcomeAnimation /> : <HomeSwiper />}
        </div>
    );
};

export default MainSwiper;

const HomeSwiper = () => {
    return (
        <div className="mt-[-58px] z-[-1]">
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                direction='horizontal'
                loop={true}
                speed={1200}
                watchSlidesProgress={true}
                parallax={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation, Autoplay]}
                scrollbar={{ draggable: true }}
            >
                {/* 4 Slides, each containing a centered number */}

                {
                    [1, 2, 3, 4].map(item => (
                        <SwiperSlide
                            key={item}
                        >
                            <div className="flex relative justify-center items-center z-[2] slideimagebx ">
                                <Image
                                    src={`/slider/${item}.webp`}
                                    alt={`movie-${item}`}
                                    loading='lazy'
                                    fill
                                    className='object-fill absolute left-0 top-0 z-[-1]'
                                />
                                {/* content */}
                                <div className='absolute lg:top-[60%]  sm:top-[55%] top-[50%]  left-[3%] h-auto z-[2]'>
                                    <div className='flex items-center sm:gap-[20px] gap-[10px'>
                                        <div className='md:w-[120px]  md:h-[170px] w-[100px] h-[120px] object-cover relative overflow-hidden rounded-[8px]'>
                                            <Image
                                                src={`/slider/${item}.webp`}
                                                alt={`movie ${item} poster`}
                                                fill
                                                className='object-cover '
                                            />
                                        </div>
                                        <div className='p-2 text-white'>
                                            <h1 className='md:text-[40px] text-[24px] md:mt-[-12px] md:mb-[10px] transition ease-linear duration-1000  '>Movie{" " + item}</h1>
                                            <h6 className=' text-[13px] md:mb-[10px] transition-'>Duration: <span className='text-white/70'>1h 32m</span></h6>
                                            <h3 className='flex gap-2 items-center text-white'>
                                                <span className='text-yellow-500'>&#9733;</span>
                                                5.5
                                                <span className='text-white/80 capitalize text-xs md:text-sm '>genres, genres, genres</span>
                                            </h3>
                                            <div className='flex items-center mt-[8px] '>
                                                <Link href={`/movies/${item}`}>
                                                    <button id='btn_download' className='flex items-center justify-center w-[180px] gap-[5px] shadow-red2 hover:bg-black hover:shadow-white  bg-red-500 btn_download md:py-2 py-1 rounded-lg md:px-3 px-2'>
                                                        <FaDownload size={14} />
                                                        <p className='font-bold md:text-[16px] text-sm'>DOWNLOAD</p>
                                                        <span className='bg-white font-extrabold text-xs text-black  py-1 px-1 rounded-md'>FREE</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
