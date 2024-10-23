import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 relative">
            {/* Background 404 text */}
            <h1 className="text-[180px] sm:text-[220px] lg:text-[300px] font-bold text-gray-700 opacity-10 absolute select-none">
                404
            </h1>

            {/* Main content */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">Page Not Found</h1>
                <p className="text-lg sm:text-xl mb-8">
                    Sorry, the page you're looking for doesn't exist.
                </p>
                <a
                    className="inline-block px-6 py-3 bg-red-600 text-base sm:text-lg font-semibold rounded-md hover:bg-red-700 transition duration-300"
                    href="/"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
