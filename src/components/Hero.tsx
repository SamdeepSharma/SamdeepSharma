'use client'
import React from 'react'
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWords } from './ui/flip-words';
import { useState, useEffect } from 'react';

const words = [
  {
    text: "Welcome",
  },
  {
    text: "to",
  },
  {
    text: "Samdeep",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Sharma's",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Portfolio.",
  },
];

const Hero = () => {
  const flipwords = ["UI/UX Designer", "Software Engineer", "Web Developer", "Pre-final Year Student"];

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        </div>
        <div className={`text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ${showText?'':'hidden'}`}>
        I&apos;m a 
        <FlipWords words={flipwords} /> <br />
      </div>
      </Vortex>
    </div>
  )
}

export default Hero