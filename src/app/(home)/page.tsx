// import CatSwiper from "@/components/CatSwiper";
// import CategoryGenreFilter from "@/components/CategoryGenreFilter";
// import Pagination from "@/components/Pagination";
import Link from "next/link";
import { FaAngleDoubleUp, FaCheck, FaFilm, FaPhotoVideo, FaPlus, FaStar } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { HomeData } from "../../../lib/actions";
import { redirect } from "next/navigation";
import { cache } from "react";
import dynamic from "next/dynamic";
// Dynamic imports for heavier components
const CatSwiper = dynamic(() => import('@/components/CatSwiper'), {
  loading: () => <p>Loading swiper...</p>
});

const CategoryGenreFilter = dynamic(() => import('@/components/CategoryGenreFilter'), {
  loading: () => <p>Loading filters...</p>
});

export type tSearchParams = Promise<{ [key: string]: string | undefined }>

const getHomeData = cache(async (type: string, skip: number, swiper: string, filter: string): Promise<{ categorySwiperMovies: any[]; pageData: { id: number; title: string; slug: string; bgposter: string; rating: number; year: number; }[]; totalData: number; }> => {
  return await HomeData(type, skip, swiper, filter)
})

export default async function Home({
  searchParams,
}: {
  searchParams: tSearchParams

}) {
  const resolvedSearchParams = await searchParams;

  const filter = typeof resolvedSearchParams?.filter === "string"
    ? resolvedSearchParams.filter.toLocaleLowerCase()
    : "";
  const type = typeof resolvedSearchParams?.type === "string"
    ? resolvedSearchParams.type.toLocaleLowerCase()
    : "movies";
  const swiper = typeof resolvedSearchParams?.swiper === "string"
    ? resolvedSearchParams.swiper.toLocaleLowerCase()
    : "latest";

  const currentPage = Number(resolvedSearchParams.page) || 1;
  const skip = (currentPage - 1) * ((type === "all" || type === "rating") ? 5 : 10);

  const { categorySwiperMovies, pageData, totalData } = await getHomeData(type, skip, swiper, filter);

  if (pageData.length === 0 && Number(resolvedSearchParams.page) > 1) {

    resolvedSearchParams.page = "1";
    const filteredSearchParams = Object.fromEntries(
      Object.entries(resolvedSearchParams).filter(([_, value]) => value !== undefined)
    );
    const newSearchParams = new URLSearchParams(filteredSearchParams as Record<string, string>);
    redirect(`?${newSearchParams}`)
  }

  const newLinkBySearchParams = (target: string, type: "swiper" | "type" | "filter") => {
    let url = "/?";
    if (type === "swiper") {
      if (resolvedSearchParams.type) url += `type=${resolvedSearchParams.type}&`;
      if (resolvedSearchParams.filter) url += `filter=${resolvedSearchParams.filter}&`;
    }
    if (type === "type") {
      if (resolvedSearchParams.swiper) url += `swiper=${resolvedSearchParams.swiper}&`;
    }
    url += `${target}`;
    return url;
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <ul className="list-none flex items-center justify-between sm:w-[90%] w-[96%] py-[20px] border-b-[2px] border-[#b8b8b81a]">
          <li>
            <Link
              href={newLinkBySearchParams("swiper=latest", "swiper")}
              className={`${swiper === "latest" ? "text-white" : "text-[#ffffffb3]"
                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
              prefetch={true}
            >
              <i>
                <FaAngleDoubleUp size={14} />
              </i>
              <p>Latest</p>
            </Link>
          </li>
          <li>
            <Link
              href={newLinkBySearchParams("swiper=movies", "swiper")}
              className={`${swiper === "movies" ? "text-white" : "text-[#ffffffb3]"
                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
              prefetch={true}
            >
              <i>
                <FaFilm size={14} />
              </i>
              <p>Movies</p>
            </Link>
          </li>
          <li>
            <Link
              href={newLinkBySearchParams("swiper=series", "swiper")}
              className={`${swiper === "series" ? "text-white" : "text-[#ffffffb3]"
                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
              prefetch={true}
            >
              <i>
                <FaClapperboard size={14} />
              </i>
              <p>Series</p>
            </Link>
          </li>

          <li>
            <Link
              href={newLinkBySearchParams("swiper=recently", "swiper")}
              className={`${swiper === "recently" ? "text-white" : "text-[#ffffffb3]"
                } hover:text-white flex items-center gap-1 sm:gap-2 text-sm`}
              prefetch={true}
            >
              <i>
                <FaPlus size={14} />
              </i>
              <p>Recently Added</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Todo ==> Taking All Categories From db To make filtering by them */}
      <div className=" mt-[20px] w-full">
        <CatSwiper movies={categorySwiperMovies} />
      </div>

      <CategoryGenreFilter
        searchParams={Object.fromEntries(
          Object.entries(resolvedSearchParams).map(([key, value]) => [
            key,
            Array.isArray(value) ? value[0] : value,
          ])
        )}
        data={pageData}
        type={type}
        totalData={totalData}
      />


    </>
  );
}
