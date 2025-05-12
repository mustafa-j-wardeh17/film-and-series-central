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


  return (
    <>


      {/* Todo ==> Taking All Categories From db To make filtering by them */}
      <CatSwiper
        movies={categorySwiperMovies}
        resolvedSearchParams={resolvedSearchParams}
        swiper={swiper}
      />

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
