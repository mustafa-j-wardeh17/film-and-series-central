import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            {/* Loading Spinner */}
            <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-6 h-6 bg-red-600 rounded-full transition duration-150 animate-bounce"></div>
                <div className="w-6 h-6 bg-red-600 rounded-full transition duration-150 animate-bounce delay-500"></div>
                <div className="w-6 h-6 bg-red-600 rounded-full transition duration-150 animate-bounce delay-1000"></div>
            </div>

            {/* Loading Text */}
            <h1 className="text-2xl sm:text-3xl font-semibold">Loading Cinema Center...</h1>
            <p className="text-lg sm:text-xl text-gray-400 mt-4">
                Please wait while we prepare your movie experience!
            </p>
        </div>
    );
};

export default Loading;
