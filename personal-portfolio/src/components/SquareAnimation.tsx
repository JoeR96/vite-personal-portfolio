import React, { useEffect, useState, useRef } from 'react';
import './SquareAnimation.css';

const SquareAnimation = () => {
    const containerRef = useRef(null);
    const [animationProgress, setAnimationProgress] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [finalLeftPosition, setFinalLeftPosition] = useState('50%');
    const [finalRightPosition, setFinalRightPosition] = useState('50%');

    const shouldLockSquares = () => {
        if (!containerRef.current) return false;

        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the vertical center of the component
        const containerCenter = containerRect.top + containerRect.height / 2;

        // Determine if the animation has reached the endpoint
        return windowHeight / 2 >= containerCenter && containerCenter >= 0;
    };

    const handleScroll = () => {
        const lockSquares = shouldLockSquares();
        setIsFixed(lockSquares);

        if (!lockSquares) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate the distance from the center of the viewport
            const distanceFromCenter = Math.abs(windowHeight / 2 - (containerRect.top + containerRect.height / 2));
            const progress = 1 - Math.min(distanceFromCenter / (windowHeight / 2), 1);
            setAnimationProgress(progress);

            // Update final positions
            setFinalLeftPosition((50 - 50 * progress) + '%');
            setFinalRightPosition((50 + 50 * progress) + '%');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const squareStyle = isFixed
        ? { position: 'fixed', top: '50%', left: finalLeftPosition, transform: 'translate(-50%, -50%)' }
        : { position: 'absolute', top: '50%', left: finalLeftPosition, transform: 'translate(-50%, -50%)' };

    // Dummy content boxes
    const dummyContent = [];
    for (let i = 0; i < 5; i++) {
        dummyContent.push(<div key={i} className="dummy-content">Content Box {i + 1}</div>);
    }

    return (
        <div className="container" ref={containerRef}>
            <div className="square left" style={squareStyle} />
            <div className="square right" style={{ ...squareStyle, left: isFixed ? finalRightPosition : (50 + 50 * animationProgress) + '%' }} />
            {/* Dummy content positioned between squares */}
            <div className="content-container">
                {dummyContent}
            </div>
        </div>
    );
};

export default SquareAnimation;
