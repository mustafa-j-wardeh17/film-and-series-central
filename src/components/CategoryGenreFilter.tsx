'use client'
import React from 'react'
import { categories, genres } from '../../lib/data'
import { useRouter, useSearchParams } from 'next/navigation'

const CategoryGenreFilter = () => {
    // we will pass search params from home page to access filter by genres
    const activeGenre = genres[2]
    const router = useRouter()
    const handleGenre = (genre: string) => {
        const urlParam = new URLSearchParams()
        urlParam.set('genre', genre)
        router.push(`/?${urlParam}`)
    }
    const handleCategory = (category: string) => {
        const urlParam = new URLSearchParams()
        urlParam.set('category', category)
        router.push(`/?${urlParam}`)
    }
    return (
        <div className='flex justify-center my-[20px]'>
            <div className='w-[80%] relative flex items-center justify-center gap-[1rem] flex-wrap'>
                {
                    genres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => handleGenre(genre)}
                            className={`${activeGenre === genre ? 'bg-red-500 border-[#fffefe]' : 'bg-black'} py-[10px] px-[20px] hover:bg-red-500  font-semibold border border-[#717171] hover:border-[#fffefe] rounded-[10px] `}
                        >
                            {genre}
                        </button>
                    ))
                }
                {
                    categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategory(category)}
                            className={`${activeGenre === category ? 'bg-red-500 border-[#fffefe]' : 'bg-black'} py-[10px] px-[20px] hover:bg-red-500  font-semibold  border border-[#717171]  hover:border-[#fffefe] rounded-[10px] `}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>

        </div>
    )
}

export default CategoryGenreFilter