'use server';

import prisma from "./prisma";
import { RandomArray } from "./util";

const Genres = [
    'comedy', 'thriller', 'adventure', 'animation', 'drama',
    'fantasy', 'horror', 'mystery', 'romantic', 'action', 'crime', 'science_fiction'
];

const Categories = [
    'bollywood', 'hollywood', 'south', 'gujarati',
    'marvel_studio', 'tv_shows', 'web_series'
];

const Languages = [
    { name: 'Hindi' },
    { name: 'English' },
    { name: 'Gujarati' },
    { name: 'Tamil' },
    { name: 'Telugu' }
];

export const CreateSeedData = async () => {
    try {
        // Create or upsert Languages
        const languageIds = await Promise.all(
            Languages.map(async (language) => {
                const lang = await prisma.language.upsert({
                    where: { name: language.name }, // Unique field constraint
                    update: {}, // No update needed in this case
                    create: language,
                });
                return lang.id;
            })
        );

        // Create or upsert Genres
        const genreIds = await Promise.all(
            Genres.map(async (genre) => {
                const gen = await prisma.genre.upsert({
                    where: { name: genre }, // Unique field constraint
                    update: {},
                    create: { name: genre },
                });
                return gen.id;
            })
        );

        // Create or upsert Categories
        const categoryIds = await Promise.all(
            Categories.map(async (category) => {
                const cat = await prisma.category.upsert({
                    where: { name: category }, // Unique field constraint
                    update: {},
                    create: { name: category },
                });
                return cat.id;
            })
        );

        console.log('Seed data created successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};


const movieData = {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    slug: 'the-lord-of-the-rings-the-fellowship-of-the-ring',
    languageId: 2, // English language id
    bgposter: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    wideposter: 'https://image.tmdb.org/t/p/original/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg',
    description: `In a small village in the Shire, a young hobbit named Frodo Baggins inherits a mysterious ring from his uncle Bilbo. With the help of his friends and the wizard Gandalf, Frodo embarks on a perilous journey to destroy the ring in the fires of Mount Doom, where it was forged, to prevent the dark lord Sauron from reclaiming it.`,
    rating: 8.8,
    duration: 178, // Duration in minutes
    year: 2001,
    youtubelink: 'https://www.youtube.com/embed/V75dMMIW2B4',
    status: 'available',
    genreId: 12, // Fantasy genre id
    categoryId: 3, // Bollywood category id (for this example, can be changed)
    watchlink: 'https://www.hbo.com/the-lord-of-the-rings-the-fellowship-of-the-ring',
    resolutions: [
        {
            size: 1080,
            link: 'https://example.com/download/the_lord_of_the_rings_fellowship_1080p.mp4',
            resType: 'HD',
        },
        {
            size: 720,
            link: 'https://example.com/download/the_lord_of_the_rings_fellowship_720p.mp4',
            resType: 'HD',
        },
    ],
};



export const CreateMovie = async () => {
    try {
        // First, create the download link and associated resolution(s)
        const downloadLink = await prisma.downloadLink.create({
            data: {
                resolutions: {
                    create: movieData.resolutions.map((res) => ({
                        size: res.size,
                        link: res.link,
                        resType: res.resType,
                    })),
                },
            },
            include: {
                resolutions: true,
            },
        });

        // Then, create the movie (MediaContent)
        const newMovie = await prisma.mediaContent.create({
            data: {
                title: movieData.title,
                slug: movieData.slug,
                languageId: movieData.languageId,
                bgposter: movieData.bgposter,
                wideposter: movieData.wideposter,
                description: movieData.description,
                rating: movieData.rating,
                duration: movieData.duration,
                year: movieData.year,
                youtubelink: movieData.youtubelink,
                status: movieData.status, // e.g. "released", "upcoming", etc.
                genreId: movieData.genreId,
                downloadlinkId: downloadLink.id, // Use the created download link ID
                categoryId: movieData.categoryId,
                watchlink: movieData.watchlink,
            },
            include: {
                language: true,
                genre: true,
                category: true,
                downloadLink: {
                    include: {
                        resolutions: true,
                    },
                },
            },
        });

        return {
            success: true,
            movie: newMovie,
        };
    } catch (error: any) {
        console.error('Error creating movie:', error);
        return {
            success: false,
            error: error.message,
        };
    }
};


export const CreateSerieAndEpisodes = async () => {
    // Create a DownloadLink with Resolutions
    try {
        // Create a DownloadLink with Resolutions
        const downloadLink = await prisma.downloadLink.create({
            data: {
                resolutions: {
                    create: [
                        {
                            size: 720, // Size in pixels
                            link: 'https://example.com/download/the-wire-720p',
                            resType: 'HD', // Resolution type
                        },
                        {
                            size: 1080, // Size in pixels
                            link: 'https://example.com/download/the-wire-1080p',
                            resType: 'Full HD', // Resolution type
                        },
                    ],
                },
            },
        });

        // Create the Serie
        const serie = await prisma.serie.create({
            data: {
                title: 'The Wire',
                slug: 'the-wire',
                languageId: 2, // English language id
                bgposter: 'https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg', // Background poster
                wideposter: 'https://image.tmdb.org/t/p/original/oggnxmvofLtGQvXsO9bAFyCj3p6.jpg', // Wide poster
                description: 'Set in Baltimore, this show centers on the citys drug scene from the perspective of both law enforcement and drug dealers.',
                rating: 9.3,
                year: 2002,
                youtubelink: 'https://www.youtube.com/embed/81OEmp1-PrA', // Trailer link
                status: 'completed',
                genreId: 11, // Crime genre id
                categoryId: 5, // TV Shows category id
                episodes: { // Create associated episodes
                    create: [
                        {
                            title: 'The Target',
                            slug: 'the-target',
                            duration: 60,
                            status: 'available',
                            downloadlinkId: downloadLink.id, // Link to download
                            watchlink: 'https://example.com/watch/the-target',
                        },
                        {
                            title: 'The Detail',
                            slug: 'the-detail',
                            duration: 60,
                            status: 'available',
                            downloadlinkId: downloadLink.id, // Link to download
                            watchlink: 'https://example.com/watch/the-detail',
                        },
                        {
                            title: 'The Buys',
                            slug: 'the-buys',
                            duration: 60,
                            status: 'available',
                            downloadlinkId: downloadLink.id, // Link to download
                            watchlink: 'https://example.com/watch/the-buys',
                        },
                    ],
                },
            },
        });



        return {
            success: true,
            serie: serie,
        };
    } catch (error: any) {
        console.error('Error creating movie:', error);
        return {
            success: false,
            error: error.message,
        };
    }
};


export const HomeData = async (type: string, skip: number, filter: string) => {
    // 1- <MainSwiperMovies>
    const MainSwiperMovies = await prisma.mediaContent.findMany({
        include: {
            genre: true,
            category: true,
            downloadLink: true,
            language: true,
        },
        take: 4,
    })
    // 2- <categorySwiperMovies>
    const categorySwiperMovies = await prisma.mediaContent.findMany({
        include: {
            genre: true,
            category: true,
            downloadLink: true,
            language: true,
        },
        take: 10,
    })

    // 3- Movie conditional query <movieData>
    const moviesData = type === "movies" || type === 'all'
        ? await prisma.mediaContent.findMany({
            where: filter
                ? {
                    OR: [
                        { category: { name: { contains: filter, mode: "insensitive" } } },
                        { genre: { name: { contains: filter, mode: "insensitive" } } },
                    ],
                }
                : {}, // Fetch all data if filter is empty
            select: {
                id: true,
                title: true,
                bgposter: true,
                slug: true,
                year: true,
                rating: true, // Assuming `rating` is stored as a number
            },

            skip,
            take: type === 'all' ? 5 : 10, // Take 5 if 'all', otherwise 10
        })
        : []

    // 4- Serie conditional query <serieData>
    const seriesData = type === "series" || type === 'all'
        ? await prisma.serie.findMany({
            where: filter
                ? {
                    OR: [
                        { category: { name: { contains: filter, mode: "insensitive" } } },
                        { genre: { name: { contains: filter, mode: "insensitive" } } },
                    ],
                }
                : {}, // Fetch all data if filter is empty

            select: {
                id: true,
                title: true,
                bgposter: true,
                slug: true,
                year: true,
                rating: true, // Assuming `rating` is stored as a number
            },

            skip,
            take: type === 'all' ? 5 : 10, // Take 5 if 'all', otherwise 10
        })
        : []

    // 5- Count based on type <movieCount>
    const movieCount = type === "movies" || type === 'all'
        ? await prisma.mediaContent.count({
            where: filter
                ? {
                    OR: [
                        { category: { name: { contains: filter, mode: "insensitive" } } },
                        { genre: { name: { contains: filter, mode: "insensitive" } } },
                    ],
                }
                : {}, // Count all if no filter
        })
        : 0

    // 6- Count based on type <serieCount>
    const serieCount = type === "series" || type === 'all'
        ? await prisma.serie.count({
            where: filter
                ? {
                    OR: [
                        { category: { name: { contains: filter, mode: "insensitive" } } },
                        { genre: { name: { contains: filter, mode: "insensitive" } } },
                    ],
                }
                : {}, // Count all if no filter
        })
        : 0


    // Merge moviesData and seriesData if 'type' is 'all'
    let pageData: {
        id: number;
        title: string;
        slug: string;
        bgposter: string;
        rating: number;
        year: number;
    }[] = []; // Define the type for pageData

    if (type === 'all') {
        pageData = [
            ...moviesData.map(movie => ({ ...movie, type: 'movie' })),
            ...seriesData.map((serie) => ({ ...serie, type: 'serie' }))]; // Ensure both are awaited
        pageData = RandomArray(pageData);

    } else if (type === 'movies') {
        pageData = moviesData;
    } else if (type === 'series') {
        pageData = seriesData;
    }
    // Sum the totals if type is 'all'
    const totalData = type === 'all'
        ? movieCount + serieCount // Sum of both movies and series counts
        : type === 'movie'
            ? movieCount // Only movie count
            : serieCount; // Only series count

    return {
        MainSwiperMovies,
        categorySwiperMovies,
        pageData,
        totalData
    }
}