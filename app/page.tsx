import { Header } from "@/components/header";

import WhiteLogo from "@/assets/white_logo.png";
import UFLogoHQ from "@/assets/uf_logo_hq.png";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { UltimateGradient } from "@/components/ultimate-gradient";


function UltimateWhiteLogo({ ...props } : { className? : string }) {
  return (
    <div {...props}>
      <Image src={WhiteLogo} alt="Ultimate Futsal Logo" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-uf-background">
      <Header />
      <section className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center gap-8">
        <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
          <UltimateWhiteLogo  />
          <div className="">
            <h1 className="text-[2rem] font-extrabold md:text-[4rem] md:leading-[4.5rem]">
            WELCOME TO <br /> <UltimateGradient /> FUTSAL</h1>  
          </div>
          <UltimateWhiteLogo className="hidden md:block" />
        </div>
        <div className="text-4xl bg-uf-primary px-8 py-2 rounded-full transition-transform hover:scale-110">
          <Link className="font-bold" href={"/"}>PLAY NOW</Link>
        </div>
      </section>
      <section className="w-full min-h-[80vh] flex flex-col items-center text-center gap-8 bg-uf-background-2 pt-4 px-1">
        <div className="">
          <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold leading-[4.5rem]">WHAT IS <UltimateGradient /> FUTSAL?</h1>
        </div>
        <div className="flex justify-center items-center gap-24 p-4 flex-col md:flex-row">
          <div className="w-4/5 md:w-1/4">
            <Image src={UFLogoHQ} alt="Ultimate Futsal Logo" />
          </div>
          <div className="border-2 w-4/5 md:w-1/3 text-xl md:text-lg p-4 rounded-lg border-gray-800">
            <p className="text-justify">Welcome to Ultimate Futsal! The ultimate multiplayer 2D soccer game playable directly in your browser!
Compete in thrilling 4vs4 matches. Team up with your friends or take on challengers from across the globe. Every goal matters! Play now! Collect coins and spend them in our virtual shop!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
