import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from './Card';

interface ProjectsProps {}

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface ProjectDescriptionProps {
  title: string;
  description: string;
  className?: string;
}
const hoverAnimation = {
  initial: { opacity: 1, scale: 1, zIndex: 0 },
  hover: { opacity: 1, scale: 1.05, zIndex: 10, translateZ: 50, transition: { duration: 0.5 } },
};

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={hoverAnimation}
      className={`object-cover w-1/3 h-1/3 p-2 rounded-lg ${className}`}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={hoverAnimation}
      className={`bg-zinc-900 rounded-lg p-6 ${className}`}
    >
      <h2 className="text-4xl text-white font-bold mb-6">{title}</h2>
      <p className="text-xl text-white font-semibold">{description}</p>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="rounded-lg mx-auto w-2/3 h-2/3 flex flex-col justify-between gap-y-4"
      initial="initial"
      animate={controls}
      variants={variants}
    >
      <div className="flex gap-x-4">
        <ProjectDescription
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
          className="flex-1"
        />
        <ProjectImage src="/0.png" alt="Project 2" />
      </div>
      <ProjectDescription
        title="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
      />
      <div className="flex gap-x-4">
        <ProjectImage src="/1.png" alt="Project 5" />
        <ProjectDescription
          title="Project 5"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
          className="flex-1"
        />
      </div>
      <div className="rounded-lg bg-gray-800 mx-auto w-2/3 h-2/3 flex flex-col justify-between gap-y-4">
      </div>
      <div className="flex gap-x-4">
        <ProjectDescription
          title="Project 6"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
          className="flex-1"
        />
        <ProjectDescription
          title="Project 7"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
          className="flex-1"
        />
      </div>
      <div className='p-8'>
      <Card></Card>

      </div>
    </motion.div>
  );
  
};

export default Projects;
