'use client'
import React, { useState, useEffect } from 'react'
import { categories, genres } from '../../lib/data'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Card, { CatSwiperProps } from './Card'
import { FaCheck, FaFilm, FaPhotoVideo, FaStar } from "react-icons/fa"
import Link from 'next/link'
import Pagination from './Pagination'
import { SkeletonLoader } from './SkeletonLoader'

const CategoryGenreFilter = ({ searchParams, type, data, totalData }: { totalData: number, type: string, data: CatSwiperProps[], searchParams: { [key: string]: string | undefined } }) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const currentSearchParams = useSearchParams()


    // Handle filter changes
    const handleFilter = (item: string) => {
        setIsLoading(true)
        const newSearchParams = new URLSearchParams(currentSearchParams.toString())
        newSearchParams.set('filter', item)
        newSearchParams.delete('page')
        router.push(`${pathname}?${newSearchParams}`, { scroll: false })
    }

    // Handle type changes through Link clicks
    const handleTypeChange = (type: string) => {
        setIsLoading(true)
        const newSearchParams = new URLSearchParams(currentSearchParams.toString())
        newSearchParams.set('type', type)
        newSearchParams.delete('filter')
        router.push(`${pathname}?${newSearchParams}`, { scroll: false })
    }

    // Reset loading state when searchParams change
    useEffect(() => {
        setIsLoading(false)
    }, [searchParams])





    return (
        <div className='flex flex-col items-center my-[20px] gap-5'>
            {/* Type Selection Links */}
            <div className="flex justify-center w-full mt-[40px]">
                <ul className="list-none flex items-center justify-between sm:w-[90%] w-[96%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
                    <li>
                        <button
                            onClick={()=>handleTypeChange("movies")}
                            className={`${type === "movies" ? "text-white" : "text-[#ffffffb3]"} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                        >
                            <i><FaPhotoVideo size={14} /></i>
                            <p>Movies</p>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={()=>handleTypeChange("series")}
                            className={`${type === "series" ? "text-white" : "text-[#ffffffb3]"} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                        >
                            <i><FaFilm size={14} /></i>
                            <p>Series</p>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={()=>handleTypeChange("all")}
                            className={`${type === "all" ? "text-white" : "text-[#ffffffb3]"} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                        >
                            <i><FaCheck size={14} /></i>
                            <p>Series & Movies</p>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={()=>handleTypeChange("rating")}
                            className={`${type === "rating" ? "text-white" : "text-[#ffffffb3]"} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
                        >
                            <i><FaStar size={14} /></i>
                            <p>Rating</p>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Genres and Categories Filter Buttons */}
            <div className='md:w-[80%] w-[90%] relative flex items-center overflow-x-auto hide-scrollbar lg:justify-center justify-start gap-[1rem] lg:flex-wrap flex-nowrap flex-row scroll-snap-type-x-mandatory'>
                {genres.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => handleFilter(genre)}
                        disabled={isLoading}
                        className={`${searchParams.filter === genre ? 'bg-red-500 border-[#fffefe]' : 'bg-black border-[#717171]'} 
                        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                        text-white py-[6px] px-[10px] md:text-[16px] text-[14px] lg:py-[10px] lg:px-[20px] hover:bg-red-500 font-semibold border hover:border-[#fffefe] rounded-[10px] scroll-snap-align-start transition-opacity`}
                    >
                        {genre}
                    </button>
                ))}
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleFilter(category)}
                        disabled={isLoading}
                        className={`${searchParams.filter === category ? 'bg-red-500 border-[#fffefe]' : 'bg-black border-[#717171]'} 
                        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                        text-white py-[6px] px-[10px] md:text-[16px] text-[14px] lg:py-[10px] lg:px-[20px] hover:bg-red-500 font-semibold border hover:border-[#fffefe] rounded-[10px] scroll-snap-align-start transition-opacity`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Content Area with Loading State */}
            {isLoading ? (
                <SkeletonLoader large={true} />
            ) : (
                <div className='my-[30px] md:w-[80%] sm:w-[90%] w-[95%] mt-[50px] flex flex-wrap gap-[20px] items-center justify-center'>
                    {data && data.length > 0 ? (
                        data.map((movie: CatSwiperProps, idx: number) => (
                            <Card key={idx} media={movie} large={true} type={type} genreFilter={true} />
                        ))
                    ) : (
                        <h1 className='text-red-500 text-[35px]'>
                            {type === 'movies' ? 'No Movies Found' :
                                type === 'series' ? 'No Series Found' :
                                    'No Data Found'}
                        </h1>
                    )}
                </div>
            )}
            <Pagination
                totalPages={Math.ceil(totalData / 10)}
                setIsLoading={setIsLoading}
            />
        </div>
    )
}

export default CategoryGenreFilter