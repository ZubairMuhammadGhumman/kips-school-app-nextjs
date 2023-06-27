import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function AttendanceReportTable() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" pt-8 px-7 font-PoppinsRegular">
      <div className="grid">
        <div className=" overflow-auto w-full overflow-x-auto overflow-y-hidden pb-10">
          <table className="bg-white shadow-lg mb-6">
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
                <td colSpan="4" className="bg-white h-44 w-full">
                  <div className="flex mx-9 gap-x-20">
                    <div>
                      <h1 className="font-semibold text-sm mb-3">
                        Starting Date
                      </h1>
                      <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                        <DatePicker
                          className="outline-none bg-[#F7F8FC] pr-60"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <FaCalendarAlt size={22} color="#A81C21" />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-semibold text-sm mb-3">
                        Ending Date
                      </h1>
                      <div className="bg-[#F7F8FC] flex items-center border-2 px-4 py-3 rounded-sm">
                        <DatePicker
                          className="outline-none bg-[#F7F8FC] pr-60"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <FaCalendarAlt size={22} color="#A81C21" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
