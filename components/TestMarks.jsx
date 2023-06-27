import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function TestMarks() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="">
      <div className="block pt-8 px-7 font-PoppinsRegular">
        <div className="w-full overflow-auto">
          <table className="bg-white shadow-lg w-full ">
            <thead className="bg-[#FED5D7] font-bold text-sm shadow-md">
              <tr>
                <td className="pl-14 pr-32 py-5 rounded-tl-md rounded-bl-md">
                  Campus
                </td>
                <td className="px-32">Program</td>
                <td className="px-32">Discipline</td>
                <td className="px-32 rounded-tr-md rounded-br-md">Section</td>
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
            </tbody>
          </table>
        </div>
        <div className="w-full overflow-auto">
          <table className="bg-white shadow-lg mt-6 w-full">
            <thead className="bg-[#FED5D7] font-bold text-sm shadow-md">
              <tr className="text-center">
                <td colSpan="6" className="px-32 py-5 ">
                  Allocated Teachers
                </td>
              </tr>
            </thead>
            <tbody className="text-lg text-center">
              <tr className="border-b-2 ">
                <td className="pl-3 pr-8 py-3  border-r-2 border-[#EADEDF] ">
                  PHY
                </td>
                <td className="pl-3 pr-8 text-center border-r-2 border-[#EADEDF]">
                  CHEM
                </td>
                <td className="pl-3 pr-8  text-center border-r-2 border-[#EADEDF]">
                  BIO / MATH
                </td>
                <td className="pl-3 pr-8 text-center border-r-2 border-[#EADEDF]">
                  URDU
                </td>
                <td className="pl-3 pr-8 text-center border-r-2 border-[#EADEDF]">
                  ENG
                </td>
                <td className="pl-3 pr-8 text-center border-r-2 border-[#EADEDF]">
                  IS / PS
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="pl-3 pr-8 py-3 border-r-2 border-[#EADEDF] ">
                  Trial Farooq Physics
                </td>
                <td className="pl-3 pr-8 py-3 text-center border-r-2 border-[#EADEDF]">
                  Trial
                </td>
                <td className=" text-center border-r-2 border-[#EADEDF]">/</td>
                <td className="text-centerpl-3 pr-8 py-3 border-r-2 border-[#EADEDF]"></td>
                <td className=" text-center border-r-2 border-[#EADEDF]"></td>
                <td className="text-centerpl-3 pr-8 py-3 border-r-2 border-[#EADEDF]">
                  /
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white mt-6 rounded-lg w-full overflow-auto">
          <div className="flex md:flex-row flex-col py-4 w-full overflow-auto">
            <div className="flex md:justify-start justify-between items-center">
              <h1 className="font-semibold text-lg p-3 ">Test Date</h1>
              <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                <DatePicker
                  className="outline-none bg-[#F7F8FC]"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <FaCalendarAlt size={22} color="#A81C21" />
              </div>
            </div>
            <div className="flex md:justify-start justify-between items-center">
              <h1 className="font-semibold text-lg p-3">Test type</h1>
              <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                <select
                  className="bg-[#F7F8FC] pr-12 outline-none"
                  name=""
                  id=""
                >
                  <option value="">CH-WISE</option>
                  <option value="">select-1</option>
                  <option value="">select-2</option>
                  <option value="">select-3</option>
                </select>
              </div>
            </div>
            <div className="flex md:justify-start justify-between items-center">
              <h1 className="font-semibold text-lg p-3">Test Number</h1>
              <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                <select
                  className="bg-[#F7F8FC] pr-5 outline-none"
                  name=""
                  id=""
                >
                  <option value="">T-1</option>
                  <option value="">select-1</option>
                  <option value="">select-2</option>
                  <option value="">select-3</option>
                </select>
              </div>
            </div>
            <div className="flex md:justify-start justify-between items-center">
              <h1 className="font-semibold text-lg p-3">Test Total Marks</h1>
              <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                <select className="bg-[#F7F8FC] outline-none" name="" id="">
                  <option value="">25</option>
                  <option value="">select-1</option>
                  <option value="">select-2</option>
                  <option value="">select-3</option>
                </select>
              </div>
            </div>
          </div>
          <table className="bg-white shadow-lg mt-6 w-full">
            <thead className="bg-[#FED5D7] font-bold text-sm shadow-md">
              <tr className="text-center">
                <td className="px-3 py-5"></td>
                <td className="px-3 py-5"></td>
                <td className="px-3 py-5"></td>
                <td className="px-3 py-5"></td>
                <td className="px-3 py-5"></td>
                <td className="px-3 py-5"></td>
                <td
                  colSpan="2"
                  className="px-3 py-5 border-r-2 border-l-2 border-[#E3C1C3]"
                >
                  Matric Result
                </td>
                <td className="px-3 py-5"></td>
                <td className="px-3 py-5"></td>
              </tr>
              <tr className="text-center border-t-2 border-[#E3C1C3]">
                <td className="px-4 py-5 border-r-2 border-[#E3C1C3]">#</td>
                <td className="px-4 py-5 border-r-2 border-[#E3C1C3]">
                  Roll #
                </td>
                <td className="px-4 py-5 border-r-2 border-[#E3C1C3]">
                  Registration #
                </td>
                <td className="px-4 py-5 border-r-2 border-[#E3C1C3]">Name</td>
                <td className="px-4 py-5">Father</td>
                <td className="px-4 py-5 border-r-2 border-[#E3C1C3]">
                  Discipline
                </td>
                <td className="px-4 py-5">Total</td>
                <td className="px-4 py-5 border-r-2 border-[#E3C1C3]">
                  Subject
                </td>
                <td className="px-4 py-5">T-1(25)</td>
                <td className="px-4 py-5">Test Marks</td>
              </tr>
            </thead>
            <tbody className="text-lg text-center">
              <tr className="border-2">
                <td className="px-2 py-3  border-r-2 border-[#EADEDF] ">01</td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  1
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  22-4-5-1-169
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  Ayyaz 16 Aug
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  Ayyaz 16 Aug
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  FSc (Pre-Med)
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  434
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  -
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  10
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  0
                </td>
              </tr>
              <tr className="border-2">
                <td className="px-2 py-3  border-r-2 border-[#EADEDF]">02</td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  1
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  22-4-5-1-169
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  00000-0000
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  00000-0000
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  FSc (Pre-Med)
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  434
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  -
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  15
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  0
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3  border-r-2 border-[#EADEDF] ">03</td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  1
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  22-4-5-1-169
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  Trial Ayyaz
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  Trial Ayyaz
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  FSc (Pre-Med)
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  434
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  -
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  20
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  0
                </td>
              </tr>
              <tr>
                <td className="px-2 py-3  border-r-2 border-[#EADEDF]">04</td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  1
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  Rimsha
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  Rimsha
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  Ayyaz 16 Aug
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  FSc (Pre-Med)
                </td>
                <td className="px-2  text-center border-r-2 border-[#EADEDF]">
                  434
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  -
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  0
                </td>
                <td className="px-2 text-center border-r-2 border-[#EADEDF]">
                  0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end w-full mt-10 mb-16 pr-7">
        <button className=" shadow  bg-[#DC131B] text-[#D5EAF6] pl-40 pr-32 py-3 rounded-md font-thin text-lg">
          Save
        </button>
      </div>
    </div>
  );
}
