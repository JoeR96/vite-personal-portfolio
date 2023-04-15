import React from 'react';

interface SectionTitleProps {
  text: string;
  size: number;
  weight: string;
  color: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, size, weight, color }) => {
  const textColor = color === 'gradient'
    ? 'bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500'
    : `text-${color}`;

  const textWeight = `font-${weight}`;

  return (
    <h1 className={`${textWeight} ${textColor} tracking-wide leading-tight`}
        style={{ fontSize: `${size}px`, marginBottom: '4px' }}>
      {text}
    </h1>
  );
};


export default SectionTitle;
