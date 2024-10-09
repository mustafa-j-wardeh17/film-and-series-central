import CatSwiper from "@/components/CatSwiper";
import CategoryGenreFilter from "@/components/CategoryGenreFilter";
import Header from "@/components/Header";
import MainSwiper from "@/components/MainSwiper";
import Link from "next/link";
import { FaAngleDoubleUp, FaCheck, FaFilm, FaPhotoVideo, FaPlus, FaStar } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";


export default function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {


  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      <MainSwiper />
      <div className="flex justify-center w-full">
        <ul className="list-none flex items-center justify-between w-[90%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
          <li>
            <Link
              href={'/all'}
              className={`${true ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaAngleDoubleUp size={14} /></i>
              <p>Latest</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/movies'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaFilm size={14} /></i>
              <p>Movies</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaStar size={14} /></i>
              <p>Series</p>
            </Link>

          </li>

          <li>
            <Link
              href={'/recently'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaPlus size={14} /></i>
              <p>Recently Added</p>
            </Link>

          </li>
        </ul>
      </div>

      <div className="my-[20px] mt-[20px] w-full">
        <CatSwiper />
      </div>
      <div className="flex justify-center w-full mt-[40px]">
        <ul className="list-none flex items-center justify-between w-[90%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
          <li>
            <Link
              href={'/all'}
              className={`${true ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaPhotoVideo size={14} /></i>
              <p>Movies</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaFilm size={14} /></i>
              <p>Series</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaCheck size={14} /></i>
              <p>Original Series</p>
            </Link>

          </li>

          <li>
            <Link
              href={'/genre'}
              className={`${false ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaClapperboard size={14} /></i>
              <p>Genre</p>
            </Link>

          </li>
        </ul>
      </div>
      <CategoryGenreFilter
        searchParams={searchParams}
      />
    </div>
  );
}
