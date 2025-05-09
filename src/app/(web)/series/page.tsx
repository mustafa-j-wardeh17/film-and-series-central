import { Metadata } from 'next';
import React from 'react'
import prisma from '../../../../lib/prisma';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';
import { tSearchParams } from '@/app/(home)/page';

export const metadata: Metadata = {
    title: 'Series'
};
const Series = async ({ searchParams }: { searchParams: tSearchParams }) => {
    const resolvedSearchParams = await (searchParams)
    const [allData, count] = await prisma.$transaction([
        prisma.serie.findMany({
            include: {
                genre: true,
                category: true,
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
                    <h1 className='text-[48px] capitalize'>Series</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Discover a wide range of TV series, from gripping dramas and thrilling mysteries to captivating comedies and epic adventures. Whether binge-worthy hits or classic favorites, our series collection offers something for every taste, genre, and mood.</p>
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
                                    serie={true}
                                />
                            ))

                            : (
                                <h1 className='text-red-500 text-[35px]'>No Series Found</h1>
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

export default Series