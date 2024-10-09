'use client'
import React, { useState, useEffect } from 'react';


const WelcomeAnimation = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video'); // Get the video element
        const animationDuration = 3000; // Duration of the animation in milliseconds

        video?.addEventListener('ended', () => {
            setFadeOut(true); // Trigger fade-out animation when video ends
            setTimeout(() => {
                // Wait for the fade-out animation to complete
                setFadeOut(false);
            }, animationDuration);
        });
    }, []);

    return (
        <div className='relative flex items-center justify-center min-h-screen w-full z-[-1] mt-[-58px]'>
            <video
                autoPlay
                muted
                loop
                id='video'
                className='absolute top-0 left-0 w-full h-full object-cover '
            >
                <source src="/vedio/welcomevedio.mp4" type="video/mp4" />
                {/* You can also add other video formats here */}
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center self-center z-[1] bg-[rgba(0, 0, 0, 0.5)] '>
                <div className='text-[40px] font-bold text-white border-b-[2px]'>Welcome to <span className='text-red-500'>Makmovies</span></div>
            </div>
        </div>
    );
};

export default WelcomeAnimation;
