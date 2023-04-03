import React from 'react';
import { motion } from 'framer-motion';

const Card: React.FC<{
  title: string;
  logoSrc: string;
  bottomTitle: string;
  bulletPoints: string[];
}> = ({ title, logoSrc, bottomTitle, bulletPoints }) => {
  const hoverAnimation = {
    initial: { opacity: 1, scale: 1, zIndex: 0 },
    hover: { opacity: 1, scale: 1.05, zIndex: 10, translateZ: 50, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-zinc-900 rounded-lg p-4 shadow-md h-100 p-32"
      initial="initial"
      whileHover="hover"
      variants={hoverAnimation}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <img className="w-32 h-32 mx-auto mb-4" src={logoSrc} alt={title} />
      <h4 className="text-lg font-bold mb-2">{bottomTitle}</h4>
    </motion.div>
  );
};

const CardContainer: React.FC = () => {
  const cards = [
    {
      title: 'Card 1',
      logoSrc: 'https://via.placeholder.com/100x100.png?text=Logo',
      bottomTitle: 'Title 1',
      bulletPoints: ['Point 1', 'Point 2', 'Point 3'],
    },
    {
      title: 'Card 2',
      logoSrc: 'https://via.placeholder.com/100x100.png?text=Logo',
      bottomTitle: 'Title 2',
      bulletPoints: ['Point 4', 'Point 5', 'Point 6'],
    },
    {
      title: 'Card 3',
      logoSrc: 'https://via.placeholder.com/100x100.png?text=Logo',
      bottomTitle: 'Title 3',
      bulletPoints: ['Point 7', 'Point 8', 'Point 9'],
    },
  ];

  return (
    <div className="flex ">
      <div className="w-full grid grid-cols-3 gap-12 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            logoSrc={card.logoSrc}
            bottomTitle={card.bottomTitle}
            bulletPoints={card.bulletPoints}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
