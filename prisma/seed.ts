// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Languages
    const english = await prisma.language.upsert({
        where: { name: 'English' },
        update: {},
        create: { name: 'English' },
    });

    const spanish = await prisma.language.upsert({
        where: { name: 'Spanish' },
        update: {},
        create: { name: 'Spanish' },
    });

    // Seed Subtitles
    const englishSubtitle = await prisma.subtitle.upsert({
        where: { name: 'English' },
        update: {},
        create: { name: 'English' },
    });

    const spanishSubtitle = await prisma.subtitle.upsert({
        where: { name: 'Spanish' },
        update: {},
        create: { name: 'Spanish' },
    });

    // Seed Categories
    const actionCategory = await prisma.category.upsert({
        where: { name: 'Action' },
        update: {},
        create: { name: 'Action' },
    });

    const dramaCategory = await prisma.category.upsert({
        where: { name: 'Drama' },
        update: {},
        create: { name: 'Drama' },
    });

    // Seed Genres
    const thrillerGenre = await prisma.genre.upsert({
        where: { name: 'Thriller' },
        update: {},
        create: { name: 'Thriller' },
    });

    const crimeGenre = await prisma.genre.upsert({
        where: { name: 'Crime' },
        update: {},
        create: { name: 'Crime' },
    });

    // Seed Download Links
    // Seed Download Links
    const downloadLink1 = await prisma.downloadLink.upsert({
        where: { id: 1 }, // Using ID to uniquely identify the entry
        update: {},
        create: {
            resolution_480p: 'https://example.com/download1_480p',
            resolution_720p: 'https://example.com/download1_720p',
            resolution_1080p: 'https://example.com/download1_1080p',
            resolution_4k: 'https://example.com/download1_4k',
        },
    });

    const downloadLink2 = await prisma.downloadLink.upsert({
        where: { id: 2 }, // Using ID to uniquely identify the entry
        update: {},
        create: {
            resolution_480p: 'https://example.com/download2_480p',
            resolution_720p: 'https://example.com/download2_720p',
            resolution_1080p: 'https://example.com/download2_1080p',
            resolution_4k: 'https://example.com/download2_4k',
        },
    });

    const mediaContent = await prisma.mediaContent.createMany({
        data: [
            {
                title: "The Shawshank Redemption",
                slug: "the-shawshank-redemption",
                bgposter: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
                description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                rating: 9.3,
                duration: 142,
                year: 1994,
                size: "1.5 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: "The Godfather",
                slug: "the-godfather",
                bgposter: "https://image.tmdb.org/t/p/w500/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                rating: 9.2,
                duration: 175,
                year: 1972,
                size: "2.0 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=sY1S34973zA",

                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: "The Dark Knight",
                slug: "the-dark-knight",
                bgposter: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                rating: 9.0,
                duration: 152,
                year: 2008,
                size: "2.5 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",

                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: "Inception",
                slug: "inception",
                bgposter: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
                description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                rating: 8.8,
                duration: 148,
                year: 2010,
                size: "2.3 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=YoHD9XEInc0",

                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: "Pulp Fiction",
                slug: "pulp-fiction",
                bgposter: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
                description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                rating: 8.9,
                duration: 154,
                year: 1994,
                size: "2.0 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",

                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: "Forrest Gump",
                slug: "forrest-gump",
                bgposter: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
                description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
                rating: 8.8,
                duration: 142,
                year: 1994,
                size: "2.0 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=bLvqoHBptjg",

                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: "Fight Club",
                slug: "fight-club",
                bgposter: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
                description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
                rating: 8.8,
                duration: 139,
                year: 1999,
                size: "1.8 GB",
                quality: "1080p",
                youtubelink: "https://www.youtube.com/watch?v=qtRKdVHc-cE",

                status: "Available",
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'The Forgotten Planet',
                slug: 'the-forgotten-planet',
                bgposter: 'https://example.com/images/forgotten-planet.jpg',
                description: 'A group of astronauts land on a mysterious planet where the laws of physics don’t apply.',
                rating: 7.8,
                duration: 120,
                year: 2022,
                size: '1.5 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-forgotten-planet',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'Mystery of the Sea',
                slug: 'mystery-of-the-sea',
                bgposter: 'https://example.com/images/mystery-sea.jpg',
                description: 'A deep-sea explorer uncovers an ancient secret that threatens the future of humanity.',
                rating: 8.1,
                duration: 134,
                year: 2021,
                size: '1.8 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-mystery-sea',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'Code Breaker',
                slug: 'code-breaker',
                bgposter: 'https://example.com/images/code-breaker.jpg',
                description: 'A hacker is drawn into a world of espionage after cracking an unbreakable code.',
                rating: 8.3,
                duration: 142,
                year: 2023,
                size: '2.0 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-code-breaker',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'Lost in the Wild',
                slug: 'lost-in-the-wild',
                bgposter: 'https://example.com/images/lost-wild.jpg',
                description: 'A survival expert must rely on her skills when she becomes stranded in a remote jungle.',
                rating: 7.6,
                duration: 128,
                year: 2020,
                size: '1.4 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-lost-wild',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'City of Shadows',
                slug: 'city-of-shadows',
                bgposter: 'https://example.com/images/city-shadows.jpg',
                description: 'In a dystopian future, a detective uncovers a conspiracy that controls the fate of the world.',
                rating: 8.5,
                duration: 150,
                year: 2024,
                size: '2.3 GB',
                quality: '4K',
                youtubelink: 'https://youtube.com/example-city-shadows',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'Parallel Universe',
                slug: 'parallel-universe',
                bgposter: 'https://example.com/images/parallel-universe.jpg',
                description: 'A physicist discovers a way to travel between parallel worlds, but each jump has dangerous consequences.',
                rating: 8.7,
                duration: 145,
                year: 2023,
                size: '2.1 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-parallel-universe',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'Cybernetic Dawn',
                slug: 'cybernetic-dawn',
                bgposter: 'https://example.com/images/cybernetic-dawn.jpg',
                description: 'In a world where humans and AI live side by side, a new threat emerges that could destroy them both.',
                rating: 7.9,
                duration: 132,
                year: 2022,
                size: '1.7 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-cybernetic-dawn',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'Echoes of Time',
                slug: 'echoes-of-time',
                bgposter: 'https://example.com/images/echoes-time.jpg',
                description: 'A time traveler gets trapped in a loop, living the same day over and over again, trying to change the future.',
                rating: 8.2,
                duration: 138,
                year: 2021,
                size: '1.9 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-echoes-time',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'The Last Guardian',
                slug: 'the-last-guardian',
                bgposter: 'https://example.com/images/last-guardian.jpg',
                description: 'An ancient warrior is awakened in modern times to fight a great evil that threatens the world.',
                rating: 7.5,
                duration: 147,
                year: 2020,
                size: '1.6 GB',
                quality: '1080p',
                youtubelink: 'https://youtube.com/example-last-guardian',

                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            },
            {
                title: 'The Infinite War',
                slug: 'the-infinite-war',
                bgposter: 'https://example.com/images/infinite-war.jpg',
                description: 'In a future where war never ends, a group of soldiers discovers the true cause behind the conflict.',
                rating: 8.4,
                duration: 155,
                year: 2024,
                size: '2.5 GB',
                quality: '4K',
                youtubelink: 'https://youtube.com/example-infinite-war',
                status: 'Available',
                languageId: english.id,
                subtitleId: spanishSubtitle.id,
                genreId: crimeGenre.id,
                categoryId: dramaCategory.id,
                downloadlinkId: downloadLink2.id,
            }
        ]
    });
    console.log('Seeded Languages, Subtitles, Categories, Genres, DownloadLinks');
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
