import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setIsLoaded(true);
        };
    }, [src]);

    return (
        <div className={`relative ${className}`}>
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    {...props}
                />
            )}
        </div>
    );
};

export default LazyImage; 