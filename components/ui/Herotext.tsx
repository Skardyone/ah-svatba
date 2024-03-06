import React from "react";
import { Allura } from "next/font/google";

const allura = Allura({ weight: "400", subsets: ["latin"] });

function Herotext() {
  return (
    <div className={allura.className}>
      <div className="z-50 flex flex-col lg:flex-row text-center md:gap-5 xl:gap-16">
        <span className="text-[5rem] md:text-[8rem] lg:text-[11rem] flex flex-col items-center justify-center">
          Hedvika
        </span>
        <span className='text-[3rem] md:text-[5rem] lg:text-[7rem] flex flex-col items-center justify-center'>&</span>
        <span className='text-[5rem] md:text-[8rem] lg:text-[11rem] flex flex-col items-center justify-center'>Adam</span>
      </div>
    </div>
  );
}

export default Herotext;
