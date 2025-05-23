import { Metadata } from 'next';
import React, { cache } from 'react'
import prisma from '../../../../lib/prisma';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { RandomArray } from '../../../../lib/util';
import { tSearchParams } from '@/app/(home)/page';

export const metadata: Metadata = {
    title: 'Hollywood'
};

const hollywoodData = cache(async (skip: number) => {
    return await prisma.$transaction([
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
                category: {
                    name: 'hollywood'
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
                category: {
                    name: 'hollywood'
                }
            }
        }),
        prisma.mediaContent.count({
            where: {
                category: {
                    name: 'hollywood'
                }
            }
        }),
        prisma.serie.count({
            where: {
                category: {
                    name: 'hollywood'
                }
            }
        })

    ])
})

const Hollywood = async ({ searchParams }: { searchParams: tSearchParams }) => {
    const resolvedSearchParams = await (searchParams)
    const skip = ((Number(resolvedSearchParams.page) || 1) - 1) * 5
    const [moviesData, seriesData, movieCount, serieCount] = await hollywoodData(skip)
    const allData = RandomArray([
        ...moviesData.map((serie) => ({ ...serie, type: 'movie' })),
        ...seriesData.map((serie) => ({ ...serie, type: 'serie' }))
    ])
    const count = movieCount + serieCount
    return (
        <>
            <section className='my-[60px] md:mx-[45px] mx-[20px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] capitalize'>Hollywood</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Discover the best of Hollywood with an extensive collection of blockbuster movies and acclaimed series. From action-packed adventures to gripping dramas, explore the iconic storytelling, star-studded performances, and cinematic masterpieces that define Hollywood entertainment.</p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] md:mx-[45px] mx-[20px] pt-[60px]'>
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
                                <h1 className='text-red-500 text-[35px]'>No Movie Found</h1>
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

export default Hollywood