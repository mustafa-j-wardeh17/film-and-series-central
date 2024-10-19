// seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const genres = [
  'comedy',
  'thriller',
  'adventure',
  'animation',
  'drama',
  'fantasy',
  'horror',
  'mystery',
  'romantic',
  'action',
  'crime',
  'science_fiction'
];

const categories = [
  'bollywood',
  'hollywood',
  'south',
  'gujarati',
  'marvel_studio',
  'tv_shows',
  'web_series'
];

const languages = [
  { name: 'Hindi' },
  { name: 'English' },
  { name: 'Gujarati' },
  { name: 'Tamil' },
  { name: 'Telugu' }
];

const createSeedData = async () => {
  // Create Languages
  const languageIds = await Promise.all(
    languages.map(async (language) => {
      const lang = await prisma.language.create({
        data: language,
      });
      return lang.id;
    })
  );

  // Create Genres
  const genreIds = await Promise.all(
    genres.map(async (genre) => {
      const gen = await prisma.genre.create({
        data: { name: genre },
      });
      return gen.id;
    })
  );

  // Create Categories
  const categoryIds = await Promise.all(
    categories.map(async (category) => {
      const cat = await prisma.category.create({
        data: { name: category },
      });
      return cat.id;
    })
  );

  // Create Download Links
  const downloadLink = await prisma.downloadLink.create({
    data: {
      resolutions: {
        create: [
          {
            size: 720,
            link: 'https://example.com/download-720p',
          },
          {
            size: 1080,
            link: 'https://example.com/download-1080p',
          }
        ]
      }
    }
  });

  // Create Movies
  const moviesPromises = Array.from({ length: 10 }, async (_, i) => {
    const movie = await prisma.mediaContent.create({
      data: {
        title: `Movie Title ${i + 1}`,
        slug: `movie-title-${i + 1}`,
        languageId: languageIds[Math.floor(Math.random() * languageIds.length)],
        bgposter: `https://example.com/bgposter-${i + 1}.jpg`,
        wideposter: `https://example.com/wideposter-${i + 1}.jpg`,
        description: `Description for Movie ${i + 1}`,
        rating: parseFloat((Math.random() * 5).toFixed(1)),
        duration: Math.floor(Math.random() * 120) + 60,
        year: Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000,
        youtubelink: `https://youtube.com/watch?v=example${i + 1}`,
        status: 'released',
        genreId: genreIds[Math.floor(Math.random() * genreIds.length)],
        downloadlinkId: downloadLink.id,
        categoryId: categoryIds[Math.floor(Math.random() * categoryIds.length)],
      },
    });
    return movie;
  });

  await Promise.all(moviesPromises);

  // Create Series and Episodes
  const seriesPromises = Array.from({ length: 10 }, async (_, i) => {
    const series = await prisma.serie.create({
      data: {
        title: `Series Title ${i + 1}`,
        slug: `series-title-${i + 1}`,
        languageId: languageIds[Math.floor(Math.random() * languageIds.length)],
        bgposter: `https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg`,
        wideposter: `https://media.themoviedb.org/t/p/w533_and_h300_bestv2/vINgGecnz95iDL6fjQMARDsocgG.jpg`,
        description: `Description for Series ${i + 1}`,
        rating: parseFloat((Math.random() * 5).toFixed(1)),
        year: Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000,
        youtubelink: `https://youtube.com/watch?v=series-example${i + 1}`,
        status: 'ongoing',
        genreId: genreIds[Math.floor(Math.random() * genreIds.length)],
        categoryId: categoryIds[Math.floor(Math.random() * categoryIds.length)],
      },
    });

    // Create Episodes for each series
    const numberOfEpisodes = Math.floor(Math.random() * 3) + 2; // 2 to 4 episodes
    const episodePromises = Array.from({ length: numberOfEpisodes }, async (_, j) => {
      const episode = await prisma.episode.create({
        data: {
          title: `Episode ${j + 1} of ${series.title}`,
          slug: `episode-${j + 1}-of-${series.slug}`,
          duration: Math.floor(Math.random() * 60) + 20,
          status: 'released',
          downloadlinkId: downloadLink.id,
          serieId: series.id,
        },
      });
      return episode;
    });

    await Promise.all(episodePromises);
  });

  await Promise.all(seriesPromises);
};

createSeedData()
  .then(() => {
    console.log('Seeding completed!');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
