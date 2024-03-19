import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[90vh] md:h-[70vh] w-full bg-zelena flex flex-row justify-center items-center lg:py-8">
        <p className="w-full p-6 md:p-10 lg:w-[70%] text-base md:text-xl lg:text-xl font-bold tracking-wider lin">
          Vítejte na našem svatebním webu! Ne, tohle není jen další stránka s
          roztomilými koťátky, ani blog o tom, jak se naučit pletení v pěti
          jednoduchých krocích. Je to místo, kde jsme se rozhodli sdílet svou
          cestu k oltáři, a vy jste ti šťastlivci, kteří to budou sledovat z
          první řady. Nebojte se, i když máme občas tendenci spadnout do pasti
          romantických klišé, snažíme se držet nohy na zemi. <br /> Takže, naše milá
          rodino a přátelé, připravte se na jízdu plnou lásky, smíchu a možná
          nějaké té slzy (ale jen té šťastné). Tak pojďte s námi na tuhle
          bláznivou jízdu zvanou svatba. Těšíme se na vás!
        </p>
      </div>
      <div className="relative min-h-[100svh] -top-24 md:-top-40 2xl:-top-60 space-y-6 md:space-y-10 lg:space-y-0 w-full p-8 lg:p-4 flex flex-col lg:flex-row items-center justify-evenly ">
        <div className="relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%] bg-bezova rounded-md">
          <Image
            src={"/img-855.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="hidden lg:block relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/img-856.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="hidden lg:block relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/img-857.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/img-858.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
      </div>
      <div className="relative -top-16 lg:-top-32 2xl:-top-48 h-[2px] w-3/4 mx-auto bg-zelena"></div>
    </div>
  );
}

export default About;
