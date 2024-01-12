import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import ScrollingSquares from "./components/scrolling-squares/ScrollingSquares";
import Projects from "./components/projects/Projects";
import AnimatedSqaures from "./components/AnimatedSqaures";
import SquareAnimation from './components/SquareAnimation';

function App() {
    return (
        <div className="w-3/5 mx-auto">

<div className="flex flex-col">
                <Header />
                <SquareAnimation />
                <Header />

s


                <Contact />

        </div>
        </div>

    );
}

export default App;
