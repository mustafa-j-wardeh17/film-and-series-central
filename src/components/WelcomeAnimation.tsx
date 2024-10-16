import React, { useState, useEffect } from 'react';

const WelcomeAnimation = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video') as HTMLVideoElement;
        const animationDuration = 1000; 

        if (video) {
            video.addEventListener('ended', () => {
                setFadeOut(true); 
                setTimeout(() => {
                    onAnimationEnd(); 
                }, animationDuration); 
            });

            return () => {
                video.removeEventListener('ended', () => {
                    setFadeOut(true);
                });
            };
        }
    }, [onAnimationEnd]);

    return (
        <div
            className={`relative flex items-center justify-center min-h-screen w-full z-[-1] mt-[-58px] transition-opacity duration-1000 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <video
                autoPlay
                muted
                id='video'
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/vedio/welcomevedio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[1] bg-[rgba(0, 0, 0, 0.5)]">
                <div className="sm:text-[40px] 4xs:text-[30px] text-[25px] font-bold text-white border-b-[2px]">
                    Welcome to <span className="text-red-500">Makmovies</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeAnimation;
