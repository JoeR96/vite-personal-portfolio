import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const hoverAnimation = {
  initial: { transform: 'rotateY(0deg)', zIndex: 0 },
  hover: { transform: 'rotateY(180deg)', zIndex: 10, transition: { duration: 0.5 } },
};

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};
const Card: React.FC<{
  title: string;
  logoSrc: string;
  bottomTitle: string;
  bulletPoints: string[];
}> = ({ title, logoSrc, bottomTitle, bulletPoints }) => {
  return (
    <motion.div
      className="bg-zinc-900 rounded-lg p-4 shadow-md h-100 p-32 relative"
      initial="initial"
      whileHover="hover"
      variants={hoverAnimation}
    >
      <div className="card-face absolute w-full h-full top-0 backface-hidden">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <img className="w-32 h-32 mx-auto mb-4" src={logoSrc} alt={title} />
        <h4 className="text-lg font-bold mb-2">{bottomTitle}</h4>
      </div>
      <div className="card-face absolute w-full h-full top-0 backface-hidden transform rotate-y-180">
        <ul>
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-white text-lg mb-2">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const withParentAnimation = (Component: React.FC<any>) => {
  return (props: any) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start('animate');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={variants}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

const AnimatedCard = withParentAnimation(Card);

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
          <AnimatedCard
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
