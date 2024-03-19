import About from "@/components/About";
import Areal from "@/components/Areal";
import Day from "@/components/Day";
import Food from "@/components/Food";
import Hero from "@/components/Hero";
import People from "@/components/People";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Day/>
      <Food/>
      <Areal/>
      <People/>
    </main>
  );
}
