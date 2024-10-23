import React from 'react'
import ScrollButtons from '@/components/ScrollButtons'
import { FaBookmark, FaCheck, FaImdb, FaPlay, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import SerieCard from '@/components/SerieCard'
import { Metadata } from 'next'
import prisma from '../../../../../lib/prisma'
import { capitalize } from '../../../../../lib/util'
import { notFound } from 'next/navigation'
import ImageWithLoader from '@/components/ImageWithLoader'

export async function generateMetadata({ params: { serie, episode } }: { params: { serie: string, episode: string } }): Promise<Metadata> {
    return {
        title: capitalize(episode) + " - " + capitalize(serie)
    }
}
const Episode = async ({ params: { serie, episode }, searchParams }: { params: { serie: string, episode: string }, searchParams: { [key: string]: string | undefined } }) => {
    const [serieData, episodeData, otherEpisodes, latestSeries] = await prisma.$transaction([
        prisma.serie.findUnique({
            where: {
                slug: serie
            },
            include: {
                episodes: true,
                genre: true,
                language: true
            }
        }),
        prisma.episode.findUnique({
            where: {
                slug: episode
            },
            include: {
                downloadLink: {
                    include: {
                        resolutions: true
                    }
                },

            }
        }),
        prisma.episode.findMany({
            where: {
                serie: {
                    slug: serie
                },
                NOT: {
                    slug: episode
                }
            },
            include: {
                downloadLink: true
            }
        }),
        prisma.serie.findMany({
            where: {
                NOT: {
                    slug: serie
                }
            },
            include: {
                episodes: true,
                genre: true,
                language: true
            },
            take: 10,
            orderBy: {
                createdAt: 'asc'
            }
        })
    ])
    if (!episodeData) {
        return notFound()
    }
    return (
        <div className=''>
            <div className='slideimagebx'>

                <ImageWithLoader
                    src={serieData?.wideposter || '/img/img.jpg'}
                    alt={`${serieData?.slug} `}
                />

            </div>
            <div className='relative lg:max-w-[1200px] mx-auto h-auto bg-[#111010] rounded-[20px] outline-none mt-[-100px] flex lg:flex-row flex-wrap z-[3] flex-col max-w-[720px]'>
                {/* Left Side Details */}
                <div className='lg:w-[35%] w-[100%] h-full rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='rounded-[8px] w-[100%]  xs:w-[250px] relative min-h-[400px] max-h-hidden overflow-hidden '>
                        <div className='relative lg:h-[400px] h-[400px]  w-full'>
                            <Image
                                src={serieData?.bgposter || '/img/img.jpg'}
                                alt={`${serieData?.slug} movie card`}
                                fill
                                className='lg:min-h-[400px]  object-fill'
                                loading='lazy'
                            />
                            <div className='absolute z-[10] top-[20px] -left-[10px]  px-5 py-1 rounded-md  bg-black flex items-center justify-center '>
                                <h3 className='capitalize text-[14px]'>{episodeData?.title}</h3>
                            </div>
                            <div className='absolute w-full h-full z-[100] bg-[#111010]/20 flex items-center justify-center'>
                                <a target='_blank' href={episodeData?.watchlink}>
                                    <button className=' bg-black/70 hover:bg-black/80 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                                        <FaPlay size={24} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='w-full mt-[-4px]  '>
                            <div className='flex items-center justify-between w-full bg-[#14171b] p-[16px] pt-[25px] rounded-br-[8px] rounded-bl-[8px]'>
                                <button className='flex duration-200 hover:text-white/80 items-center gap-[5px] bg-transparent border-none text-white cursor-pointer rounded-br-[8px] rounded-bl-[8px] flex-col '>
                                    <FaBookmark className='w-[15px]' />Watchlist
                                </button>
                                <button className='flex duration-200 hover:text-white/80 items-center gap-[5px] bg-transparent border-none text-white cursor-pointer rounded-br-[8px] rounded-bl-[8px] flex-col '>
                                    <FaCheck className='w-[15px]' />Seen
                                </button>
                                <button className='flex duration-200 hover:text-white/80 items-center gap-[5px] bg-transparent border-none text-white cursor-pointer rounded-br-[8px] rounded-bl-[8px] flex-col '>
                                    <FaThumbsUp className='w-[15px]' />Like
                                </button>
                                <button className='flex duration-200 hover:text-white/80 items-center gap-[5px] bg-transparent border-none text-white cursor-pointer rounded-br-[8px] rounded-bl-[8px] flex-col '>
                                    <FaThumbsDown className='w-[15px]' />Dislike
                                </button>
                            </div>
                        </div>
                        {/* <a target='_blank' href={serieData.watchlink }> */}
                        <a target='_blank' href={episodeData?.watchlink}>
                            <button className='w-full bg-[#14171b] duration-200 hover:bg-[#6a7c8f] mt-[8px] text-white border-none p-[12px] cursor-pointer rounded-[8px]'>
                                Click to watch online
                            </button>
                        </a>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2 mt-[30px]'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>Rating</h3>
                        <div className='flex gap-[15px] items-center'>
                            <FaImdb color='yellow' size={25} />
                            <h4 className='text-sm text-[#ffffff9a]'>{serieData?.rating} <span className='text-yellow-500'>IMDB</span></h4>
                        </div>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>GENRE</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>{serieData?.genre.name}</h4>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>YEAR</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>{serieData?.year}</h4>
                    </div>
                </div>

                {/* Right Side Details */}
                <div className='relative lg:w-[65%] w-full h-auto rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='w-full flex items-center  justify-between'>
                        <h1 className='w-[90%] text-white font-semibold text-[25px]'>{serieData?.title}</h1>
                        <SocialShare />
                    </div>

                    {/* Episode Details */}
                    <div className='text-[#ffffffad] mt-[40px] w-full'>
                        <article className='movieinfo'>
                            <h3 className='text-[#008000] font-semibold text-[25px]'>{'Episode'} info : </h3>
                            <table>
                                <tbody>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px] '>
                                            &#9642; Name :
                                        </td>
                                        <td className='font-bold inline-block  mr-[10px]'>{serieData?.title + " - " + episodeData?.title}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Release year :
                                        </td>
                                        <td className='inline-block mr-[10px]'>{serieData?.year}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Genre :
                                        </td>
                                        <td className='inline-block mr-[10px] capitalize'>{serieData?.genre.name}</td>
                                    </tr>

                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Language :
                                        </td>
                                        <td className='inline-block mr-[10px]'>{serieData?.language?.name}</td>
                                    </tr>

                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Format :
                                        </td>
                                        <td className='inline-block mr-[10px]'>MKV</td>
                                    </tr>

                                </tbody>
                            </table>
                        </article>


                    </div>

                    {/* Episode Download Links */}
                    <section className='mt-[30px]'>
                        <h2 className='bg-[#6abf6059] block text-[#ffffffd2] text-center rounded-[10px] p-[10px]'>G-Drive [GDTot] Download Links</h2>
                        <div className='flex flex-col gap-[30px] mt-[30px]'>
                            {
                                episodeData?.downloadLink.resolutions
                                    .map((resolutions, idx) => (
                                        <a target='_blank'
                                            key={idx}
                                            href={resolutions.link} className='bg-[#6a7c8f29] text-[#ffffffd2] p-[10px] text-center rounded-[10px] w-[80%] m-auto transition duration-200 hover:bg-[#6a7c8f] hover:shadow-red hover:text-white hover:font-semibold'>Download {resolutions.size}</a>
                                    ))
                            }

                        </div>
                    </section>

                    {/* Serie Other Episodes */}
                    <section className='relative mt-[70px] w-full'>
                        <h2 className='text-[#6a7c8f] uppercase'>{serieData?.title} <span className='font-bold'>Episeodes</span> :</h2>
                        <div className="flex flex-row flex-wrap md:justify-start justify-center gap-6 mt-8">
                            {
                                otherEpisodes?.map
                                    ((episode, idx) => (
                                        <SerieCard
                                            media={episode}
                                            type='episode-serie'
                                            dataFromSerie={
                                                {
                                                    episodeNum: idx,
                                                    serieImg: serieData?.bgposter || '/img/img.jpg',
                                                    serieRating: serieData?.rating || 0,
                                                    serieYear: serieData?.year || 0,
                                                    serieSlug: serieData?.slug || ''
                                                }
                                            }
                                            key={idx}
                                        />
                                    ))
                            }
                        </div>
                    </section>
                </div>
            </div>
            {/* Latest Movies */}
            {
                latestSeries.length > 0 && (
                    <div className='relative mx-auto  md:max-w-[1200px] my-[80px] w-[95%]'>
                        <h3 className='text-[#6a7c8f]'> LATEST SERIES :</h3>
                        <div className='related mt-[20px] flex overflow-x-auto scroll-smooth hide-scrollbar gap-[20px] transition-all duration-500 ease-linear '>
                            {
                                latestSeries.map((latestSerie, idx) => (
                                    <SerieCard
                                        media={latestSerie}
                                        type='series'
                                        key={idx}
                                    />
                                ))
                            }
                        </div>
                        <ScrollButtons type={'related'} />
                    </div>
                )
            }
        </div>
    )
}

export default Episode