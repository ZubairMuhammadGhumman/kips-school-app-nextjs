import React from "react";

export default function Timetable1Table() {
  return (
    <div className="grid">
      <div className="px-5 w-full overflow-x-auto h-[735px]  ">
        <div className="xl:w-full w-[1000px] ">
          <div className=" bg-white rounded-lg shadow-lg mb-9 w-full overflow-x-auto">
            <div className="grid grid-cols-7 border-b-2 items-center ">
              <h1 className="border-r-2 pt-9 pl-5 pr-6 pb-4 font-semibold">
                Section
              </h1>
              <h1 className="px-14 pt-3 font-semibold">Monday</h1>
              <h1 className="px-14 pt-3 font-semibold">Tuesday</h1>
              <h1 className="px-14 pt-3 font-semibold">Wednesday</h1>
              <h1 className="px-12 pt-3 font-semibold">Thursday</h1>
              <h1 className="px-20 pt-3 font-semibold">Friday</h1>
              <h1 className="px-14 pt-3 font-semibold">Saturday</h1>
            </div>
            <div className="grid grid-cols-7">
              <div className="border-r-2">
                <p className="text-center py-14 font-semibold">PMB-2</p>
              </div>
              <p className="flex flex-col justify-center text-center bg-[#3AB54A] mx-7 my-5 text-white">
                <span>07:30 - 08:20 </span>
                <span>Physics</span>
                <span>(1-6)</span>
              </p>
              <p className="bg-[#ED145B] mx-7 my-5 pt-9 text-center  text-white">
                -
              </p>
              <p className="bg-[#733D95] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
              <p className="bg-[#F68C04] mx-7 my-5 pt-9  text-center text-white">
                -
              </p>
              <p className="bg-[#3AB54A] mx-7 my-5 pt-9 text-center  text-white">
                -
              </p>
              <p className="bg-[#104EA3] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
            </div>
            <div className="grid grid-cols-7">
              <div className="border-r-2">
                <p className="py-14 text-center font-semibold">PMB-2</p>
              </div>
              <p className=" bg-[#3AB54A] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
              <p className="flex flex-col justify-center text-center bg-[#ED145B] mx-7 my-5 text-white">
                <span>08:20 - 09:00 </span>
                <span>Physics</span>
                <span>(1-6)</span>
              </p>
              <p className="bg-[#733D95] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
              <p className="bg-[#F68C04] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
              <p className="bg-[#3AB54A] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
              <p className="bg-[#104EA3] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
            </div>
            <div className="grid grid-cols-7">
              <div className="border-r-2">
                <p className=" py-14 text-center font-semibold">PMB-2</p>
              </div>
              <p className="bg-[#3AB54A] mx-7 my-5 pt-9 text-center  text-white">
                -
              </p>
              <p className="bg-[#ED145B] mx-7 my-5 pt-9 text-center  text-white">
                -
              </p>
              <p className="bg-[#733D95] mx-7 my-5 pt-9 text-center  text-white">
                -
              </p>
              <p className="bg-[#F68C04] mx-7 my-5 pt-9 text-center text-white">
                -
              </p>
              <p className="bg-[#3AB54A] mx-7 my-5 pt-9 text-center  text-white">
                -
              </p>

              <p className="flex flex-col justify-center items-center bg-[#104EA3] mx-7 my-5 text-white">
                <span>11:30 - 12:10</span>
                <span>Physics</span>
                <span>(1-6)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
