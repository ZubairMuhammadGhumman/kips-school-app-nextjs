import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function CourseCoverage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="pt-8 px-7 font-PoppinsRegular">
      <div className="grid">
        <div className="w-full overflow-x-auto overflow-y-hidden pb-10">
          <table className="bg-white shadow-lg w-full ">
            <thead className="bg-[#FED5D7] font-bold text-sm shadow-md">
              <tr>
                <th className="pl-14 pr-32 py-5 rounded-tl-md rounded-bl-md">
                  Campus
                </th>
                <th className="px-32">Program</th>
                <th className="px-32">Discipline</th>
                <th className="px-32 rounded-tr-md rounded-br-md">Section</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b-2 shadow-md">
                <td className="pl-8 pr-12 py-5 border-r-2 border-[#EADEDF] ">
                  Trial campus
                </td>
                <td className="p-5 text-center border-r-2 border-[#EADEDF]">
                  Intermediate
                </td>
                <td className="pr-7 py-5 text-center border-r-2 border-[#EADEDF]">
                  FSc (Pre-Med)
                </td>
                <td className="text-center py-5 border-r-2 border-[#EADEDF]">
                  PMB-2
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="bg-white h-64   w-full">
                  <div className="flex gap-x-3 mx-10">
                    <div>
                      <h1 className="font-semibold text-sm mb-3">Date</h1>
                      <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                        <DatePicker
                          className="outline-none bg-[#F7F8FC] pr-3"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <FaCalendarAlt size={22} color="#A81C21" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-3" htmlFor="">
                        Topic
                      </label>
                      <select
                        className="bg-[#F7F8FC] outline-none pl-2 rounded-md py-3 border-2 w-full"
                        name=""
                        id=""
                      >
                        <option value="">Choose...</option>
                        <option value="">select-1</option>
                        <option value="">select-2</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between items-end gap-x-3 mx-10">
                    <div className="flex flex-col w-2/3 ">
                      <label className="mb-2 mt-5" htmlFor="">
                        Type
                      </label>
                      <select
                        className="bg-[#F7F8FC] outline-none pl-2 pr-10 py-3 border-2 rounded-md"
                        name=""
                        id=""
                      >
                        <option value="">Lecture</option>
                        <option value="">select-1</option>
                        <option value="">select-2</option>
                      </select>
                    </div>
                    <button className="h-12 shadow  bg-[#DC131B] text-[#D5EAF6] pl-40 pr-32 py-3 rounded-md font-thin text-lg">
                      Save
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid">
        <div className="w-full overflow-x-auto overflow-y-hidden pb-10">
          <table className="bg-white shadow-sm w-full ">
            <thead className="bg-[#FED5D7] font-bold text-sm">
              <tr>
                <th className="py-5 rounded-tl-md">#</th>
                <th className="pr-24">Date</th>
                <th className="text-left pr-96">Topic</th>
                <th colSpan="2" className="pr-96 rounded-tr-md text-left">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 shadow-md">
                <td className="px-3 pt-5 pb-4">01</td>
                <td className="pt-5 pb-4">2023-04-12</td>
                <td className="pt-5 pb-4">
                  Errors & uncertainties, Significant figures (concept and
                  rules)
                </td>
                <td className="flex justify-between items-center pt-5 pb-4 ">
                  <span>Test</span>
                  <button className="bg-[#DC131B] text-[#F4D9DA] mr-5 px-14 py-2 rounded-md text-xs shadow">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
