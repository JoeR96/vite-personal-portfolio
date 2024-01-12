import React, { useEffect, useState } from 'react';
import './SquareAnimation.css'; // Import the CSS file

const SquareAnimation = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const scrollHeight = document.body.scrollHeight;

        // Calculate the scroll percentage
        const percentage = Math.min(100, Math.max(0, (scrollY / (scrollHeight - windowHeight)) * 100));
        
        // Set the percentage for the animation
        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div className="square left" style={{ transform: `translateX(${(-50 + 50 * (scrollPercentage / 100))}%)` }} />
            <div className="square right" style={{ transform: `translateX(${(50 - 50 * (scrollPercentage / 100))}%)` }} />
        </div>
    );
};

export default SquareAnimation;
