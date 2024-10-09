'use client'
import React from 'react'
import { categories, genres } from '../../lib/data'
import { useRouter } from 'next/navigation'

import Card from './Card'

const CategoryGenreFilter = ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    // we will pass search params from home page to access filter by genres
    const router = useRouter()
    const Movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const handleFilter = (item: string) => {
        const urlParam = new URLSearchParams(window.location.search)
        urlParam.set('filter', item)
        router.push(`/?${urlParam}`)
    }

    return (
        <div className='flex flex-col items-center my-[20px]'>
            <div className='w-[80%] relative flex items-center justify-center gap-[1rem] flex-wrap'>
                {
                    genres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => handleFilter(genre)}
                            className={`${searchParams.filter === genre ? 'bg-red-500 border-[#fffefe]' : 'bg-black border-[#717171]'} py-[10px] px-[20px] hover:bg-red-500  font-semibold border hover:border-[#fffefe] rounded-[10px] `}
                        >
                            {genre}
                        </button>
                    ))
                }
                {
                    categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilter(category)}
                            className={`${searchParams.filter === category ? 'bg-red-500 border-[#fffefe]' : 'bg-black border-[#717171]'} py-[10px] px-[20px] hover:bg-red-500  font-semibold border hover:border-[#fffefe] rounded-[10px] `}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>
            <div className='my-[30px] mt-[50px] flex flex-wrap gap-[20px] items-center justify-center'>
                {
                    Movies.length > 0
                        ?
                        Movies.map(movie => (
                            <Card movie={movie} />
                        ))

                        : (
                            <h1 className='text-red-500 text-[35px]'>No Movies Found</h1>
                        )
                }
            </div>
        </div>
    )
}

export default CategoryGenreFilter