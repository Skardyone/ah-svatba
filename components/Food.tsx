import React from "react";
import { GiKnifeFork } from "react-icons/gi";

function Food() {
  return (
    <div className="h-[50vh] xl:h-[30vh] xl:my-8 w-full px-6 md:w-3/4 xl:w-3/4 font-light text-base md:text-xl xl:text-xl flex flex-col items-center justify-center border-t-2 border-zelena pb-8">
      <p className=""><span className="text-[4rem]"><GiKnifeFork /></span>
        Během celého dne bude pro všechny zajištěno jídlo a nápoje. Před obřadem
        bude na vás čekat drobné občerstvení (knoflíky u košile musí vydržet
        přes obřad). Slavnostní hostina bude zahrnovat společnou polévku s
        pestrým rautem. K odpolední kávě bude rozkrojen svatební dort. V
        podvečer bude zajištěno grilování a během večerní zábavy bude k
        dispozici studený raut.
      </p>
    </div>
  );
}

export default Food;
