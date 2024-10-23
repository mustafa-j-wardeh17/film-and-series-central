'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Loader from './Loader'

const ImageWithLoader = ({ src, alt }: { src: string, alt: string }) => {
    const [loader, setloader] = useState(true)

    return (
        <>
            {
                loader
                && (
                    <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
                        <Loader /> {/* Show loader while loading */}
                    </div>
                )
            }
            <Image
                src={src}
                alt={alt}
                fill
                className='object-fill'
                onLoad={() => setloader(false)}
            />
        </>
    )
}

export default ImageWithLoader