'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Card from './Card';
export interface CatSwiperProps {
    id: number;
    title: string;
    bgposter: string;
    slug: string;
    year: number;
    rating: number;
    type?: 'serie' | 'movie'
}
const CatSwiper = ({ movies }: { movies: CatSwiperProps[] }) => {
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

            <div className='flex overflow-x-scroll scroll-smooth gap-[20px] duration-500'>
                {
                    movies.map((movie: CatSwiperProps) => (
                        <SwiperSlide
                            key={movie.id}
                        >
                            <Card movie={movie} />
                        </SwiperSlide>
                    ))
                }
            </div>
        </Swiper>
    )
}

export default CatSwiper