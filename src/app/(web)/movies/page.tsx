import { Metadata } from 'next';
import React from 'react'
import prisma from '../../../../lib/prisma';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';
import { tSearchParams } from '@/app/(home)/page';

export const metadata: Metadata = {
    title: 'Movies'
};
const Movies = async ({ searchParams }: { searchParams: tSearchParams }) => {
    const resolvedSearchParams = await (searchParams)
    const [allData, count] = await prisma.$transaction([
        prisma.mediaContent.findMany({
            include: {
                genre: true,
                category: true,
                downloadLink: true,
                language: true,
            },
            skip: ((Number(resolvedSearchParams.page) || 1) - 1) * 10,
            take: 10
        }),
        prisma.mediaContent.count()

    ])
    return (
        <>
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] capitalize'>Movies</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Explore a diverse collection of movies, spanning genres from action and drama to comedy and fantasy. Dive into captivating stories, breathtaking visuals, and unforgettable performances with the latest blockbusters, timeless classics, and critically acclaimed films from around the world.</p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] mx-[45px] pt-[60px]'>
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
                                <h1 className='text-red-500 text-[35px]'>No Movies Found</h1>
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

export default Movies