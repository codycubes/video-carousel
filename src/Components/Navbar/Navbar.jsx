import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 

const Navbar = () => {

  // Declaring a state variable isOpen initialized to false using useState hook
  const [isOpen, setIsOpen] = useState(false); 

  // Function to open the menu on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <nav className={`navbar ${isOpen ? 'open' : ''}`}> {/* Navbar container with a conditional class 'open' based on isOpen state */}
      <div className="navbar-container"> {/* Container for navbar contents */}

        {/* Animated brand logo */}
        <motion.div className="navbar-brand"
          initial={{opacity: 0, x: -55,}} // Initial animation properties for brand logo
          whileInView={{opacity: 1, x: 0,}} // Animation properties when logo is in view
          transition={{duration: 1, delay: 0.6,}} // Animation transition duration and delay
        >
          <img src='/aglet-logo.svg' /> {/* Image tag for the brand logo */}
        </motion.div>

        {/* Animated navbar links */}
        <motion.div className="navbar-links"
          initial={{opacity: 0, y: 25,}} // Initial animation properties for navbar links
          whileInView={{opacity: 1, y: 0,}} // Animation properties when links are in view
          transition={{duration: 1, delay: 0.8,}} // Animation transition duration and delay
        >
          <Link to="/"> Home </Link> {/* Link to Home page */}
          <Link to="/Contact"> Contact </Link> {/* Link to Contact page */}
        </motion.div>

        {/* Hamburger menu icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {/* Three lines for the hamburger menu icon */}
          <div className={`line ${isOpen ? 'open' : ''}`}></div> 
          <div className={`line ${isOpen ? 'open' : ''}`}></div> 
          <div className={`line ${isOpen ? 'open' : ''}`}></div> 
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar; 
