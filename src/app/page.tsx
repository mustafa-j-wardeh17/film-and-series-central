import CatSwiper from "@/components/CatSwiper";
import Header from "@/components/Header";
import MainSwiper from "@/components/MainSwiper";
import Link from "next/link";
import { FaAngleDoubleUp, FaFilm, FaPlus, FaStar } from "react-icons/fa";


export default function Home() {
  let active = 1
  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      <MainSwiper />
      <div className="flex justify-center w-full">
        <ul className="list-none flex items-center justify-between w-[90%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
          <li>
            <Link
              href={'/all'}
              className={`${active === 1 ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaAngleDoubleUp size={14} /></i>
              <p>Latest</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/movies'}
              className={`${active === 2 ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaFilm size={14} /></i>
              <p>Movies</p>
            </Link>

          </li>
          <li>
            <Link
              href={'/series'}
              className={`${active === 3 ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
            >
              <i><FaStar size={14} /></i>
              <p>Series</p>
            </Link>

          </li>

          <li>
            <Link
              href={'/recently'}
              className={`${active === 4 ? 'text-white' : 'text-[#ffffffb3]'} hover:text-white flex items-center gap-2 text-sm`}
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
    </div>
  );
}
