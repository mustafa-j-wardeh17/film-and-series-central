'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import WelcomeAnimation from './WelcomeAnimation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import Loader from './Loader';

interface MainSwiperProps {
    id: number;
    title: string;
    bgposter: string;
    wideposter: string;
    duration: number;
    slug: string;
    year: number;
    rating: number;
    genre: {
        name: string
    };
}
const MainSwiper = ({ movies }: { movies: MainSwiperProps[] }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const hasShownWelcome = localStorage.getItem('welcomeShown');

        if (hasShownWelcome) {
            setLoading(false);
        } else {
            // Set localStorage after the welcome animation has played
            localStorage.setItem('welcomeShown', 'true');
            document.body.style.overflow = 'hidden'; // Disable scrolling during animation
        }
    }, []);

    // This will be passed to WelcomeAnimation to hide it when the video ends
    const handleAnimationEnd = () => {
        setLoading(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    return (
        <div className="w-full">
            {!loading ? <HomeSwiper movies={movies} /> : <WelcomeAnimation onAnimationEnd={handleAnimationEnd} />}
        </div>
    );

};

export default MainSwiper;

const HomeSwiper = ({ movies }: { movies: MainSwiperProps[] }) => {

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
                    movies.map((item: MainSwiperProps) =>
                    (
                        <SwiperSlide
                            key={item.id}
                        >
                            <div className="flex relative justify-center items-center z-[2] slideimagebx ">

                                <Image
                                    src={item.wideposter}
                                    alt={`movie-${item.id}`}
                                    loading='lazy'
                                    fill
                                    className='aspect-[1.5/1] absolute left-0 top-0 z-[-1]'
                                />
                                {/* content */}
                                <div className='absolute lg:top-[60%]  sm:top-[55%] top-[50%]  left-[3%] h-auto z-[2]'>
                                    <div className='flex items-center sm:gap-[20px] gap-[10px'>
                                        <div className='md:w-[120px]  md:h-[170px] w-[100px] h-[120px] object-cover relative overflow-hidden rounded-[8px]'>
                                            <Image
                                                src={item.bgposter}
                                                alt={`movie ${item.id} poster`}
                                                fill
                                                className='aspect-[1/1.5]'
                                            />
                                        </div>
                                        <div className='p-2 text-white'>
                                            <h1 className='md:text-[40px] 3xs:text-[24px] 4xs:text-[22px] text-[19px] md:mt-[-12px] md:mb-[10px] mb-2 mt-3 transition ease-linear duration-1000  '>{item.title}</h1>
                                            <h6 className=' text-[13px] md:mb-[10px]  '>Duration: <span className='text-white/70'>{Math.floor((item.duration / 60))}h {item.duration - (Math.floor(item.duration / 60) * 60)}m</span></h6>
                                            <h3 className='flex md:gap-2 gap-1 items-center text-white sm:text-xs text-[12px] md:text-sm'>
                                                <span className='text-yellow-500'>&#9733;</span>
                                                {item.rating}
                                                <span className='text-white/80 capitalize sm:text-xs text-[12px] md:text-sm '>{item.genre.name}</span>
                                            </h3>
                                            <div className='flex items-center mt-[8px] '>
                                                <Link href={`/movies/${item.slug}`}>
                                                    <button id='btn_download' className='flex items-center justify-center md:w-[180px] sm:w-[160px]  gap-[5px] shadow-red2 hover:bg-black hover:shadow-white  bg-red-500 btn_download md:py-2 py-1 rounded-lg md:px-3 px-2'>
                                                        <FaDownload size={14} />
                                                        <p className='font-bold md:text-[16px] sm:text-sm text-[13px]'>DOWNLOAD</p>
                                                        <span className='bg-white font-extrabold md:text-[14px] sm:text-xs md:block hidden text-[12px] text-black  py-1 px-1 rounded-md'>FREE</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </div>
    );
};
