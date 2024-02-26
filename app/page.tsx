import About from "@/components/About";
import Acommodation from "@/components/Acommodation";
import Landing from "@/components/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Landing/>
      <About/>
      <Acommodation/>
    </main>
  );
}
