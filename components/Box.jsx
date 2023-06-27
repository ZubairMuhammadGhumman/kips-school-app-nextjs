import React from "react";

export default function box(props) {
  return (
    <div className="font-PoppinsRegular gap-x-10">
      <div className="flex border-2 border-dashed py-5 px-4 border-[#A9A9A9] flex-wrap md:justify-normal justify-between">
        <div className=" gap-x-3 items-center lg:flex md:grid grid-cols-1">
          <div>
            <img className="w-14 bg-[#F9F9F9] p-4" src={props.icon} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-[#122B2E]">
              {props.heading}
            </h1>
            <p className="w-48 text-[#CECECE] text-xs">{props.paragraph}</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <p className="font-bold text-2xl text-[#122B2E]">
            <span>{props.performance}</span>
            <span className="text-sm">/100</span>
          </p>
          <p
            className={
              "bg-[#E8FFF3] text-[#65D498] py-1 px-2 font-bold text-xs rounded-md " +
              (props.text_color == true ? "text-[#C4C4C4]" : "text-[#FFD84E]")
            }
          >
            {props.total_performance}
          </p>
        </div>
      </div>
    </div>
  );
}
