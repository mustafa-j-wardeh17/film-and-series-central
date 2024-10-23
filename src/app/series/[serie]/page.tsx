import React from 'react'
import prisma from '../../../../lib/prisma'
import ScrollButtons from '@/components/ScrollButtons'
import { FaBookmark, FaCheck, FaImdb, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import Image from 'next/image'
import SocialShare from '@/components/SocialShare'
import SerieCard from '@/components/SerieCard'
import { Metadata } from 'next'
import { capitalize } from '../../../../lib/util'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { serie } }: { params: { serie: string } }): Promise<Metadata> {
  return {
    title: capitalize(serie)
  }
}

const Serie = async ({ params: { serie }, searchParams }: { params: { serie: string }, searchParams: { [key: string]: string | undefined } }) => {
  const [serieData, latestSeries] = await prisma.$transaction([
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

  if (!serieData) {
    return notFound()
  }
  return (
    <div className=''>
      <div className='slideimagebx'>
        <Image
          src={serieData?.wideposter || '/img/img.jpg'}
          alt={`${serieData?.slug} `}
          fill
          className='object-fill'
        />
      </div>
      <div className='relative lg:max-w-[1200px] mx-auto h-auto bg-[#111010] rounded-[20px] outline-none mt-[-100px] flex lg:flex-row flex-wrap z-[3] flex-col max-w-[720px]'>
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

        <div className='relative lg:w-[65%] w-full h-auto rounded-tl-[20px] rounded-bl-[20px] p-[30px]'>
          <div className='w-full flex items-center  justify-between'>
            <h1 className='w-[90%] text-white font-semibold text-[25px]'>{serieData?.title}</h1>

            <SocialShare />


          </div>
          <p className='text-[20px] font-bold mt-[20px] text-[#3a7c8fca]'> DOWNLOAD FREE NOW</p>
          <div className='text-[#ffffffad] mt-[40px] w-full'>
            <article className='movieinfo'>
              <h3 className='text-[#008000] font-semibold text-[25px]'>{'Serie'} info : </h3>
              <table>
                <tbody>
                  <tr className='block my-[15px] '>
                    <td className='uppercase inline-block mr-[10px] '>
                      &#9642; Name :
                    </td>
                    <td className='font-bold inline-block  mr-[10px]'>{serieData?.title}</td>
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
                      &#9642; Number of episodes :
                    </td>
                    <td className='inline-block mr-[10px]'>{serieData?.episodes?.length}</td>
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
                  {serieData?.description}
                </p>
              </div>
            </article>

          </div>

          <div className='w-full h-auto mt-[40px]'>
            <h3 id='movietrailer' className='uppercase text-[25px] font-bold my-[20px] text-[#6a7c8fca]'>Serie Trailer:</h3>
            <iframe
              src={serieData?.youtubelink}
              width='100%'
              height='370'
              className='rounded-md'
            />
          </div>
        </div>
      </div>

      <section className='relative mx-auto md:max-w-[1200px] w-[95%]'>
        <h2 className='text-[#6a7c8f] uppercase'>{serieData?.title} <span className='font-bold'>Episeodes</span> :</h2>
        <div className="flex flex-row flex-wrap md:justify-start justify-center gap-6 mt-8">
          {
            serieData?.episodes.map
              ((episode, idx) => (
                <SerieCard
                  media={episode}
                  type='episode'
                  dataFromSerie={
                    {
                      episodeNum: idx,
                      serieImg: serieData.bgposter,
                      serieRating: serieData.rating,
                      serieYear: serieData.year,
                      serieSlug: serieData.slug
                    }
                  }
                  key={idx}
                />
              ))
          }
        </div>
      </section>
      {
        latestSeries.length > 0 && (
          <div className='relative mx-auto md:max-w-[1200px] my-[80px] w-[95%]'>
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

export default Serie