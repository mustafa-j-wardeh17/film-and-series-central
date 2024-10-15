import Genrecard from '@/components/Genrecard';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Genre'
};
const Genre = () => {
    return (
        <>
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex gap-[20px] flex-col'>
                    <h1 className='text-[48px] capitalize'>Explore by Genre</h1>
                    <p className='text-[18px] text-[#999] w-[60%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officiis tempore, accusantium harum dolore libero rem enim fuga, voluptas repudiandae deleniti et neque aperiam non magnam dicta ipsa quisquam eaque. Reprehenderit consectetur dicta non eos!</p>
                </div>
            </section>
            <section className='border-t-[1px] border-solid border-[#444] py-[60px] flex flex-wrap items-center justify-center gap-[20px] '>
                <Genrecard
                    link={'/genre/action'}
                    img='/img/action.jpg'
                    title='Action Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
            </section>
        </>
    )
}

export default Genre