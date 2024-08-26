'use client'
import React from 'react'
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWords } from './ui/flip-words';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { words } from "@/constants"
import { flipwords } from "@/constants"

const Hero = () => {

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
        <Image alt='' src={"/mee.png"} height={200} width={200} className='rounded-full shadow-emerald-600 shadow-card background'></Image>
        <div className=' flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <TypewriterEffectSmooth words={words} />
            <div className={`text-xl md:text-2xl lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ${showText ? '' : 'hidden'}`}>
              I&apos;m a
              <FlipWords words={flipwords} /> <br />
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  )
}

export default Hero