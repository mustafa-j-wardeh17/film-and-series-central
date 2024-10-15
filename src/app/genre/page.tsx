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
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officiis tempore, accusantium harum dolore libero rem enim fuga, voluptas repudiandae deleniti et neque aperiam non magnam dicta ipsa quisquam eaque. Reprehenderit consectetur dicta non eos!</p>
                </div>
            </section>
            <section className='border-t-[1px] border-solid border-[#444] md:p-[60px] p-[40px] flex flex-wrap items-center justify-center gap-[20px] '>
                <Genrecard
                    link={'/genre/action'}
                    img='/img/action.jpg'
                    title='Action Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/adventure'}
                    img='/img/adventure.jpg'
                    title='Adventure Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/animation'}
                    img='/img/animation.jpg'
                    title='Animation Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/comedy '}
                    img='/img/comedy.jpg'
                    title='Comedy  Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/crime '}
                    img='/img/crime.jpg'
                    title='Crime  Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/drama '}
                    img='/img/drama.jpg'
                    title='Drama  Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/fantasy '}
                    img='/img/fantasy.jpg'
                    title='Fantasy Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/horror '}
                    img='/img/horror.jpg'
                    title='Horror Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/mystery '}
                    img='/img/mystery.jpg'
                    title='Mystery Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/romance '}
                    img='/img/romantic.jpg'
                    title='Romantic Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/science_fiction '}
                    img='/img/scifi.jpg'
                    title='Sci-fi Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
                <Genrecard
                    link={'/genre/thriller '}
                    img='/img/thriller.jpg'
                    title='Thriller Movies'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, laborum!'
                />
            </section>
        </>
    )
}

export default Genre