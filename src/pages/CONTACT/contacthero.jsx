import React from "react";
import Contactbg from "../../assets/back/contactbg.jpg";

export default function Abouthero() {
  return (
    <div
      className=" px-[100px] bg-cover bg-center items-center flex -mt-9  h-[300px] justify-center  "
      style={{
        backgroundImage: `url(${Contactbg})`,
      }}
    >
      <div>
        <p className="text-[#ffffff]  text-[14px] font-semibold mt-3 drop-shadow text-center">
          Home / CONTACT
        </p>
        <h1 className="text-[#ffffff]   text-[50px] font-extrabold drop-shadow-lg">
          Contact
        </h1>
      </div>
    </div>
  );
}
