import { Metadata } from 'next'
import React from 'react'
import prisma from '../../../../../lib/prisma'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import { capitalize, RandomArray } from '../../../../../lib/util'
import { genresWithDescriptions } from '../../../../../lib/data'
import { tSearchParams } from '@/app/(home)/page'

type tGenre = Promise<{ genre: string }>

export async function generateMetadata(
    { params}: { params: tGenre }
): Promise<Metadata> {
    const { genre } = await (params)
    return {
        title: `${capitalize(genre)} - Genre`,
        description: genresWithDescriptions.find(g => g.genre === genre)?.description
    }
}

const page = async ({ params, searchParams }: { params:tGenre, searchParams: tSearchParams }) => {
    const { genre } = await (params)
    const resolvedSearchParams = await (searchParams)
    const skip = ((Number(resolvedSearchParams.page) || 1) - 1) * 5
    const [moviesData, seriesData, movieCount, serieCount] = await prisma.$transaction([
        prisma.mediaContent.findMany({
            select: {
                id: true,
                title: true,
                bgposter: true,
                slug: true,
                year: true,
                rating: true
            },
            skip,
            take: 5,
            where: {
                genre: {
                    name: genre
                }
            }
        }),
        prisma.serie.findMany({
            select: {
                id: true,
                title: true,
                bgposter: true,
                slug: true,
                year: true,
                rating: true
            },
            skip,
            take: 5,
            where: {
                genre: {
                    name: genre
                }
            }
        }),
        prisma.mediaContent.count({
            where: {
                genre: {
                    name: genre
                }
            }
        }),
        prisma.serie.count({
            where: {
                genre: {
                    name: genre
                }
            }
        })

    ])
    const allData = RandomArray([
        ...moviesData.map((serie) => ({ ...serie, type: 'movie' })),
        ...seriesData.map((serie) => ({ ...serie, type: 'serie' }))
    ])
    const count = movieCount + serieCount
    return (
        <>
            <section className='my-[60px] md:mx-[45px] mx-[20px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='sm:text-[48px] text-[32px] capitalize'>Genre : {genre}</h1>
                    <p className='text-[14px] sm:text-[18px] text-[#999] w-full md:w-[60%]'>{genresWithDescriptions.find(g => g.genre === genre)?.description}</p>
                </div>
            </section>
            <section className='border-t-[1px] border-solid border-[#444] my-[20px] md:mx-[45px] mx-[20px] py-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {
                        allData.length > 0
                            ?
                            allData.map(movie => (
                                <Card
                                    key={movie.id}
                                    media={movie}
                                    large={true}
                                />
                            ))

                            : (
                                <h1 className='text-red-500 text-[35px]'>No Data Found</h1>
                            )
                    }
                    <Pagination
                        totalPages={Math.ceil(count / 10)}
                    />
                </div>
            </section>
        </>
    )
}

export default page