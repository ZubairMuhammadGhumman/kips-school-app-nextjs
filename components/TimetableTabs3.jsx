import React from "react";

export default function TimetableTabs3() {
  return (
    <div className="font-PoppinsRegular mx-9">
      <div className="pt-2 flex gap-x-14 w-full items-center text-[#212529]  lg:text-lg lg:justify-end justify-center text-sm md:flex-row flex-col ">
        <h1 className="border-b-2  border-[#C32026] text-[#C32026] font-bold md:py-5 py-1">
          COURSE COVERAGE
        </h1>
        <h1>TEST RETURN</h1>
        <h1>TEST MARKS</h1>
        <div className="">
          <select className="bg-[#FAFAFA] outline-none" name="" id="">
            <option value="">REPORTS</option>
            <option value="">select-1</option>
            <option value="">select-2</option>
            <option value="">select-3</option>
          </select>
        </div>
      </div>
      <div className="w-full h-px bg-[#EAEAEA]"></div>
    </div>
  );
}
