import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedSquares = () => {
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const ref = useRef(null);
    const [isCentered, setIsCentered] = useState(false);

    const checkIfCentered = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const isCubeTopPastCenter = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

            setIsCentered(isCubeTopPastCenter);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkIfCentered);

        return () => {
            window.removeEventListener('scroll', checkIfCentered);
        };
    }, []);

    useEffect(() => {
        if (isCentered) {
            controlsLeft.start({ x: '-100%' });
            controlsRight.start({ x: '100%' });
        }
    }, [isCentered, controlsLeft, controlsRight]);

    // Generate dummy content
    const dummyContent = [];
    for (let i = 0; i < 5; i++) {
        dummyContent.push(
            <div key={i} className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Section {i + 1}</h2>
                <p className="text-gray-600">This is some placeholder content for section {i + 1}. Scroll to see more.</p>
            </div>
        );
    }

    return (
        <div className="relative" ref={ref}>
            <motion.div
                className={`absolute top-1/2 left-0 bg-orange-500 w-24 h-24 transform -translate-x-12 -translate-y-12 ${isCentered ? 'fixed' : ''}`}
                animate={controlsLeft}
            />
            <motion.div
                className={`absolute top-1/2 right-0 bg-orange-500 w-24 h-24 transform translate-x-12 -translate-y-12 ${isCentered ? 'fixed' : ''}`}
                animate={controlsRight}
            />
            <div className="pt-96">
                {dummyContent}
            </div>
        </div>
    );
};

export default AnimatedSquares;
