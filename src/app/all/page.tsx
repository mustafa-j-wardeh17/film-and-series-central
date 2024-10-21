import { Metadata } from 'next';
import React from 'react'
import prisma from '../../../lib/prisma';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { RandomArray } from '../../../lib/util';

export const metadata: Metadata = {
    title: 'All Movies & Series'
};

const All = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {

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
            take: 5
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
            take: 5
        }),
        prisma.mediaContent.count(),
        prisma.serie.count()

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
                    <h1 className='text-[48px] capitalize'>All Movies & Series</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Explosive stunts, intense battles, and adrenaline-pumping thrills. Heros face danger head-on, showcasing their skills in action-packed spectacles that leave audiences on the edge.</p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] mx-[45px] py-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {
                        allData.length > 0
                            ?
                            allData.map((media, idx) => (
                                <Card
                                    key={idx}
                                    media={media}
                                    large={true}
                                />
                            ))

                            : (
                                <h1 className='text-red-500 text-[35px]'>Nothing Found</h1>
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

export default All