import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-3/5 mx-auto">
      <div className="flex flex-col">
        <Header />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>
            <Projects />
          </motion.div>
        </motion.div>
      </div>
      <Contact></Contact>
    </div>
  );
}

export default App;
