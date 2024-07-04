"use client";
import Image from "next/image";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Hero from "@/components/Hero"; 4
import { TracingBeam } from "@/components/ui/tracing-beam";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen antialiased relative overflow-hidden">
        <Hero />
        <About/>
      {/* <TracingBeam className="z-10">
      </TracingBeam> */}
    </div>
  );
}