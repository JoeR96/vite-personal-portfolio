import React from 'react';

interface DescriptionProps {
  text: string;
  color: string;
  size: number;
  weight: string;
}

const Description: React.FC<DescriptionProps> = ({ text, color, size, weight }) => {
  const textWeight = `font-${weight}`;

  return (
    <p className={`${textWeight} tracking-wide leading-relaxed`}
       style={{ fontSize: `${size}px`, marginBottom: '4px', color }}>
      {text}
    </p>
  );
};

export default Description;
