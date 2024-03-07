// Import necessary libraries and components
import { useRef, useEffect, useState, Suspense } from 'react';
import { CONTENTS } from '../../dummyData'; //CONTENTS is an array of media content
import { Loader } from '../../Components/Loader/Loader'; // Loader component for displaying loading state
import { motion } from 'framer-motion'; // Framer Motion for animations

// Define the Home component
export const Home = () => {

    // Creating a reference for the scroll container
    const scrollContainerRef = useRef(null);

    // useEffect hook to handle scroll event
    useEffect(() => {

        // Access the scroll container element
        const scrollContainer = scrollContainerRef.current;

        // Function to handle wheel event and scroll horizontally
        const handleWheel = (evt) => {
            evt.preventDefault(); // Prevent default scrolling behavior
            scrollContainer.scrollLeft += evt.deltaY; // Scroll horizontally based on deltaY
        };

        // Adding an event listener for wheel event
        scrollContainer.addEventListener("wheel", handleWheel);

        // Clean up function to remove event listener when component unmounts
        return () => {
            scrollContainer.removeEventListener("wheel", handleWheel);
        };
    }, []); // Empty array so that the effect runs only once after the initial render


    return (
        <>
        <Suspense fallback={<Loader />}> {/* Suspense component for handling loading state */}


           <div className="homeContainer"> 
              <motion.div className="media-container" ref={scrollContainerRef} // Container for media content with Framer Motion animation
                  initial={{opacity: 0, y: 25,}} // Initial animation state
                  whileInView={{opacity: 1, y: 0,}} // Animation state when in view
                  transition={{duration: 1, delay: 1.3,}} // Transition animation properties
                  >

                 {/* Mapping over the CONTENTS array and render media cards */}
                  {CONTENTS.map((c) => (
                  <div className="media-card" key={c.id} > {/* Media card container */}
                      <video src={c.cover} // Video element with source from content data
                        loop // Loop the video
                        onMouseOver={event => event.target.play()} // Play video on mouse hover
                        onMouseOut={event => event.target.pause()} // Pause video on mouse out
                        muted // Mute the video
                  />

                  <div className='description'> 
                      <h1>{c.title}</h1> {/* Media title */}
                      <h2>{c.brand}</h2> {/* Media brand */}
                  </div>
                  
            </div>
            ))}
            </motion.div>
          </div>
            </Suspense>
        </>
    );
};
