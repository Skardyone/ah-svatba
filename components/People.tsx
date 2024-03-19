"use client"
import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip"

const people = [
    {
      id: 1,
      name: "Barbora",
      designation: "fotografka",
      image:
        "/fotografka.jpg",
    },
    {
      id: 2,
      name: "Patrik",
      designation: "svědek",
      image:
        "/svedek.jpg",
    },
    {
      id: 3,
      name: "Martina",
      designation: "svědkyně",
      image:
        "/svedkyne.jpg",
    },
  ];

function People() {
  return (
    <div className='h-[70vh] w-full flex flex-row items-center justify-center'>
        <AnimatedTooltip items={people}/>
    </div>
  )
}

export default People