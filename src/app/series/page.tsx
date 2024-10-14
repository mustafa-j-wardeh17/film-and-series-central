import Card from '@/components/Card'
import React from 'react'


const Series = () => {
    const Series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[48px] capitalize'>Series</h1>
                    <p className='text-[18px] text-[#999] w-[60%]'>Explosive stunts, intense battles, and adrenaline-pumping thrills. Heros face danger head-on, showcasing their skills in action-packed spectacles that leave audiences on the edge.</p>
                </div>
            </section>

            <section className='border-t-[1px] border-solid border-[#444] my-[20px] mx-[45px] py-[60px]'>
                <div className='flex flex-wrap items-center justify-center gap-[20px]'>
                    <div className='my-[30px] w-[80%] mt-[50px] flex flex-wrap gap-[20px] items-center justify-center'>
                        {
                            Series.length > 0
                                ?
                                Series.map(movie => (
                                    <Card
                                        key={movie}
                                        movie={movie}
                                        large={true}
                                    />
                                ))

                                : (
                                    <h1 className='text-red-500 text-[35px]'>No Series Found</h1>
                                )
                        }
                    </div>
                </div>
            </section>


        </>
    )
}

export default Series