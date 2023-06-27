import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function LoanPopup(props) {
  const { onClose } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-opacity-40 bg-[#C9DEE9] font-PoppinsRegular">
      <div className="bg-white rounded-xl p-7 w-7/12 shadow-2xl">
        <div className="flex justify-between">
          <h1 className="text-md font-PoppinsSemiBold ">
            Submit Loan Application
          </h1>

          <div className="cursor-pointer">
            <AiFillCloseCircle size={"25"} onClick={onClose} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-7">
          <label className="text-xs font-bold">Loan Reason</label>
          <select className="border-2 border-[#D9D7D7] text-[#D9D6D6] rounded-lg px-5 py-3 font-PoppinsRegular outline-none  text-sm">
            <option className="text-xs ">Choose</option>
            <option value="">Select-1</option>
            <option value="">Select-2</option>
            <option value="">Select-2</option>
          </select>
        </div>

        <h1 className="text-xs font-bold mt-5 mb-3">Loan Reason Detail</h1>
        <textarea
          className="w-full rounded-lg border-2 border-[#D9D7D7] outline-none"
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>

        <div className="xl:flex justify-between gap-x-11">
          <div className="w-full">
            <h1 className="text-xs font-bold mt-5 mb-3">Loan From</h1>
            <div className="border-2 border-[#D9D7D7] rounded-lg  px-5 py-3">
              <div className="flex justify-between items-center">
                <DatePicker
                  className="outline-none md:w-full w-24"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <FaCalendarAlt color="#A81C21" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-xs font-bold mt-5 mb-3">Loan To</h1>
            <div className="border-2 border-[#D9D7D7] rounded-lg  px-5 py-3">
              <div className="flex justify-between items-center">
                <DatePicker
                  className="outline-none md:w-full w-24"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <FaCalendarAlt color="#A81C21" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex justify-between gap-x-11">
          <div className="w-full">
            <h1 className="text-xs font-bold mt-5 mb-3">
              Loan Duration (Days)
            </h1>
            <input
              className="outline-none border-2 border-[#D9D7D7] rounded-lg px-5 py-3 w-full"
              type="number"
              placeholder="0"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <h1 className="text-xs font-bold mt-5 mb-3">Loan Amount</h1>
            <input
              className="outline-none border-2 border-[#D9D7D7] rounded-lg  px-5 py-3 w-full"
              type="number"
              placeholder="0.00"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-xs font-bold mt-5 mb-3">Loan Amount</h1>
          <input
            className="outline-none border-2 border-[#D9D7D7] rounded-lg  px-5 py-3 w-full"
            type="number"
            placeholder="0.00"
            name=""
            id=""
          />
        </div>
        <div className="md:flex grid gap-y-2 justify-center w-full gap-x-12 mt-6">
          <button className="xl:text-lg text-xs lg:px-16 px-7 bg-[#C32026] text-[#D5EAF6] py-3 shadow-md rounded-md font-thin">
            Application Listing
          </button>
          <button
            className="xl:text-lg text-xs lg:px-16 px-7 bg-[#007FC6] text-[#D5EAF6] py-3 shadow-md rounded-md font-thin"
            onClick={onClose}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
