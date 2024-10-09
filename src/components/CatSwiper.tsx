'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Link from 'next/link';
import Image from 'next/image';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';

const CatSwiper = () => {
    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            direction='horizontal'
            slidesPerView={8}
            spaceBetween={10}
            className='myswiper'
            loop={true}
            speed={1200}
            watchSlidesProgress={true}
            parallax={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            scrollbar={{ draggable: true }}

            breakpoints={{
                1800: {
                    slidesPerView: 8,
                    spaceBetween: 10
                },
                1500: {
                    slidesPerView: 7,
                    spaceBetween: 10
                },
                1250: {
                    slidesPerView: 6,
                    spaceBetween: 20
                },
                1040: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                }
                ,
                650: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                450: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                370: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }}
        >

            <div className='flex overflow-x-scroll scroll-smooth gap-[20px] duration-500'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 23, 32, 4, 12, 321, 3, 213, 12].map(movie => (
                        <SwiperSlide
                            key={movie}

                        >
                            <div className='max-w-[200px] min-w-[200px] h-[300px]'>
                                <Link
                                    href={`/movies/${movie}`}
                                >
                                    <div className='w-full relative h-[80%] rounded-[8px] overflow-hidden'>
                                        <Image
                                            src={'/abcd.jpg'}
                                            alt={`${movie} poster`}
                                            fill
                                        />
                                    </div>
                                    <div className='w-full h-[15%] mt-[5px]'>
                                        <h5 className='overflow-ellipsis text-nowrap font-bold overflow-hidden text-[14px]'>{movie}</h5>
                                        <h6 className='flex items-center justify-between text-[13px] py-[2px]'>
                                            <span>2014</span>
                                            <div className='flex items-center'>
                                                <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                                    <FaHeart />
                                                </i>
                                                <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                                    <FaEye />
                                                </i>
                                                <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                                    <FaStar />
                                                </i>
                                                <h6 className='text-[13px] text-yellow-500 mt-[3px] '>{5.50}</h6>
                                            </div>
                                        </h6>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </div>
        </Swiper>
    )
}

export default CatSwiper