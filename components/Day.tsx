import React from 'react'
import { WiTime3 } from "react-icons/wi";
import { MdPlace } from "react-icons/md";
import { MdAirplanemodeActive } from "react-icons/md";

function Day() {
  return (
    <div className='min-h-screen xl:h-screen w-full py-6 px-8 xl:py-16 flex flex-col items-center xl:space-y-10'>
        <h2 className='text-center uppercase font-bold m-4 text-[2rem] xl:text-[4rem]'>svatební den</h2>
        <div className='w-full h-[25vh] xl:h-[30vh] flex flex-row xl:flex-row items-center justify-around'>
            <div className='h-full w-1/2 flex flex-col items-center justify-center xl:justify-around'>
                <span className='text-[1.5rem] font-bold'>čas obřadu</span>
                <span className='text-[5rem] xl:text-[6rem]'><WiTime3 /></span>
                <div className='flex flex-col items-center justify-center text-xl font-bold'>
                    <p>13:00</p>
                    <p>10.8.2024</p>
                </div>
            </div>
            <div className='h-full w-1/2 flex flex-col items-center justify-center xl:justify-around'>
            <span className='text-[1.5rem] font-bold'>místo obřadu</span>
                <span className='text-[5rem] xl:text-[6rem]'><MdPlace /></span>
                <div className='flex flex-col items-center justify-center text-xl font-bold text-center'>
                    <p>Statek <br/> Háječek</p>
                </div>
            </div>
        </div>
        <div className='xl:h-[25vh] w-full flex flex-col space-y-10 xl:space-y-0 xl:flex-row items-center justify-evenly border-t-2 border-bezova py-8 xl:py-4'>
            <div className='h-full w-full xl:w-[10%] flex flex-col items-center justify-around'>
                <span className='text-[3rem]'><MdAirplanemodeActive /></span>
                <div className='flex flex-col items-center justify-center text-xl font-bold'>
                    <p>11:00</p>
                    <p>Příjezd hostů</p>
                </div>
            </div>
            <div className='h-full w-full xl:w-[10%] flex flex-col items-center justify-around'>
                <span className='text-[3rem]'><MdAirplanemodeActive /></span>
                <div className='flex flex-col items-center justify-center text-xl font-bold'>
                    <p>11:00</p>
                    <p>Příjezd hostů</p>
                </div>
            </div>
            <div className='h-full w-full xl:w-[10%] flex flex-col items-center justify-around'>
                <span className='text-[3rem]'><MdAirplanemodeActive /></span>
                <div className='flex flex-col items-center justify-center text-xl font-bold'>
                    <p>11:00</p>
                    <p>Příjezd hostů</p>
                </div>
            </div>
            <div className='h-full w-full xl:w-[10%] flex flex-col items-center justify-around'>
                <span className='text-[3rem]'><MdAirplanemodeActive /></span>
                <div className='flex flex-col items-center justify-center text-xl font-bold'>
                    <p>11:00</p>
                    <p>Příjezd hostů</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Day