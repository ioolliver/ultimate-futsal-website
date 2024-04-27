import { Header } from "@/components/header";

import WhiteLogo from "@/assets/white_logo.png";
import UFLogoHQ from "@/assets/uf_logo_hq.png";

import Image from "next/image";
import Link from "next/link";
import { UltimateGradient } from "@/components/ultimate-gradient";
import React from "react";


function UltimateWhiteLogo({ ...props } : { className? : string }) {
  return (
    <div {...props}>
      <Image src={WhiteLogo} alt="Ultimate Futsal Logo" />
    </div>
  )
}

function LandingSection({ children, className } : { children : React.ReactNode, className?: string }) {
  return (
    <section className={`py-8 w-full min-h-[80vh] flex flex-col justify-center items-center text-center gap-8 ${className || ""}`}>
      {children}
    </section>
  )
}

function LandingSectionTitle({ children, bigger } : { children: React.ReactNode, bigger?: boolean}) {
  return (  
    <div className="">
      <h1 className={
        (bigger ? "text-[3rem] md:text-[4rem]" 
        : "text-[2rem] md:text-[3rem]") + " font-extrabold leading-[4.5rem]"}>
          {children}
      </h1>
    </div>
  )
}

function WelcomeSection() {
  return (
    <LandingSection>
        <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
          <UltimateWhiteLogo  />
          <LandingSectionTitle bigger>WELCOME TO <br /> <UltimateGradient /> FUTSAL</LandingSectionTitle>
          <UltimateWhiteLogo className="hidden md:block" />
        </div>
        <div className="text-4xl bg-uf-primary px-8 py-2 rounded-full transition-transform hover:scale-110">
          <Link className="font-bold" href={"/"}>PLAY NOW</Link>
        </div>
      </LandingSection>
  )
}

function WhatIsSection() {
  return (
    <LandingSection className="bg-uf-background-2">
        <LandingSectionTitle>WHAT IS <UltimateGradient /> FUTSAL?</LandingSectionTitle>
        <div className="flex justify-center items-center gap-24 p-4 flex-col md:flex-row">
          <div className="w-4/5 md:w-1/4">
            <Image src={UFLogoHQ} alt="Ultimate Futsal Logo" />
          </div>
          <div className="border-2 w-4/5 md:w-1/3 text-xl md:text-lg p-4 rounded-lg border-gray-800">
            <p className="text-justify">Welcome to Ultimate Futsal! The ultimate multiplayer 2D soccer game playable directly in your browser!
Compete in thrilling 4vs4 matches. Team up with your friends or take on challengers from across the globe. Every goal matters! Play now! Collect coins and spend them in our virtual shop!</p>
          </div>
        </div>
      </LandingSection>
  )
}

function StepBox({ step, text, color } : { step: number, text: string, color: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={color + " w-2/5 rounded-t-full px-4 text-xl"}>
        <p>Step {step}</p>
      </div>
      <div className="border p-4 rounded-3xl border-uf-background-3 py-8 max-w-80 text-xl">
        <p>{text}</p>
      </div>
    </div>
  )
}

function HowItWorksSection() {
  return (
    <LandingSection>
      <LandingSectionTitle>HOW DOES <UltimateGradient>IT</UltimateGradient> WORK?</LandingSectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <StepBox step={1} text="Join our Discord to receive your access token" color="bg-uf-primary" />
        <StepBox step={2} text="Join our Haxball Room using your Discord username" color="bg-uf-secondary-2" />
        <StepBox step={3} text="Paste !active (token) in the Haxball Chat" color="bg-uf-secondary" />
        <StepBox step={4} text="You are done! Have fun playing on Ultimate Futsal!" color="bg-uf-accent" />
      </div>
    </LandingSection>
  )
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-uf-background">
      <Header />
      <WelcomeSection />
      <WhatIsSection />
      <HowItWorksSection />
    </main>
  );
}
