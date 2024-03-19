import React from "react";
import Map from "./ui/Map";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Areal() {
  return (
    <div className="xl:h-[80vh] w-full bg-zelena flex flex-col lg:flex-row items-center justify-center">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-[40vh] xl:h-1/2 p-6 xl:p-6 flex flex-col items-center justify-center space-y-5 font-bold text-base xl:text-xl">
          <h3 className="text-lg xl:text-2xl">Statek Háječek</h3>
          <p>
            - se nachází na samotě u lesa nedaleko obce Hlohovice. Pro svatební
            den je k dispozici celý areál. Je tedy zajištěna dostatečná kapacita
            pro parkování. Pokud vám nebyla nabídnuta možnost ubytování, tak je
            zde možné přenocovat ve vlastním stanu, případně vám můžeme
            doporučit ubytování v blízkém okolí.
          </p>
        </div>
        <div className="w-full h-[30vh] xl:h-1/2 bg-bezova">
          <Carousel opts={{ loop:true}} className="relative w-full h-full">
            <CarouselContent className="w-full xl:h-[40vh]">
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek2.jpg"}
                    alt="statek1"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek.jpeg"}
                    alt="statek1"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="h-[50vh] xl:h-full w-full flex flex-row items-center justify-center bg-bezova">
        <Map />
      </div>
    </div>
  );
}

export default Areal;
