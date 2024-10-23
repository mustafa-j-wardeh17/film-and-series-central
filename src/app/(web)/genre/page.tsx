import Genrecard from '@/components/Genrecard';
import { Metadata } from 'next';
import React from 'react'
import { genresWithDescriptions } from '../../../../lib/data';

export const metadata: Metadata = {
    title: 'Genre'
};
const Genre = () => {
    return (
        <>
            <section className='my-[60px] mx-[45px] text-white'>
                <div className='flex gap-[20px] flex-col'>
                    <h1 className='text-[48px] capitalize'>Explore by Genre</h1>
                    <p className='text-[18px] text-[#999] w-full md:w-[60%]'>
                        Discover a diverse range of movies and series tailored to your favorite genres. Whether you&apos;re into action, comedy, drama, or fantasy, explore an extensive collection curated to match your entertainment preferences.
                    </p>
                </div>
            </section>
            <section className='border-t-[1px] border-solid border-[#444] md:p-[60px] p-[40px] flex flex-wrap items-center justify-center gap-[20px] '>
                <Genrecard
                    link={'/genre/action'}
                    img='/img/action.jpg'
                    title='Action Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'action')?.description || ''}
                />
                <Genrecard
                    link={'/genre/adventure'}
                    img='/img/adventure.jpg'
                    title='Adventure Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'adventure')?.description || ''}
                />
                <Genrecard
                    link={'/genre/animation'}
                    img='/img/animation.jpg'
                    title='Animation Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'animation')?.description || ''}
                />
                <Genrecard
                    link={'/genre/comedy '}
                    img='/img/comedy.jpg'
                    title='Comedy  Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'comedy')?.description || ''}
                />
                <Genrecard
                    link={'/genre/crime '}
                    img='/img/crime.jpg'
                    title='Crime  Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'crime')?.description || ''}
                />
                <Genrecard
                    link={'/genre/drama '}
                    img='/img/drama.jpg'
                    title='Drama  Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'drama')?.description || ''}
                />
                <Genrecard
                    link={'/genre/fantasy '}
                    img='/img/fantasy.jpg'
                    title='Fantasy Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'fantasy')?.description || ''}
                />
                <Genrecard
                    link={'/genre/horror '}
                    img='/img/horror.jpg'
                    title='Horror Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'horror')?.description || ''}
                />
                <Genrecard
                    link={'/genre/mystery '}
                    img='/img/mystery.jpg'
                    title='Mystery Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'mystery')?.description || ''}
                />
                <Genrecard
                    link={'/genre/romance '}
                    img='/img/romantic.jpg'
                    title='Romantic Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'romantic')?.description || ''}
                />
                <Genrecard
                    link={'/genre/science_fiction '}
                    img='/img/scifi.jpg'
                    title='Sci-fi Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'science_fiction')?.description || ''}
                />
                <Genrecard
                    link={'/genre/thriller '}
                    img='/img/thriller.jpg'
                    title='Thriller Movies'
                    description={genresWithDescriptions.find(g => g.genre === 'thriller')?.description || ''}
                />
            </section>
        </>
    )
}

export default Genre