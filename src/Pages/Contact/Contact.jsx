import React from 'react';
import { motion } from 'framer-motion';


export const Contact = () => {
  return (
    <>
   
      <h1 className="pageTitle">Let's Connect</h1>

   
      <div className="contact-page">

        {/* Left Content */}
        <motion.div
          className="left-content"
          initial={{ opacity: 0, y: 25 }} // Initial animation state
          whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
          transition={{ duration: 1, delay: 0.8 }} // Transition animation properties
        >
          {/* Name Section */}
          <div className='Names'>
            <h1 className='name'>Boitshepo</h1><br></br>
            <h1 className='surname'>Mashamaite</h1>
          </div>

          {/* Socials Section */}
          <div className="social-icons">
          
            <a href="https://github.com/codycubes" target="_blank" rel="noopener noreferrer">
              <img src='/GitHub.png' alt='Github' />
            </a>

            <a href="https://www.instagram.com/b_tshepomash/" target="_blank" rel="noopener noreferrer">
              <img src='/Instagram.png' alt='Instagram' />
            </a>

            <a href="https://www.linkedin.com/in/boitshepo-mashamaite/" target="_blank" rel="noopener noreferrer">
              <img src='/LinkedIn.png' alt='LinkedIn' />
            </a>

            <a href="https://twitter.com/CodyCubes" target="_blank" rel="noopener noreferrer">
              <img src='/TwitterX.png' alt='Twitter' />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="right-content"
          initial={{ opacity: 0, y: 25 }} // Initial animation state
          whileInView={{ opacity: 1, y: 0 }} // Animation state when in view
          transition={{ duration: 1, delay: 1.3 }} // Transition animation properties
        >
          {/* Contact Information */}

          <div className='contact-link'>
            <h2 className='title'>Email:</h2>
            <div className='email'>
              <a href="mailto:boitshepomashamaite777@gmail.com"> boitshepomashamaite777@gmail.com</a>
            </div>
          </div>
          <hr className='line'></hr>


          <div className='contact-link'>
            <h2 className='title'>Phone:</h2>
            <div className='phone'>
              <a href="tel:+27681602821">+27 68 160 2821</a>
            </div>
          </div>
          <hr className='line'></hr>
        </motion.div>
      </div>
    </>
  );
};
