import CatSwiper from "@/components/CatSwiper";
import CategoryGenreFilter from "@/components/CategoryGenreFilter";

import MainSwiper from "@/components/MainSwiper";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { FaAngleDoubleUp, FaCheck, FaFilm, FaPhotoVideo, FaPlus, FaStar } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import prisma from "../../lib/prisma";


export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const [MainSwiperMovies, categorySwiperMovies, pageMovies] = await prisma.$transaction([
    prisma.mediaContent.findMany({
      include: {
        genre: true,
        category: true,
        downloadLink: true,
        language: true,
        subtitle: true
      },
      take: 4
    }),
    prisma.mediaContent.findMany({
      include: {
        genre: true,
        category: true,
        downloadLink: true,
        language: true,
        subtitle: true
      },
      take: 10
    }),
    prisma.mediaContent.findMany({
      include: {
        genre: true,
        category: true,
        downloadLink: true,
        language: true,
        subtitle: true
      },
      skip: ((Number(searchParams.page) || 1) - 1) * 10,
      take: 10
    })
  ])

  return (
    <div className="max-w-screen relative ">
      <MainSwiper movies={MainSwiperMovies} />
      <div className="flex justify-center w-full">
        <ul className="list-none flex items-center justify-between sm:w-[90%] w-[96%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
          <li>
            <Link
              href={'/all'}
              className={`${true ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaAngleDoubleUp size={14} /></i>
              <p>Latest</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/movies'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaFilm size={14} /></i>
              <p>Movies</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaStar size={14} /></i>
              <p>Series</p>
            </Link>

          </li>

          <li>
            <Link
              href={'/recently'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaPlus size={14} /></i>
              <p>Recently Added</p>
            </Link>

          </li>
        </ul>
      </div>

      {/* Todo ==> Taking All Categories From db To make filtering by them */}
      <div className=" mt-[20px] w-full">
        <CatSwiper movies={categorySwiperMovies} />
      </div>
      <div className="flex  justify-center w-full mt-[40px]">
        <ul className="list-none flex items-center justify-between sm:w-[90%] w-[96%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
          <li>
            <Link
              href={'/all'}
              className={`${true ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaPhotoVideo size={14} /></i>
              <p>Movies</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaFilm size={14} /></i>
              <p>Series</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaCheck size={14} /></i>
              <p>Original Series</p>
            </Link>

          </li>

          <li>
            <Link
              href={'/genre'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
            >
              <i><FaClapperboard size={14} /></i>
              <p>Genre</p>
            </Link>

          </li>
        </ul>
      </div>
      <CategoryGenreFilter
        searchParams={searchParams}
        movies={pageMovies}
      />
      <Pagination
        searchParams={searchParams}
      />

    </div>
  );
}
