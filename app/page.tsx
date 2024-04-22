import { Header } from "@/components/header";

import WhiteLogo from "@/assets/white_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-uf-background">
      <Header />
      <section className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center gap-8">
        <div className="flex justify-center items-center gap-8">
          <div className="">
            <Image src={WhiteLogo} alt="Ultimate Futsal Logo" width={100} height={100} />
          </div>
          <div className="">
            <h1 className="text-[4rem] font-extrabold leading-[4.5rem]">
            WELCOME TO <br /><span className="bg-gradient-to-r from-uf-accent-2 to-uf-accent text-transparent bg-clip-text">ULTIMATE</span> FUTSAL</h1>  
          </div>
          <div className="">
            <Image src={WhiteLogo} alt="Ultimate Futsal Logo" width={100} height={100} />
          </div>
        </div>
        <div className="text-4xl bg-uf-primary px-8 py-2 rounded-full transition-transform hover:scale-110">
          <Link className="font-bold" href={"/"}>PLAY NOW</Link>
        </div>
      </section>
    </main>
  );
}
