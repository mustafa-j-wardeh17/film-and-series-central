import { Metadata } from 'next';
import React, { cache } from 'react'
import prisma from '../../../../lib/prisma';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { RandomArray } from '../../../../lib/util';
import { tSearchParams } from '@/app/(home)/page';

export const metadata: Metadata = {
    title: 'All Movies & Series'
};
const fetchAllData = cache(async (skip: number) => {
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
})
const All = async ({ searchParams }: { searchParams: tSearchParams }) => {
    const resolvedSearchParams = await (searchParams)
    const skip = ((Number(resolvedSearchParams.page) || 1) - 1) * 5
    const [moviesData, seriesData, movieCount, serieCount] = await fetchAllData(skip)

    const allMediaData = RandomArray([
        ...moviesData.map((serie) => ({ ...serie, type: 'movie' })),
        ...seriesData.map((serie) => ({ ...serie, type: 'serie' }))
    ])
    const count = movieCount + serieCount
    return (
        <>
            <section className='my-[60px] md:mx-[45px] mx-[20px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] capitalize'>All Movies & Series</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Explore our extensive collection of movies and series, featuring diverse genres that cater to all tastes. From heart-pounding thrillers and laugh-out-loud comedies to thought-provoking dramas, find your next favorite watch and immerse yourself in captivating storytelling.</p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] md:mx-[45px] mx-[20px] pt-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {
                        allMediaData.length > 0
                            ?
                            allMediaData.map((media, idx) => (
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
                        totalPages={Math.ceil(count / 10)}
                    />
                </div>
            </section>


        </>
    )
}

export default All