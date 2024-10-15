import ScrollButtons from '@/components/ScrollButtons'
import SocialShare from '@/components/SocialShare'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBookmark, FaCheck, FaEye, FaHeart, FaImdb, FaStar, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

export async function generateMetadata(
    { params: { id } }: { params: { id: string } }
): Promise<Metadata> {

    return {
        title: id

    }

}

const page = ({ params: { id } }: { params: { id: string } }) => {
    return (
        <div className=''>
            <div className='slideimagebx'>
                <Image
                    src={'/img/img.jpg'}
                    alt={`${{ id }} `}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='relative lg:max-w-[1200px] mx-auto h-auto bg-[#111010] rounded-[20px] outline-none mt-[-100px] flex lg:flex-row flex-wrap z-[3] flex-col max-w-[720px]'>
                <div className='lg:w-[35%] w-[100%] h-full rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='rounded-[8px] lg:w-full xs:w-[250px] relative w-1/2 min-h-[400px] max-h-hidden overflow-hidden '>
                        <Image
                            src={'/img/img.jpg'}
                            alt={`${{ id }} `}
                            height={400}
                            width={400}
                            className='object-cover min-h-[400px]'
                            loading='lazy'
                        />
                        <div className='w-full mt-[-4px] '>
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
                        <a target='_blank' href={``}>
                            <button className='w-full bg-[#1c252f] duration-200 hover:bg-[#6a7c8f] mt-[8px] text-white border-none p-[12px] cursor-pointer rounded-[8px]'>
                                Click to watch online
                            </button>
                        </a>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2 mt-[30px]'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>Rating</h3>
                        <div className='flex gap-[15px] items-center'>
                            <FaImdb color='yellow' size={25} />
                            <h4 className='text-sm text-[#ffffff9a]'>5.5 <span className='text-yellow-500'>IMDB</span></h4>
                        </div>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>GENRE</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>action</h4>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>YEAR</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>2024</h4>
                    </div>
                    <div className='flex flex-col border-t-[1px] border-[#333] py-[10px] gap-2'>
                        <h3 className='text-[#6a7c8f] font-semibold uppercase'>QUALITY</h3>
                        <h4 className='text-xs text-[#ffffff9a] uppercase'>480p || 720p|| 1080p - HDTS</h4>
                    </div>
                </div>

                <div className='relative w-[65%] h-auto rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='w-full flex items-center  justify-between'>
                        <h1 className='w-[90%] text-white font-semibold text-[25px]'>Peaky Blinders</h1>

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
                                        <td className='font-bold inline-block  mr-[10px]'>Peaky Blinders</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Release year :
                                        </td>
                                        <td className='inline-block mr-[10px]'>2024</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Genre :
                                        </td>
                                        <td className='inline-block mr-[10px]'>action, adventure, drama</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Language :
                                        </td>
                                        <td className='inline-block mr-[10px]'>Dual Audio [Arabic + English]</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Size :
                                        </td>
                                        <td className='inline-block mr-[10px]'>400MB || 1GB || 2GB</td>
                                    </tr>
                                    <tr className='block my-[15px] '>
                                        <td className='uppercase inline-block mr-[10px]'>
                                            &#9642; Quality :
                                        </td>
                                        <td className='inline-block mr-[10px]'>480p || 720p || 1080p</td>
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
                                {/* <p className='text-[#ffffffa5] py-[10px]'>Peaky Blinders is a 2013 British drama series that tells the story of the criminal gang of the same name. Led by Thomas Shelby, they control Birmingham during the 1920s and 1930s. Through bribery, violence, extortion and illegal trafficking, they consolidate their grip on the city.</p> */}
                            </div>
                        </article>
                        <section className='mt-[30px]'>
                            <h2 className='bg-[#6abf6059] block text-[#ffffffd2] text-center rounded-[10px] p-[10px]'>G-Drive [GDTot] Download Links</h2>
                            <div className='flex flex-col gap-[30px] mt-[30px]'>
                                <a target='_blank' href='/' className='bg-[#6a7c8f29] text-[#ffffffd2] p-[10px] text-center rounded-[10px] w-[80%] m-auto transition duration-200 hover:bg-[#6a7c8f] hover:shadow-red hover:text-white hover:font-semibold'>Download 480p</a>
                                <a target='_blank' href='/' className='bg-[#6a7c8f29] text-[#ffffffd2] p-[10px] text-center rounded-[10px] w-[80%] m-auto transition duration-200 hover:bg-[#6a7c8f] hover:shadow-red hover:text-white hover:font-semibold'>Download 720p</a>
                                <a target='_blank' href='/' className='bg-[#6a7c8f29] text-[#ffffffd2] p-[10px] text-center rounded-[10px] w-[80%] m-auto transition duration-200 hover:bg-[#6a7c8f] hover:shadow-red hover:text-white hover:font-semibold'>Download 1080p</a>
                            </div>
                        </section>
                    </div>

                    <div className='w-full h-auto mt-[40px]'>
                        <h3 id='movietrailer' className='uppercase text-[25px] font-bold my-[20px] text-[#6a7c8fca]'>Movie Trailer:</h3>
                        <iframe
                            src="https://www.youtube.com/embed/I3dSg-vwRpU"
                            width='100%'
                            height='370'
                            className='rounded-md'
                        />
                    </div>
                </div>
            </div>
            <div className='relative mx-auto max-w-[1200px]'>
                <h3 className='text-[#6a7c8f]'> LATEST MOVIES :</h3>
                <div className='related mt-[20px] flex overflow-x-auto scroll-smooth hide-scrollbar gap-[20px] transition-all duration-500 ease-linear '>
                    {
                        [1, 2, 3, 5, 7, 8, 5, 6, 6, 5, 5, ,].map((movie) => (
                            <div key={movie} className={`max - w - [200px] min - w - [200px] h - [340px]`}>

                                <Link
                                    href={`/ movies / ${movie} `}
                                >
                                    <div className='w-full hover:scale-[0.99]  hover:shadow-white hover:border-2 hover:border-red-500 relative h-[80%] rounded-[8px] overflow-hidden'>
                                        <Image
                                            src={'/abcd.jpg'}
                                            alt={`${movie} poster`}
                                            fill
                                        />
                                    </div>
                                    <div className='w-full h-[15%] mt-[5px]'>
                                        <h5 className='overflow-ellipsis text-nowrap font-bold overflow-hidden text-[14px]'>{movie}</h5>
                                        <h6 className='flex items-center justify-between text-[13px] py-[2px]'>
                                            <span className='text-[12px] text-neutral-400'>2014</span>
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
                                                <h6 className='text-[13px] text-yellow-500 mt-[3px] '>{5.50}</h6>
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