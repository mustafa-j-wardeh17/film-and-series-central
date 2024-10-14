import Image from 'next/image'
import React from 'react'
import { FaBookmark, FaCheck, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

const page = ({ params: { id } }: { params: { id: string } }) => {
    return (
        <div className=''>
            <div className='slideimagebx'>
                <Image
                    src={'/img/img.jpg'}
                    alt={`${{ id }}`}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='relative lg:max-w-[1200px] mx-auto h-auto bg-[#111010] rounded-[20px] outline-none mt-[-100px] flex lg:flex-row flex-wrap z-[3] flex-col max-w-[720px]'>
                <div className='lg:w-[35%] w-[100%] h-full rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
                    <div className='rounded-[8px] lg:w-full xs:w-[250px] relative w-1/2 min-h-[400px] max-h-hidden overflow-hidden '>
                        <Image
                            src={'/img/img.jpg'}
                            alt={`${{ id }}`}
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
                </div>
            </div>

        </div>
    )
}

export default page