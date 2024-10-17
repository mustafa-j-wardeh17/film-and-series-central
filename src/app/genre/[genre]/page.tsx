import { Metadata } from 'next'
import React from 'react'
import prisma from '../../../../lib/prisma'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'

export async function generateMetadata(
    { params: { genre } }: { params: { genre: string } }
): Promise<Metadata> {

    return {
        title: `${genre} - Genre`
    }
}

const page = async ({ params: { genre }, searchParams }: { params: { genre: string }, searchParams: { [key: string]: string | undefined } }) => {
    const [allData, count] = await prisma.$transaction([
        prisma.mediaContent.findMany({
            where: {
                genre: {
                    name: genre
                }
            },
            include: {
                genre: true,
                category: true,
                downloadLink: true,
                language: true,
                subtitle: true
            },
            skip: ((Number(searchParams.page) || 1) - 1) * 10,
            take: 10
        }),
        prisma.mediaContent.count()

    ])

    return (
        <>
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='sm:text-[48px] text-[32px] capitalize'>Genre : {genre}</h1>
                    <p className='text-[14px] sm:text-[18px] text-[#999] w-full md:w-[60%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque obcaecati accusamus explicabo, asperiores suscipit nesciunt adipisci expedita aliquid blanditiis nihil!</p>
                </div>
            </section>
            <section className='border-t-[1px] border-solid border-[#444] my-[20px] mx-[45px] py-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {
                        allData.length > 0
                            ?
                            allData.map(movie => (
                                <Card
                                    key={movie.id}
                                    movie={movie}
                                    large={true}
                                />
                            ))

                            : (
                                <h1 className='text-red-500 text-[35px]'>No Data Found</h1>
                            )
                    }
                    <Pagination
                        searchParams={searchParams}
                        count={count}
                    />
                </div>
            </section>
        </>
    )
}

export default page