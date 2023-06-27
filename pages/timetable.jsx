import React, { useState } from "react";
import Layout from "@/components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimetableTabs from "@/components/TimetableTabs";

const timetable = [
  {
    id: 0,
    information_1: "Campus",
    information_2: "Trial campus",
  },
  {
    id: 1,
    information_1: "Program *",
    information_2: "Intermediate",
  },
  {
    id: 2,
    information_1: "Discipline *",
    information_2: "FSc (Pre-Med)",
  },
  {
    id: 3,
    information_1: "Section *",
    information_2: "PMB-2",
  },
  {
    id: 4,
    information_1: "Subject *",
    information_2: "Physics",
  },
  {
    id: 5,
    information_1: "Teacher Name *",
    information_2: "AYYAZ PHYSICS",
  },
  {
    id: 6,
    information_1: "Section Strength",
    information_2: "0",
  },
  {
    id: 7,
    information_1: "Test Date",
    information_2: "YYYY-mm-dd",
  },
];

export default function Timetable(props) {
  const { onClose } = props;
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Layout>
        <TimetableTabs />
        <div className="p-5 grid grid-cols-11 ">
          <div className="col-span-7 flex flex-col gap-y-5 px-8 pt-8 pb-7 bg-[#FFFFFF] mr-5 shadow-lg rounded-lg ml-2">
            <div className="flex flex-col gap-y-2">
              <label className="font-PoppinsSemiBold">Test Type *</label>
              <select className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none">
                <option value="">CH-WISE</option>
                <option value="">Select-1</option>
                <option value="">Select-2</option>
                <option value="">Select-2</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-PoppinsSemiBold">Test Number *</label>
              <select className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none">
                <option value="">Choose...</option>
                <option value="">Select-1</option>
                <option value="">Select-2</option>
                <option value="">Select-2</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-PoppinsSemiBold">Test Returned *</label>
              <select className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none">
                <option value="">s</option>
                <option value="">Select-1</option>
                <option value="">Select-2</option>
                <option value="">Select-2</option>
              </select>
            </div>
            <div className="">
              <h1 className="mb-2 font-PoppinsSemiBold">Return Date</h1>
              <div className="">
                <DatePicker
                  className="bg-[#F8F9FD] px-2 py-4 rounded-sm font-PoppinsRegular outline-none w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="flex justify-center w-full gap-x-12 mt-4">
              <button className="bg-[#007FC6] text-[#D5EAF6] px-16 py-3 shadow-md rounded-md font-thin text-lg">
                Load Test Date
              </button>
              <button
                className="bg-[#C32026] text-[#D5EAF6] px-16 py-3 shadow-md rounded-md font-thin text-lg"
                onClick={onClose}
              >
                Save Test Return
              </button>
            </div>
          </div>
          <div className="col-span-4 bg-[#FEE9EA] font-RobotoRegular ml-2 mr-3 shadow-md text-xl rounded-lg">
            {timetable.map((e, i) => (
              <div key={i} className="grid grid-cols-2">
                <h1 className="font-PoppinsSemiBold text-lg px-7 py-9 border-b-2 border-r-2 border-[#F0DEDF] h-16 w-full">
                  {e.information_1}
                </h1>
                <h1 className="font-PoppinsRegular text-lg pl-14 py-9 border-b-2 border-[#F0DEDF] h-16 w-full">
                  {e.information_2}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
