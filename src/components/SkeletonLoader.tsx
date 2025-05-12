import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Skeleton loader component
export const SkeletonLoader = ({ large, swiper }: { large: boolean; swiper?: boolean }) => (
    <>
        {
            swiper ? (
                <div className={`animate-pulse ${large ? 'lg:w-[280px]  md:w-[220px] sm:w-[240px] 2xs:w-[220px] 3xs:w-[190px] 4xs:w-[160px] 5xs:w-[140px] w-[75%] aspect-[2/3]' : 'lg:w-[180px] md:w-[187px] sm:w-[160px] 2xs:[w-170px] 3xs:w-[150px] 4xs:w-[200px] 5xs:w-[180px]   w-full aspect-[2/3]'}`}>
                    <div className="w-full h-[70%] bg-gray-700 rounded-t-lg"></div>
                    <div className="py-3">
                        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className=" w-full flex justify-between">
                            <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                            <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="my-[30px] md:w-[80%] sm:w-[90%] w-[95%] mt-[50px] flex flex-wrap gap-[20px] items-center justify-center">
                    {[...Array(10)].map((_, idx) => (
                        <div className={`animate-pulse ${large ? 'lg:w-[280px]  md:w-[220px] sm:w-[240px] 2xs:w-[220px] 3xs:w-[190px] 4xs:w-[160px] 5xs:w-[140px] w-[75%] aspect-[2/3]' : 'lg:w-[180px] md:w-[187px] sm:w-[160px] 2xs:[w-170px] 3xs:w-[150px] 4xs:w-[200px] 5xs:w-[180px]   w-full aspect-[2/3]'}`}>
                            <div className="w-full h-[70%] bg-gray-700 rounded-t-lg"></div>
                            <div className="py-3">
                                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                                <div className=" w-full flex justify-between">
                                    <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                                    <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    </>
)