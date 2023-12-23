import React from 'react';

interface DescriptionProps {
    text: string;
    color: string;
    size: number;
    weight: string;
    imgSrc?: string; // Make imgSrc optional
    imageOnLeft?: boolean; // Make imageOnLeft optional
    hasImage?: boolean; // Add optional hasImage prop
}

const Description: React.FC<DescriptionProps> = ({
                                                     text,
                                                     color,
                                                     size,
                                                     weight,
                                                     imgSrc,
                                                     imageOnLeft,
                                                     hasImage = true, // Set default value for hasImage prop
                                                 }) => {
    const textWeight = `font-${weight}`;

    return (
        <div className="flex items-center">
            {hasImage && imageOnLeft && (
                <img src={imgSrc} alt="description" className="w-60 h-60 mr-4"/>
            )}
            <p
                className={`${textWeight} tracking-wide leading-relaxed`}
                style={{fontSize: `${size}px`, marginBottom: '4px', color}}
            >
                {text}
            </p>
            {hasImage && !imageOnLeft && (
                <img src={imgSrc} alt="description" className="w-60 h-60 ml-4"/>
            )}
        </div>
    );
};

export default Description;
