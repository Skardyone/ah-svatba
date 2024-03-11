import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[90vh] md:h-[70vh] w-full bg-zelena flex flex-row justify-center items-center lg:py-8">
        <p className="w-full p-6 md:p-10 lg:w-[70%] text-base md:text-xl lg:text-xl font-bold tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          aperiam, in assumenda optio quibusdam placeat? Recusandae voluptatum
          quod minima aspernatur aliquid quam reprehenderit ullam nisi mollitia,
          blanditiis nesciunt possimus officiis fuga sapiente hic rem
          consectetur dolorum quaerat quibusdam sit dolore ducimus qui ea. Dicta
          laborum aliquid, dignissimos delectus numquam facilis sunt nisi
          commodi, consectetur dolores nobis, officia enim tempore sapiente
          distinctio natus eaque? Voluptatum laudantium sed consequatur
          aspernatur distinctio vitae repellendus sint doloribus nesciunt
          numquam voluptate perferendis architecto cumque, autem tempora
        </p>
      </div>
      <div className="relative min-h-[100svh] -top-24 md:-top-36 space-y-6 md:space-y-10 lg:space-y-0 w-full p-8 lg:p-4 flex flex-col lg:flex-row items-center justify-evenly ">
        <div className="relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%] bg-bezova rounded-md">
          <Image src={"/img-855.jpg"} alt="img1" fill className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"/>
        </div>
        <div className="relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
        <Image src={"/img-856.jpg"} alt="img1" fill className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"/>
        </div>
        <div className="relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
        <Image src={"/img-857.jpg"} alt="img1" fill className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"/>
        </div>
        <div className="relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
        <Image src={"/img-858.jpg"} alt="img1" fill className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"/>
        </div>
      </div>
      <div className="relative -top-16 lg:-top-28 h-[2px] w-3/4 mx-auto bg-zelena"></div>
    </div>
  );
}

export default About;
