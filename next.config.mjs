/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'image.tmdb.org',
                hostname: 'example.com',
            },
        ],
    },
};

export default nextConfig;
