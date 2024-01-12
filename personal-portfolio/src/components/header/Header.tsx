import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    const variants = {
        initial: { opacity: 0, y: -50, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.5, ease: 'easeOut' } },
    };

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
    }, [controls, inView]);

    return (
        <div className="h-screen flex items-center justify-center">
            <motion.img
                ref={ref}
                initial="initial"
                animate={controls}
                variants={variants}
                src="/TitleText.png"
                alt="Background"
                className="object-contain object-center w-full h-auto"
            />
        </div>
    );
};

export default Header;
