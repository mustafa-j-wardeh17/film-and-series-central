import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa'

export interface CatSwiperProps {
    id: number;
    title: string;
    bgposter: string;
    slug: string;
    year: number;
    rating: number;
    type?: 'serie' | 'movie'
}
const Card = ({ media, large = false, serie, type, genreFilter }: { type?: string, genreFilter?: boolean, media: CatSwiperProps, large?: boolean, serie?: boolean }) => {
    return (
        <div className={`${large ? 'lg:w-[260px]  min-w-[200px] lg:h-[400px] md:w-[200px] md:h-[300px] sm:w-[230px] sm:h-[340px] 2xs:w-[180px] 2xs:h-[320px] w-[85%] h-[450px] max-w-[240px]' : 'lg:w-[200px] lg:h-[300px] md:w-[187px] md:h-[280px]  sm:h-[230px] sm:w-[160px] 3xs:w-[150px] 4xs:w-[200px] 4xs:h-[270px] 300:w-[150px] 300:h-[240px]'}`}>
            <Link
                href={
                    (media.type === 'serie' || serie || (genreFilter && type === 'series'))
                        ? `/series/${media?.slug}`
                        : `/movies/${media?.slug}`
                }
            >
                <div className='w-full hover:scale-[0.99]  hover:shadow-white hover:border-2 hover:border-red-500 relative h-[80%] rounded-[8px] overflow-hidden'>

                    < Image
                        src={media?.bgposter}
                        alt={`${media?.id} poster`}
                        fill
                        className='aspect-[1/1.5]'
                    />


                    {media?.type === 'serie' && (
                        <div className='absolute z-[60] top-[20px] -left-[10px]  px-4 py-1 rounded-md  bg-black flex items-center justify-center '>
                            <h3 className='capitalize text-white text-[14px]'>{media?.type}</h3>
                        </div>
                    )}
                </div>
                <div className='w-full h-[15%] mt-[5px]'>
                    <h5 className='overflow-ellipsis text-nowrap font-bold text-white overflow-hidden text-[14px]'>{media?.title}</h5>
                    <h6 className='flex items-center justify-between text-[13px] py-[2px]'>
                        <span className='text-[12px] text-neutral-400'>{media?.year}</span>
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
                            <h6 className='text-[13px] text-yellow-500 mt-[3px] '>{media?.rating}</h6>
                        </div>
                    </h6>
                </div>

            </Link>
        </div>
    )
}

export default Card
