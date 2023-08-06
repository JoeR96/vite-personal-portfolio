import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import Card from './Card';
import UnityGame from '../unityComponent/Unity';

interface ProjectsProps {
}

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
    initial: {opacity: 1, scale: 1, zIndex: 0},
    hover: {opacity: 1, scale: 1.05, zIndex: 10, translateZ: 50, transition: {duration: 0.5}},
};
const variants = {
    initial: {opacity: 0, y: -100},
    animate: {opacity: 1, y: 0, transition: {duration: 1, ease: 'easeOut'}},
};
const withParentAnimation = (Component: React.FC<any>) => {
    return (props: any) => {
        const controls = useAnimation();
        const {ref, inView} = useInView({
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
                className={props.className} // Pass the className prop here
            >
                <Component {...props} />
            </motion.div>
        );
    };
};

const ProjectImage: React.FC<ProjectImageProps> = ({src, alt}) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={hoverAnimation}
            className="rounded-lg overflow-hidden"
        >
            <img src={src} alt={alt} className="object-cover w-full h-full p-1 rounded-lg"/>
        </motion.div>
    );
};


interface ProjectDescriptionProps {
    title: string;
    description: string;
    imgSrc: string;
    imageOnLeft: boolean;
    className?: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
                                                                   title,
                                                                   description,
                                                                   imgSrc,
                                                                   imageOnLeft,
                                                                   className,
                                                               }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={hoverAnimation}
            className={`${className} bg-zinc-900 rounded-lg p-6 flex-grow h-full flex items-center`}
        >
            {imageOnLeft && (
                <img src={imgSrc} alt="Project" className="w-60 h-60 mr-4 rounded-lg"/>
            )}
            <div>
                <h2 className="text-4xl text-white font-bold mb-6">{title}</h2>
                <p className="text-xl text-white font-semibold">{description}</p>
            </div>
            {!imageOnLeft && (
                <img src={imgSrc} alt="Project" className="w-60 h-60 ml-4 rounded-lg"/>
            )}
        </motion.div>
    );
};


const Projects: React.FC<ProjectsProps> = ({}) => {
    const controls = useAnimation();
    const {ref, inView} = useInView({
        threshold: 0.1,
    });

    const variants = {
        initial: {opacity: 0, y: -100},
        animate: {opacity: 1, y: 0, transition: {duration: 1, ease: 'easeOut'}},
    };

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
    }, [controls, inView]);
    const AnimatedProjectImage = withParentAnimation(ProjectImage);
    const AnimatedProjectDescription = withParentAnimation(ProjectDescription);

    return (
        <div className="container mx-auto px-4">
            <motion.div
                ref={ref}
                className="rounded-lg flex flex-col justify-between gap-y-4"
                initial="initial"
                animate={controls}
                variants={variants}
            >
                <div className="flex flex-wrap gap-x-4 items-stretch">
                    <AnimatedProjectDescription
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
                        className="flex-1 w-full m"
                        imgSrc="/Barbell.png"
                        imageOnLeft={false}
                    />
                    <div className="w-1/3 md:w-1/4 h-full">
                        <AnimatedProjectImage className="h-full" src="/0.png" alt="Project 2"/>
                    </div>


                </div>
                <div className="flex flex-wrap gap-x-4 justify-center items-center">
                    <UnityGame />
                </div>

                <AnimatedProjectDescription
                    title="Project 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
                    className="w-full"
                    imgSrc="/Barbell.png"
                    imageOnLeft={false}
                    hasImage={false}
                />

                <div className="flex flex-wrap gap-x-4">

                    <div className="w-1/3 md:w-1/4 h-full">
                        <AnimatedProjectImage className="h-full" src="/0.png" alt="Project 2"/>
                    </div>
                    <AnimatedProjectDescription
                        title="Project 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris ac bibendum luctus. Maecenas vel arcu et nibh volutpat dictum. Vivamus feugiat risus vel tristique lobortis. Praesent vel malesuada lorem."
                        className="flex-1 w-full m"
                        imgSrc="/Guitar.png"
                        imageOnLeft={true}
                    />
                </div>
            </motion.div>
        </div>
    );

};

export default Projects;
