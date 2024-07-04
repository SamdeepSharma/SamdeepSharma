"use client";
import Image from "next/image";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="min-h-screen antialiased relative h-screen overflow-hidden">
      <Hero />
    </div>
  );
}