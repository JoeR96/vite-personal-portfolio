import React from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  height?: string;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt, height = 'h-1/3', className }) => {
  return <img src={src} alt={alt} className={`${height} ${className}`} />;
};

export default BackgroundImage;
