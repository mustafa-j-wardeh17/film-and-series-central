import MainSwiper from '@/components/MainSwiper'
import React from 'react'
import prisma from '../../../lib/prisma'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const MainSwiperMovies = await prisma.mediaContent.findMany({
        include: {
            genre: true,
            category: true,
            downloadLink: true,
            language: true,
        },
        take: 4,
        orderBy: {
            rating: 'desc'
        }
    })
    return (
        <div className="max-w-screen relative ">
            <MainSwiper movies={MainSwiperMovies} />
            {children}
        </div>
    )
}

export default layout