import React from "react";

export default function Heading(props) {
  return (
    <div className="block py-9 font-PoppinsSemiBold bg-[#FFFFFF] shadow-md lg:text-start md:text-start text-center">
      <h1 className="text-[#00457F] lg:text-4xl md:text-3xl text-2xl md:ml-8 ml-0">
        {props.main_heading}
      </h1>
    </div>
  );
}
