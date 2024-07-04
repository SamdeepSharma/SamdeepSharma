import React from 'react'
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import AOS from 'aos';
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const About = () => {
     useEffect(() => {
          AOS.init({
            duration: 1000, // Duration of the animation in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
          });
        }, []);
  return (
     <LampContainer className='min-h-screen'>
     <motion.h1
       initial={{ opacity: 0.5, y: 100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
         delay: 0.3,
         duration: 0.8,
         ease: "easeInOut",
       }}
       className="bg-gradient-to-br from-cyan-200 to-cyan-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
     >
       About me
     </motion.h1>

   </LampContainer>
  )
}

export default About
