import React from "react";

export default function TimetableTabs() {
  return (
    <div className="font-PoppinsRegular mr-9">
      <div className="pt-5 flex gap-x-14 justify-end w-full items-center text-lg text-[#212529]">
        <h1 className="text-[#C32026] font-bold border-b-2 border-[#C32026]">
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

      <div className="flex justify-end w-3/4">
        <div className="w-28  "></div>
      </div>
      <div className="w-full h-px bg-[#EAEAEA]"></div>
    </div>
  );
}
