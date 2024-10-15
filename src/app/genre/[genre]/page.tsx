import Card from '@/components/Card'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(
    { params: { genre } }: { params: { genre: string } }
): Promise<Metadata> {

    return {
        title: `${genre} - Genre`
    }
}


const page = ({ params: { genre } }: { params: { genre: string } }) => {
    const Movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


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
                        Movies.length > 0
                            ?
                            Movies.map(movie => (
                                <Card
                                    key={movie}
                                    movie={movie}
                                    large={true}
                                />
                            ))

                            : (
                                <h1 className='text-red-500 text-[35px]'>No series Found</h1>
                            )
                    }
                </div>
            </section>
        </>
    )
}

export default page