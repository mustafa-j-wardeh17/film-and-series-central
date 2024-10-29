import React, { useState, useEffect } from 'react';

const WelcomeAnimation = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video') as HTMLVideoElement;
        const animationDuration = 1000;

        const handleVideoEnd = () => {
            setFadeOut(true);
            setTimeout(() => {
                onAnimationEnd();
            }, animationDuration);
        };

        if (video) {
            video.addEventListener('ended', handleVideoEnd);

            return () => {
                video.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, [onAnimationEnd]);

    return (
        <div
            className={`flex items-center justify-center h-[102vh] w-full mt-[-58px] transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <video
                autoPlay
                muted={true}
                playsInline 
                preload='auto'
                id='video'
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/vedio/welcomevedio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[1] bg-[rgba(0, 0, 0, 0.5)]">
                <div className="sm:text-[40px] 4xs:text-[30px] text-[25px] font-bold text-white border-b-[2px]">
                    Welcome to <span className="text-red-500">Cinema Center</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeAnimation;
