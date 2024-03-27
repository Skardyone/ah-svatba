"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Martina",
    designation: "svědkyně",
    image: "/svedkyne.jpg",
  },

  {
    id: 2,
    name: "Patrik",
    designation: "svědek",
    image: "/svedek.jpg",
  },
  {
    id: 3,
    name: "Barbora",
    designation: "fotografka",
    image: "/fotografka.jpg",
  },
];

function People() {
  return (
    <>
      <h3 className="uppercase text-[2rem] xl:text-[4rem] font-bold pt-16">
        Důležité osoby
      </h3>
      <div className="hidden xl:flex h-[70vh] w-full  flex-row items-center justify-center">
        <AnimatedTooltip items={people} />
      </div>
      <div className="min-h-screen w-full xl:hidden flex flex-col lg:flex-row items-center justify-center py-8 space-y-5">
        {people.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center font-bold"
          >
            <Image
              height={250}
              width={250}
              src={item.image}
              alt={item.name}
              className=" object-cover !m-0 !p-0 object-top rounded-full h-40 w-40 border-4 group-hover:scale-105 group-hover:z-30 border-bezova  relative transition duration-500"
            />
            <span className="text-lg">{item.name}</span>
            <span className="text-base">{item.designation}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default People;
