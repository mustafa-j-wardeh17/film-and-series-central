import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaHeart, FaStar } from 'react-icons/fa'

export interface CatSwiperProps {
    id: number;
    title: string;
    bgposter?: string;
    slug: string;
    year?: number;
    rating?: number;
    type?: 'serie' | 'media';

}
interface dataFromSerieProps {
    episodeNum: number;
    serieImg: string;
    serieRating: number;
    serieYear: number;
    serieSlug: string;
}
const SerieCard = ({ media, dataFromSerie, type }: { dataFromSerie?: dataFromSerieProps, type: 'episode' | 'series' | 'episode-serie', media: CatSwiperProps }) => {
    return (
        <div key={media.id} className={`${type === 'series'?'max-w-[200px] min-w-[200px] h-[340px]':'3xs:w-[200px] w-full 3xs:h-[340px] h-[400px]'} `}>

            <Link
                href={
                    type === 'series'
                        ? `/series/${media.slug}`
                        : `/series/${dataFromSerie?.serieSlug}/${media.slug}`
                }
            >
                <div className='w-full hover:scale-[0.99]  hover:shadow-white hover:border-2 hover:border-red-500 relative h-[80%] rounded-[8px] overflow-hidden'>
                    <Image
                        src={((type === 'episode' || type === 'episode-serie') ? dataFromSerie?.serieImg : media.bgposter) || '/img/img.jpg'}
                        alt={`${media} poster`}
                        fill
                        className='aspect-[1/1.5]'
                    />
                    {type === 'episode' && (
                        <div className='absolute z-[60] top-[20px] -left-[10px]  px-5 py-1 rounded-md  bg-black flex items-center justify-center '>
                            <h3 className='capitalize text-white text-[14px]'>{(dataFromSerie?.episodeNum || 0) + 1}</h3>
                        </div>
                    )}
                </div>
                <div className='w-full h-[15%] mt-[5px]'>
                    <h5 className='overflow-ellipsis text-nowrap font-bold overflow-hidden text-[14px] text-white'>{media.title}</h5>
                    <h6 className='flex items-center justify-between text-[13px] py-[2px]'>
                        <span className='text-[12px] text-neutral-400'>{
                            type === 'series'
                                ? media.year
                                : dataFromSerie?.serieYear
                        }</span>
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
                            <h6 className='text-[13px] text-yellow-500 mt-[3px] '>{
                                type === 'series'
                                    ? media.rating
                                    : dataFromSerie?.serieRating
                            }</h6>
                        </div>
                    </h6>
                </div>
            </Link>
        </div>
    )
}

export default SerieCard
