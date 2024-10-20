'use server';

import prisma from "./prisma";

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
    title: 'Mad Max: Fury Road',
    slug: 'mad-max-fury-road',
    languageId: 2, // English language id
    bgposter: 'https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    wideposter: 'https://media.themoviedb.org/t/p/original/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg',
    description: `In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant and his army in a high-octane road battle across the desert.`,
    rating: 8.1,
    duration: 120, // Duration in minutes
    year: 2015,
    youtubelink: 'https://www.youtube.com/embed/hEJnMQG9ev8',
    status: 'available',
    genreId: 6, // Action genre id
    categoryId: 5, // TV Shows category id
    watchlink: 'https://www.hbomax.com/series/urn:hbo:series:GXw70awAuMx2EwgEAAALF',
    resolutions: [
      {
        size: 1080,
        link: 'https://example.com/download/mad-max-fury-road_1080p.mp4',
        resType: 'HD',
      },
      {
        size: 720,
        link: 'https://example.com/download/mad-max-fury-road_720p.mp4',
        resType: 'HD',
      },
      {
        size: 480,
        link: 'https://example.com/download/mad-max-fury-road_480p.mp4',
        resType: 'SD',
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
