'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Card, { CatSwiperProps } from './Card';
import Link from "next/link";
import { FaAngleDoubleUp, FaCheck, FaFilm, FaPhotoVideo, FaPlus, FaStar } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SkeletonLoader } from './SkeletonLoader';

const CatSwiper = ({ movies, resolvedSearchParams, swiper }: { swiper: string, movies: CatSwiperProps[], resolvedSearchParams: { [key: string]: string | undefined } }) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const currentSearchParams = useSearchParams()

    const newLinkBySearchParams = (target: string, type: "swiper" | "type" | "filter") => {
        let url = "/?"
        if (type === "swiper") {
            if (resolvedSearchParams.type) url += `type=${resolvedSearchParams.type}&`
            if (resolvedSearchParams.filter) url += `filter=${resolvedSearchParams.filter}&`
        }
        if (type === "type") {
            if (resolvedSearchParams.swiper) url += `swiper=${resolvedSearchParams.swiper}&`
        }
        url += `${target}`
        return url
    }

    const handleSwiperChange = (newSwiper: string) => {
        setIsLoading(true)
        const newSearchParams = new URLSearchParams(currentSearchParams.toString())
        newSearchParams.set('swiper', newSwiper)
        router.push(`${pathname}?${newSearchParams}`, { scroll: false })
    }

    // Reset loading state when searchParams change
    useEffect(() => {
        setIsLoading(false)
    }, [resolvedSearchParams])
    return (
        <div className='w-full'>
            <div className="flex justify-center w-full">
                <ul className="list-none flex items-center justify-between sm:w-[90%] w-[96%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
                    <li>
                        <Link
                            href={newLinkBySearchParams("swiper=latest", "swiper")}
                            className={`${swiper === "latest" ? "text-white" : "text-[#ffffffb3]"
                                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                            prefetch={true}
                            onClick={() => handleSwiperChange("latest")}
                        >
                            <i>
                                <FaAngleDoubleUp size={14} />
                            </i>
                            <p>Latest</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={newLinkBySearchParams("swiper=movies", "swiper")}
                            className={`${swiper === "movies" ? "text-white" : "text-[#ffffffb3]"
                                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                            prefetch={true}
                            onClick={() => handleSwiperChange("movies")}
                        >
                            <i>
                                <FaFilm size={14} />
                            </i>
                            <p>Movies</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={newLinkBySearchParams("swiper=series", "swiper")}
                            className={`${swiper === "series" ? "text-white" : "text-[#ffffffb3]"
                                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                            prefetch={true}
                            onClick={() => handleSwiperChange("series")}
                        >
                            <i>
                                <FaClapperboard size={14} />
                            </i>
                            <p>Series</p>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={newLinkBySearchParams("swiper=recently", "swiper")}
                            className={`${swiper === "recently" ? "text-white" : "text-[#ffffffb3]"
                                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                            prefetch={true}
                            onClick={() => handleSwiperChange("recently")}
                        >
                            <i>
                                <FaPlus size={14} />
                            </i>
                            <p>Recently Added</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className=" mt-[20px] w-full">
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    direction='horizontal'
                    slidesPerView={8}
                    spaceBetween={10}
                    className={`myswiper`}
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
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        450: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        370: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        350: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        }
                    }}
                >
                    {isLoading ? (
                        [...Array(8)].map((_, idx) => (
                            <SwiperSlide key={`skeleton-${idx}`}>
                                <SkeletonLoader large={false} swiper={true} />
                            </SwiperSlide>
                        ))) :
                        (<div className='flex overflow-x-scroll scroll-smooth gap-[20px] duration-500 pb-[20px]'>
                            {
                                movies.map((movie: CatSwiperProps, idx: number) => (
                                    <SwiperSlide
                                        key={idx}
                                    >
                                        <Card media={movie} />
                                    </SwiperSlide>
                                ))
                            }
                        </div>)}
                </Swiper>
            </div>
        </div>

    )
}

export default CatSwiper