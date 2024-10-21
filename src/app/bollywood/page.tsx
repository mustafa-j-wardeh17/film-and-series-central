import { Metadata } from 'next';
import React from 'react'
import prisma from '../../../lib/prisma';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { RandomArray } from '../../../lib/util';
export const metadata: Metadata = {
    title: 'Bollywood'
};

const Bollywood = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

    const skip = ((Number(searchParams.page) || 1) - 1) * 5
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
                category: {
                    name: 'bollywood'
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
                    name: 'bollywood'
                }
            }
        }),
        prisma.mediaContent.count({
            where: {
                category: {
                    name: 'bollywood'
                }
            }
        }),
        prisma.serie.count({
            where: {
                category: {
                    name: 'bollywood'
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
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] capitalize'>Bollywood</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Explore the vibrant world of Bollywood cinema, featuring a captivating selection of movies and series that showcase rich storytelling, dynamic performances, and colorful cinematography. Immerse yourself in the best of Bollywood entertainment, from timeless classics to modern hits. </p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] mx-[45px] py-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {
                        allData.length > 0
                            ?
                            allData.map((movie) => (
                                <Card
                                    key={movie.id}
                                    media={movie}
                                    large={true}
                                />
                            ))

                            : (
                                <h1 className='text-red-500 text-[35px]'>No series Found</h1>
                            )
                    }
                    <Pagination
                        searchParams={searchParams}
                        totalPages={Math.ceil(count / 10)}
                    />
                </div>
            </section>


        </>
    )
}

export default Bollywood