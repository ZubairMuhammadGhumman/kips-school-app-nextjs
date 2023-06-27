import React from "react";

export default function Tabs() {
  return (
    <div className="font-PoppinsRegular mx-9">
      <div className="pt-2 flex lg:flex-row flex-col lg:text-lg lg:justify-between justify-center text-sm ">
        <h1 className="font-PoppinsSemiBold ml-4 text-2xl py-3 lg :text-start text-center">
          Nominal Roll
        </h1>
        <div className="flex gap-x-14 items-center  text-[#212529] lg:text-lg text-sm flex-col md:flex-row justify-center">
          <h1>COURSE COVERAGE</h1>
          <h1>TEST RETURN</h1>
          <h1>TEST MARKS</h1>
          <div className="border-b-2 border-[#C32026] md:py-4 py-1">
            <select
              className="bg-[#FAFAFA] text-[#C32026] font-bold outline-none"
              name=""
              id=""
            >
              <option value="">REPORTS</option>
              <option value="">select-1</option>
              <option value="">select-2</option>
              <option value="">select-3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#EAEAEA]"></div>
    </div>
  );
}
