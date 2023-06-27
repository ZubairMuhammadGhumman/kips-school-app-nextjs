import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Timetable1Tabs() {
  return (
    <div className="font-PoppinsRegular">
      <div className="ml-3 mr-5 flex pt-7 pb-5 justify-between">
        <div className="flex gap-x-14 ">
          <div className="">
            <select
              className="outline-none bg-[#F8F9FA] font-PoppinsSemiBold text-2xl "
              name=""
              id=""
            >
              <option value="">Class XI</option>
              <option value="">select-1</option>
              <option value="">select-1</option>
            </select>
          </div>
          <div className="">
            <select
              className="outline-none bg-[#F8F9FA] font-PoppinsSemiBold text-2xl "
              name=""
              id=""
            >
              <option value="">March 2023</option>
              <option value="">select-1</option>
              <option value="">select-1</option>
            </select>
          </div>
        </div>
        <MdOutlineFileDownload size={28} color="#C32026" />
      </div>
    </div>
  );
}
