import React from "react";
import Image from "next/image";
function TechnologyItem({ image }) {
  return (
    <div className="h-full w-[75px]  border-2 border-black rounded-lg flex items-center justify-center">
      <Image src={image} alt="" height={34} width={34} />
    </div>
  );
}

export default TechnologyItem;
