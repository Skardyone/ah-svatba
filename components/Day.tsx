import React from "react";
import { WiTime3 } from "react-icons/wi";
import {
  MdOutlinePhotoCamera,
  MdPhotoCameraFront,
  MdPlace,
} from "react-icons/md";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaCarAlt, FaRegCalendarAlt } from "react-icons/fa";
import {
  GiKnifeFork,
  GiLinkedRings,
  GiMusicalNotes,
  GiStairsCake,
} from "react-icons/gi";
import { PiSneakerMoveBold } from "react-icons/pi";

function Day() {
  return (
    <div className=" xl:h-screen w-full py-6 px-8 xl:py-16 flex flex-col items-center xl:space-y-10">
      <h2 className="text-center uppercase font-bold m-4 text-[2rem] xl:text-[4rem]">
        svatební den
      </h2>
      <div className="w-full h-[25vh] xl:h-[30vh] flex flex-row xl:flex-row items-center justify-around">
        <div className="h-full w-1/2 flex flex-col items-center justify-center xl:justify-around">
          <span className="text-[1.5rem] font-bold">Datum</span>
          <span className="text-[5rem] xl:text-[6rem]">
            <FaRegCalendarAlt />
          </span>
          <div className="flex flex-col items-center justify-center text-xl font-bold">
            <p>10.8.2024</p>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center xl:justify-around">
          <span className="text-[1.5rem] font-bold">Místo</span>
          <span className="text-[5rem] xl:text-[6rem]">
            <MdPlace />
          </span>
          <div className="flex flex-col items-center justify-center text-xl font-bold text-center">
            <p>Statek Háječek</p>
          </div>
        </div>
      </div>
      <div className="xl:py-8 flex space-x-10 xl:space-x-0 xl:gap-0 flex-row lg:py-16 xl:flex-col">
        <div className="flex flex-col h-screen w-1 xl:w-full xl:h-1 bg-bezova xl:flex-row items-center justify-around">
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
        </div>
        <div className="flex h-screen flex-col justify-stretch xl:grid xl:grid-cols-8 xl:gap-0 xl:py-8 ">
          <div className="h-full w-full flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <FaCarAlt />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>11:00 - 12:00</p>
              <p>Příjezd hostů</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <GiLinkedRings />
            </span>
            <div className="flex flex-col items-start lg:items-center justify-center text-center font-bold  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>13:00</p>
              <p>Svatební obřad</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <MdOutlinePhotoCamera />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Společné focení</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <GiKnifeFork />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Slavnostní hostina</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <GiStairsCake />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Krájení dortu</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <PiSneakerMoveBold />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Novomanželský tanec</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <MdPhotoCameraFront />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Fotokoutek</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <span className="text-[3rem] md:text-[4rem] xl:text-[5rem]">
              <GiMusicalNotes />
            </span>
            <div className="flex flex-col items-center justify-center text-center font-bold md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Večerní zábava</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day;
