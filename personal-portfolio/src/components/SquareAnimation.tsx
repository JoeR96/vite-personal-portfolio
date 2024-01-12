import React, { useEffect, useState, useRef } from 'react';
import './SquareAnimation.css';

const SquareAnimation = () => {
    const containerRef = useRef(null);
    const [animationProgress, setAnimationProgress] = useState(0);

    const handleScroll = () => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;

        // Calculate the vertical center of the component
        const containerCenter = containerTop + containerHeight / 2;
        // Calculate the distance from the center of the viewport to the center of the component
        const distanceFromCenter = Math.abs(windowHeight / 2 - containerCenter);

        // Determine the animation progress based on how close the center of the component is to the center of the viewport
        let progress = 1 - Math.min(distanceFromCenter / (windowHeight / 2), 1);
        setAnimationProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate the position of the squares based on the animation progress
    const squarePosition = (50 - 50 * animationProgress) + '%';

    return (
        <div className="container" ref={containerRef}>
            <div className="square left" style={{ left: squarePosition }} />
            <div className="square right" style={{ right: squarePosition }} />
        </div>
    );
};

export default SquareAnimation;
