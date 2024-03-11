import About from "@/components/About";
import Areal from "@/components/Areal";
import Day from "@/components/Day";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Day/>
      <Areal/>
    </main>
  );
}
