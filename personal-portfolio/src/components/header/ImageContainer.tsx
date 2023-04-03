import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-1/3 relative">
      {children}
    </div>
  );
};

export default ImageContainer;
