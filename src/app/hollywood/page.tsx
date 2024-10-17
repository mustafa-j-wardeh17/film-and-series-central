import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Hollywood'
};
const Hollywood = () => {

    return (
        <>
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] capitalize'>Series</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Explosive stunts, intense battles, and adrenaline-pumping thrills. Heros face danger head-on, showcasing their skills in action-packed spectacles that leave audiences on the edge.</p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] mx-[45px] py-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {/* {
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
                                <h1 className='text-red-500 text-[35px]'>No Movie Found</h1>
                            )
                    } */}
                </div>
            </section>


        </>
    )
}

export default Hollywood