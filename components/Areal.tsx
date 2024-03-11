import React from "react";
import Map from "./ui/Map";

function Areal() {
  return (
    <div className="h-[80vh] w-full bg-zelena flex flex-col lg:flex-row items-center justify-center">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-1/2 xl:p-6 flex flex-col items-center justify-center">
          <h3>Statek Háječek</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            mollitia! Aspernatur, hic. Nobis suscipit doloremque iure architecto
            nostrum sapiente iste libero dicta nam earum aliquid maiores qui
            amet ipsam, minus dolor ab minima cupiditate voluptates doloribus
            est! Recusandae, beatae ullam expedita in quas, saepe ut neque,
            quibusdam iure maxime totam!
          </p>
        </div>
        <div className="w-full h-1/2 bg-bezova"></div>
      </div>
      <div className="h-full w-full flex flex-row items-center justify-center bg-bezova">
        <Map />
      </div>
    </div>
  );
}

export default Areal;
