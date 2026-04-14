import React from "react";
import Herobg from "../../../assets/back/list2hero.jpg";

export default function Hero() {
  return (
    <div
      className=" px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px] bg-cover bg-center items-center flex -mt-9 h-[200px] sm:h-[250px] md:h-[300px] justify-center"
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff] text-sm sm:text-base font-semibold mt-3 drop-shadow text-center">
          Home{" "}
          <span className="ml-2 sm:ml-6 "> TIAMIN GOLD & JEWELLERIES LCC </span>
        </p>
        <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] text-center font-extrabold drop-shadow-lg">
          Subsidiaries
        </h1>
      </div>
    </div>
  );
}
