import ScrollButtons from '@/components/ScrollButtons'
import SocialShare from '@/components/SocialShare'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBookmark, FaCheck, FaEye, FaHeart, FaImdb, FaStar, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import prisma from '../../../../lib/prisma'
import { notFound } from 'next/navigation'
import { capitalize } from '../../../../lib/util'

export async function generateMetadata(
    { params: { id } }: { params: { id: string } }
): Promise<Metadata> {
    return {
        title: capitalize(id)
    }

}

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const [movie, latestMovies] = await prisma.$transaction([
        prisma.mediaContent.findUnique({
            where: {
                slug: id
            },
            include: {
                genre: true,
                downloadLink: {
                    include: {
                        resolutions: true
                    }
                },
                language: true
            }
        }),
        prisma.mediaContent.findMany({
            where: {
                NOT: {
                    slug: id
                }
            },
            include: {
                genre: true,
                downloadLink: true,
                language: true
            },
            take: 10,
            orderBy: {
                createdAt: 'asc'
            }

        })
    ])
    if (!movie) notFound()
    return (
        <div className=''>
            <div className='slideimagebx'>
                <Image
                    src={movie?.wideposter}
                    alt={`${{ id }} `}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='relative lg:max-w-[1200px] mx-auto h-auto bg-[#111010] rounded-[20px] outline-none mt-[-100px] flex lg:flex-row flex-wrap z-[3] flex-col max-w-[720px]'>
                <div className='lg:w-[35%] w-[100%] h-full rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='rounded-[8px] w-[100%]  xs:w-[250px] relative min-h-[400px] max-h-hidden overflow-hidden '>
                        <div className='relative w-full h-[400px]'>
                            <Image
                                src={movie?.bgposter}
                                alt={`${movie.id} movie`}
                                fill
                                className='object-cover min-h-[400px]'
                                loading='lazy'
                            />
                        </div>
                        <div className='w-full mt-[-4px]  '>
                            <div className='flex items-center justify-between w-full bg-[#1c252f] p-[16px] pt-[25px] rounded-br-[8px] rounded-bl-[8px]'>
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
                        {/* <a target='_blank' href={movie.watchlink }> */}
                        <a target='_blank' href={''}>
                            <button className='w-full bg-[#1c252f] duration-200 hover:bg-[#6a7c8f] mt-[8px] text-white border-none p-[12px] cursor-pointer rounded-[8px]'>
                                Click to watch online
                            </button>
                        </a>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2 mt-[30px]'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>Rating</h3>
                        <div className='flex gap-[15px] items-center'>
                            <FaImdb color='yellow' size={25} />
                            <h4 className='text-sm text-[#ffffff9a]'>{movie.rating} <span className='text-yellow-500'>IMDB</span></h4>
                        </div>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>GENRE</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>{movie.genre.name}</h4>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>YEAR</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>{movie.year}</h4>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>QUALITY</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>
                            {
                                movie.downloadLink.resolutions.map(link => (
                                    link.size + "p "
                                )).join()
                                    .replaceAll(',', ' || ')
                            }
                        </h4>
                    </div>
                </div>

                <div className='relative lg:w-[65%] w-full h-auto rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='w-full flex items-center  justify-between'>
                        <h1 className='w-[90%] text-white font-semibold text-[25px]'>{movie.title}</h1>

                        <SocialShare />


                    </div>
                    <p className='text-[20px] font-bold mt-[20px] text-[#3a7c8fca]'> DOWNLOAD FREE NOW</p>
                    <div className='text-[#ffffffad] mt-[40px] w-full'>
                        <article className='movieinfo'>
                            <h3 className='text-[#008000] font-semibold text-[25px]'>{'Movie'} info : </h3>
                            <table>
                                <tbody>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px] '>
                                            &#9642; Name :
                                        </td>
                                        <td className='font-bold inline-block  mr-[10px]'>{movie.title}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Release year :
                                        </td>
                                        <td className='inline-block mr-[10px]'>{movie.year}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Genre :
                                        </td>
                                        <td className='inline-block mr-[10px]'>{movie.genre.name}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Language :
                                        </td>
                                        <td className='inline-block mr-[10px]'>{movie.language.name}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Size :
                                        </td>
                                        <td className='inline-block mr-[10px]'>{movie.downloadLink.resolutions.map(movie => movie.size)}</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Quality :
                                        </td>
                                        <td className='inline-block mr-[10px]'>
                                            {
                                                movie.downloadLink.resolutions.map(link => (
                                                    link.size + "p "
                                                )).join()
                                                    .replaceAll(',', ' || ')
                                            }
                                        </td>
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
                        <article>
                            <div className='mt-[30px]'>
                                <h3 className='text-[#008000] text-[25px] '>Sunoppsis / Story Line :</h3>
                                <p className='text-[#ffffffa5] py-[10px]'>
                                    {movie.description}
                                </p>
                            </div>
                        </article>
                        <section className='mt-[30px]'>
                            <h2 className='bg-[#6abf6059] block text-[#ffffffd2] text-center rounded-[10px] p-[10px]'>G-Drive [GDTot] Download Links</h2>
                            <div className='flex flex-col gap-[30px] mt-[30px]'>
                                {
                                    movie.downloadLink.resolutions
                                        .map((resolutions, idx) => (
                                            <a target='_blank'
                                                key={idx}
                                                href={resolutions.link} className='bg-[#6a7c8f29] text-[#ffffffd2] p-[10px] text-center rounded-[10px] w-[80%] m-auto transition duration-200 hover:bg-[#6a7c8f] hover:shadow-red hover:text-white hover:font-semibold'>Download {resolutions.size}</a>
                                        ))
                                }

                            </div>
                        </section>
                    </div>

                    <div className='w-full h-auto mt-[40px]'>
                        <h3 id='movietrailer' className='uppercase text-[25px] font-bold my-[20px] text-[#6a7c8fca]'>Movie Trailer:</h3>
                        <iframe
                            src={movie.youtubelink}
                            width='100%'
                            height='370'
                            className='rounded-md'
                        />
                    </div>
                </div>
            </div>
            <div className='relative mx-auto md:max-w-[1200px] w-[95%]'>
                <h3 className='text-[#6a7c8f]'> LATEST MOVIES :</h3>
                <div className='related mt-[20px] flex overflow-x-auto scroll-smooth hide-scrollbar gap-[20px] transition-all duration-500 ease-linear '>
                    {
                        latestMovies.map((movie) => (
                            <div key={movie.id} className={`max-w-[200px] min-w-[200px] h-[340px]`}>

                                <Link
                                    href={`/movies/${movie.slug} `}
                                >
                                    <div className='w-full hover:scale-[0.99]  hover:shadow-white hover:border-2 hover:border-red-500 relative h-[80%] rounded-[8px] overflow-hidden'>
                                        <Image
                                            src={movie.bgposter}
                                            alt={`${movie} poster`}
                                            fill
                                        />
                                    </div>
                                    <div className='w-full h-[15%] mt-[5px]'>
                                        <h5 className='overflow-ellipsis text-nowrap font-bold overflow-hidden text-[14px]'>{movie.title}</h5>
                                        <h6 className='flex items-center justify-between text-[13px] py-[2px]'>
                                            <span className='text-[12px] text-neutral-400'>{movie.year}</span>
                                            <div className='flex items-center'>
                                                <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                                    <FaHeart />
                                                </i>
                                                <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                                    <FaEye />
                                                </i>
                                                <i className='mr-[7px] mt-[5px] w-[10px] text-[9px] text-[#ffffff80]'>
                                                    <FaStar />
                                                </i>
                                                <h6 className='text-[13px] text-yellow-500 mt-[3px] '>{movie.rating}</h6>
                                            </div>
                                        </h6>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <ScrollButtons type={'related'} />
            </div>
        </div>
    )
}

export default page