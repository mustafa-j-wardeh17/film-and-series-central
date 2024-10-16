'use client';
import React, { useState, useEffect } from 'react';

const WelcomeAnimation = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video');
        const animationDuration = 3000;

        video?.addEventListener('ended', () => {
            setFadeOut(true); // Trigger fade-out when the video ends
            setTimeout(() => {
                setFadeOut(false); // Reset fadeOut after animationDuration
            }, animationDuration);
        });

        // Cleanup event listener
        return () => {
            video?.removeEventListener('ended', () => setFadeOut(true));
        };
    }, []);

    return (
        <div className='relative flex items-center justify-center min-h-screen w-full z-[-1] mt-[-58px]'>
            <video
                autoPlay
                muted
                loop
                id='video'
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
            >
                <source src="/vedio/welcomevedio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-[1] bg-[rgba(0, 0, 0, 0.5)]'>
                <div className='sm:text-[40px] 4xs:text-[30px] text-[25px] font-bold text-white border-b-[2px]'>
                    Welcome to <span className='text-red-500'>Makmovies</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeAnimation;
