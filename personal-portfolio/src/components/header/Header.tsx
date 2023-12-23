import React, { useEffect } from 'react';
import BackgroundImage from './BackgroundImage';
import ImageContainer from './ImageContainer';
import SectionTitle from './SectionTitle';
import Description from './Description';
import ContactButton from './ContactButton';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const variants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  
  return (
    <div className="h-screen flex-col items-center">
      <ImageContainer>
        <BackgroundImage
          src="https://source.unsplash.com/random?software"
          alt="Background"
          className="object-contain object-center w-full h-full"
        />
      </ImageContainer>
      <motion.div
        ref={ref}
        className="h-2/3 flex flex-col justify-center items-center pt-8"
        initial="initial"
        animate={controls}
        variants={variants}
      >
        <div className="p-6">
        <SectionTitle text="Joe Richardson" size={24} weight="bold" color="white" />
</div>
<div className="p-6">
<SectionTitle text="Software Engineer" size={48} weight="bold" color="gradient" />
</div>

        <div className="w-3/4 mt-4">
          <Description
            text="AWS Fullstack .NET Engineer with experience in C# and JavaScript. Passionate about architectural and design patterns, object-oriented approaches, and developing testable solutions. A schwazzy dude who loves to push the boundaries of technology."
            color="#f1f5f9"
            size={20}
            weight="bold"
            hasImage={false}
          />
        </div>
      </motion.div>
    </div>
  );
  
};

export default Header;
